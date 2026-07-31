export {};

type CardSizeKey = 'square' | 'postcard' | 'story';
type CardStyleKey = 'iron' | 'sakura' | 'gold';

type CardSize = {
  width: number;
  height: number;
  label: string;
};

type CardState = {
  image: HTMLImageElement | null;
  imageObjectUrl: string | null;
  size: CardSizeKey;
  style: CardStyleKey;
  title: string;
  date: string;
  note: string;
  zoom: number;
  focusX: number;
  focusY: number;
};

const sizes: Record<CardSizeKey, CardSize> = {
  square: { width: 1080, height: 1080, label: '1:1' },
  postcard: { width: 1000, height: 1480, label: 'はがき縦' },
  story: { width: 1080, height: 1920, label: '9:16' }
};

const canvas = document.querySelector<HTMLCanvasElement>('#memorialCanvas');
const titleInput = document.querySelector<HTMLInputElement>('#cardTitle');
const dateInput = document.querySelector<HTMLInputElement>('#cardDate');
const noteInput = document.querySelector<HTMLTextAreaElement>('#cardNote');
const sizeInput = document.querySelector<HTMLSelectElement>('#cardSize');
const zoomInput = document.querySelector<HTMLInputElement>('#photoZoom');
const focusXInput = document.querySelector<HTMLInputElement>('#photoFocusX');
const focusYInput = document.querySelector<HTMLInputElement>('#photoFocusY');
const downloadButton = document.querySelector<HTMLButtonElement>('#downloadCard');
const resetButton = document.querySelector<HTMLButtonElement>('#resetCard');
const status = document.querySelector<HTMLElement>('#cardStatus');
const sizeLabel = document.querySelector<HTMLElement>('#previewSizeLabel');
const fileInputs = Array.from(document.querySelectorAll<HTMLInputElement>('[data-photo-input]'));
const styleInputs = Array.from(document.querySelectorAll<HTMLInputElement>('input[name="cardStyle"]'));

if (
  !canvas || !titleInput || !dateInput || !noteInput || !sizeInput || !zoomInput ||
  !focusXInput || !focusYInput || !downloadButton || !resetButton || !status || !sizeLabel
) {
  throw new Error('記念カードの初期化に必要な要素が見つかりません。');
}

const context = canvas.getContext('2d');
if (!context) {
  throw new Error('Canvas 2D を利用できません。');
}

const todayInJapan = (): string => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year ?? ''}-${values.month ?? ''}-${values.day ?? ''}`;
};

const state: CardState = {
  image: null,
  imageObjectUrl: null,
  size: 'postcard',
  style: 'iron',
  title: '福山城公園',
  date: todayInJapan(),
  note: '駅前、五分。四百年の城へ。',
  zoom: 1,
  focusX: 50,
  focusY: 50
};

dateInput.value = state.date;

const setStatus = (message: string): void => {
  status.textContent = message;
};

const formatCardDate = (value: string): string => {
  if (!value) return '';
  const [year, month, day] = value.split('-');
  if (!year || !month || !day) return value;
  return `${year}.${month}.${day}`;
};

const fitText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  startSize: number,
  minSize: number,
  weight = 600,
  family = '"Yu Mincho", "Hiragino Mincho ProN", serif'
): number => {
  let fontSize = startSize;
  while (fontSize > minSize) {
    ctx.font = `${weight} ${fontSize}px ${family}`;
    if (ctx.measureText(text).width <= maxWidth) break;
    fontSize -= 2;
  }
  return fontSize;
};

const wrapText = (
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number
): string[] => {
  if (!text.trim()) return [];
  const characters = Array.from(text.trim());
  const lines: string[] = [];
  let current = '';

  for (const character of characters) {
    const next = current + character;
    if (ctx.measureText(next).width > maxWidth && current) {
      lines.push(current);
      current = character;
      if (lines.length === maxLines - 1) break;
    } else {
      current = next;
    }
  }

  const consumed = lines.join('').length;
  const remainder = characters.slice(consumed).join('');
  if (lines.length < maxLines && remainder) lines.push(remainder);
  if (lines.length === maxLines && lines.join('').length < characters.length) {
    const last = lines[maxLines - 1] ?? '';
    lines[maxLines - 1] = `${last.slice(0, Math.max(0, last.length - 1))}…`;
  }

  return lines;
};

const drawCoverImage = (
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number
): void => {
  const baseScale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const scale = baseScale * state.zoom;
  const drawWidth = image.naturalWidth * scale;
  const drawHeight = image.naturalHeight * scale;
  const overflowX = Math.max(0, drawWidth - width);
  const overflowY = Math.max(0, drawHeight - height);
  const drawX = x - overflowX * (state.focusX / 100);
  const drawY = y - overflowY * (state.focusY / 100);

  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
};

const drawCastleMark = (
  ctx: CanvasRenderingContext2D,
  centerX: number,
  top: number,
  scale: number,
  stroke: string
): void => {
  ctx.save();
  ctx.translate(centerX, top);
  ctx.scale(scale, scale);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(-36, 55); ctx.lineTo(36, 55);
  ctx.moveTo(-29, 54); ctx.lineTo(-29, 31); ctx.lineTo(29, 31); ctx.lineTo(29, 54);
  ctx.moveTo(-23, 31); ctx.lineTo(-23, 13); ctx.lineTo(23, 13); ctx.lineTo(23, 31);
  ctx.moveTo(-16, 13); ctx.lineTo(-16, -2); ctx.lineTo(16, -2); ctx.lineTo(16, 13);
  ctx.moveTo(-24, -2); ctx.lineTo(24, -2); ctx.lineTo(16, -13); ctx.lineTo(-16, -13); ctx.closePath();
  ctx.stroke();
  ctx.restore();
};

const drawIronStyle = (ctx: CanvasRenderingContext2D, width: number, height: number): void => {
  const photoHeight = Math.round(height * 0.75);
  ctx.fillStyle = '#171714';
  ctx.fillRect(0, 0, width, height);

  if (state.image) drawCoverImage(ctx, state.image, 0, 0, width, photoHeight);

  const imageFade = ctx.createLinearGradient(0, photoHeight * 0.5, 0, photoHeight);
  imageFade.addColorStop(0, 'rgba(11,11,9,0)');
  imageFade.addColorStop(1, 'rgba(11,11,9,0.9)');
  ctx.fillStyle = imageFade;
  ctx.fillRect(0, 0, width, photoHeight);

  const margin = Math.round(width * 0.045);
  ctx.strokeStyle = '#ead6a4';
  ctx.lineWidth = Math.max(3, width * 0.004);
  ctx.strokeRect(margin, margin, width - margin * 2, height - margin * 2);

  ctx.strokeStyle = 'rgba(234,214,164,0.42)';
  ctx.lineWidth = Math.max(1, width * 0.0014);
  ctx.strokeRect(margin * 1.45, margin * 1.45, width - margin * 2.9, height - margin * 2.9);

  const titleSize = fitText(ctx, state.title || '福山城公園', width * 0.78, width * 0.074, width * 0.042, 600);
  ctx.fillStyle = '#fffaf0';
  ctx.font = `600 ${titleSize}px "Yu Mincho", "Hiragino Mincho ProN", serif`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(state.title || '福山城公園', margin * 1.6, height * 0.82);

  ctx.fillStyle = '#ead6a4';
  ctx.font = `500 ${Math.max(22, width * 0.027)}px "Hiragino Kaku Gothic ProN", sans-serif`;
  ctx.letterSpacing = `${Math.max(2, width * 0.004)}px`;
  ctx.fillText(formatCardDate(state.date), margin * 1.65, height * 0.875);
  ctx.letterSpacing = '0px';

  ctx.font = `400 ${Math.max(19, width * 0.022)}px "Hiragino Kaku Gothic ProN", sans-serif`;
  ctx.fillStyle = 'rgba(255,250,240,0.72)';
  const noteLines = wrapText(ctx, state.note, width * 0.67, 2);
  noteLines.forEach((line, index) => {
    ctx.fillText(line, margin * 1.65, height * 0.925 + index * width * 0.03);
  });

  drawCastleMark(ctx, width - margin * 2.15, height * 0.84, width / 900, '#ead6a4');
};

const drawSakuraStyle = (ctx: CanvasRenderingContext2D, width: number, height: number): void => {
  ctx.fillStyle = '#f5eee7';
  ctx.fillRect(0, 0, width, height);

  const margin = Math.round(width * 0.055);
  const photoHeight = Math.round(height * 0.68);
  if (state.image) drawCoverImage(ctx, state.image, margin, margin, width - margin * 2, photoHeight);

  const blush = ctx.createLinearGradient(0, margin, width, photoHeight + margin);
  blush.addColorStop(0, 'rgba(255,231,235,0.06)');
  blush.addColorStop(1, 'rgba(181,82,94,0.23)');
  ctx.fillStyle = blush;
  ctx.fillRect(margin, margin, width - margin * 2, photoHeight);

  ctx.strokeStyle = '#a64635';
  ctx.lineWidth = Math.max(2, width * 0.0028);
  ctx.strokeRect(margin * 0.68, margin * 0.68, width - margin * 1.36, height - margin * 1.36);

  ctx.fillStyle = '#a64635';
  ctx.fillRect(margin, photoHeight + margin * 1.32, width * 0.13, Math.max(3, height * 0.003));

  const titleSize = fitText(ctx, state.title || '福山城公園', width * 0.78, width * 0.073, width * 0.042, 600);
  ctx.fillStyle = '#27221e';
  ctx.font = `600 ${titleSize}px "Yu Mincho", "Hiragino Mincho ProN", serif`;
  ctx.textAlign = 'left';
  ctx.fillText(state.title || '福山城公園', margin, height * 0.81);

  ctx.fillStyle = '#a64635';
  ctx.font = `600 ${Math.max(22, width * 0.026)}px "Hiragino Kaku Gothic ProN", sans-serif`;
  ctx.fillText(formatCardDate(state.date), margin, height * 0.865);

  ctx.fillStyle = 'rgba(39,34,30,0.68)';
  ctx.font = `400 ${Math.max(19, width * 0.022)}px "Hiragino Kaku Gothic ProN", sans-serif`;
  const noteLines = wrapText(ctx, state.note, width * 0.72, 2);
  noteLines.forEach((line, index) => {
    ctx.fillText(line, margin, height * 0.92 + index * width * 0.03);
  });

  ctx.save();
  ctx.translate(width - margin * 1.55, height * 0.86);
  ctx.fillStyle = 'rgba(166,70,53,0.16)';
  for (let petal = 0; petal < 5; petal += 1) {
    ctx.rotate((Math.PI * 2) / 5);
    ctx.beginPath();
    ctx.ellipse(0, -width * 0.045, width * 0.022, width * 0.048, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
};

const drawGoldStyle = (ctx: CanvasRenderingContext2D, width: number, height: number): void => {
  ctx.fillStyle = '#12120f';
  ctx.fillRect(0, 0, width, height);

  const margin = Math.round(width * 0.05);
  const photoHeight = Math.round(height * 0.72);
  if (state.image) drawCoverImage(ctx, state.image, margin, margin, width - margin * 2, photoHeight);

  const darkFade = ctx.createLinearGradient(0, photoHeight * 0.35, 0, photoHeight + margin);
  darkFade.addColorStop(0, 'rgba(12,12,10,0)');
  darkFade.addColorStop(1, 'rgba(12,12,10,0.92)');
  ctx.fillStyle = darkFade;
  ctx.fillRect(margin, margin, width - margin * 2, photoHeight);

  const goldGradient = ctx.createLinearGradient(0, 0, width, height);
  goldGradient.addColorStop(0, '#9a7634');
  goldGradient.addColorStop(0.5, '#f2dfaa');
  goldGradient.addColorStop(1, '#a47f3c');
  ctx.strokeStyle = goldGradient;
  ctx.lineWidth = Math.max(5, width * 0.006);
  ctx.strokeRect(margin * 0.58, margin * 0.58, width - margin * 1.16, height - margin * 1.16);

  ctx.fillStyle = goldGradient;
  ctx.fillRect(margin * 1.3, height * 0.775, width - margin * 2.6, Math.max(2, height * 0.0025));

  const titleSize = fitText(ctx, state.title || '福山城公園', width * 0.8, width * 0.075, width * 0.043, 600);
  ctx.fillStyle = '#fff6df';
  ctx.font = `600 ${titleSize}px "Yu Mincho", "Hiragino Mincho ProN", serif`;
  ctx.textAlign = 'center';
  ctx.fillText(state.title || '福山城公園', width / 2, height * 0.855);

  ctx.fillStyle = '#ead6a4';
  ctx.font = `500 ${Math.max(22, width * 0.026)}px "Hiragino Kaku Gothic ProN", sans-serif`;
  ctx.fillText(formatCardDate(state.date), width / 2, height * 0.905);

  ctx.fillStyle = 'rgba(255,246,223,0.68)';
  ctx.font = `400 ${Math.max(18, width * 0.021)}px "Hiragino Kaku Gothic ProN", sans-serif`;
  const noteLines = wrapText(ctx, state.note, width * 0.72, 2);
  noteLines.forEach((line, index) => {
    ctx.fillText(line, width / 2, height * 0.95 + index * width * 0.027);
  });
};

const drawCard = (): void => {
  const selectedSize = sizes[state.size];
  canvas.width = selectedSize.width;
  canvas.height = selectedSize.height;
  context.clearRect(0, 0, selectedSize.width, selectedSize.height);

  if (state.style === 'sakura') {
    drawSakuraStyle(context, selectedSize.width, selectedSize.height);
  } else if (state.style === 'gold') {
    drawGoldStyle(context, selectedSize.width, selectedSize.height);
  } else {
    drawIronStyle(context, selectedSize.width, selectedSize.height);
  }

  sizeLabel.textContent = `${selectedSize.label} · ${selectedSize.width} × ${selectedSize.height}px`;
};

const loadImageSource = async (source: string): Promise<void> => {
  const image = new Image();
  image.decoding = 'async';
  image.src = source;
  await image.decode();
  state.image = image;
  drawCard();
};

const loadPhotoFile = async (file: File): Promise<void> => {
  if (!file.type.startsWith('image/')) {
    setStatus('画像ファイルを選択してください。');
    return;
  }

  if (file.size > 30 * 1024 * 1024) {
    setStatus('画像は30MB以下を推奨します。');
    return;
  }

  if (state.imageObjectUrl) URL.revokeObjectURL(state.imageObjectUrl);
  state.imageObjectUrl = URL.createObjectURL(file);
  setStatus('写真を読み込んでいます…');

  try {
    await loadImageSource(state.imageObjectUrl);
    setStatus('写真を読み込みました。画像はこの端末内だけで処理されます。');
  } catch {
    setStatus('写真を読み込めませんでした。別の画像をお試しください。');
  }
};

for (const input of fileInputs) {
  input.addEventListener('change', () => {
    const file = input.files?.[0];
    if (file) void loadPhotoFile(file);
    input.value = '';
  });
}

titleInput.addEventListener('input', () => {
  state.title = titleInput.value;
  drawCard();
});

dateInput.addEventListener('input', () => {
  state.date = dateInput.value;
  drawCard();
});

noteInput.addEventListener('input', () => {
  state.note = noteInput.value;
  drawCard();
});

sizeInput.addEventListener('change', () => {
  state.size = sizeInput.value as CardSizeKey;
  drawCard();
});

for (const input of styleInputs) {
  input.addEventListener('change', () => {
    if (!input.checked) return;
    state.style = input.value as CardStyleKey;
    drawCard();
  });
}

zoomInput.addEventListener('input', () => {
  state.zoom = Number(zoomInput.value);
  drawCard();
});

focusXInput.addEventListener('input', () => {
  state.focusX = Number(focusXInput.value);
  drawCard();
});

focusYInput.addEventListener('input', () => {
  state.focusY = Number(focusYInput.value);
  drawCard();
});

resetButton.addEventListener('click', async () => {
  titleInput.value = '福山城公園';
  dateInput.value = todayInJapan();
  noteInput.value = '駅前、五分。四百年の城へ。';
  sizeInput.value = 'postcard';
  zoomInput.value = '1';
  focusXInput.value = '50';
  focusYInput.value = '50';
  const ironStyle = styleInputs.find((input) => input.value === 'iron');
  if (ironStyle) ironStyle.checked = true;

  state.title = titleInput.value;
  state.date = dateInput.value;
  state.note = noteInput.value;
  state.size = 'postcard';
  state.style = 'iron';
  state.zoom = 1;
  state.focusX = 50;
  state.focusY = 50;

  if (state.imageObjectUrl) {
    URL.revokeObjectURL(state.imageObjectUrl);
    state.imageObjectUrl = null;
  }

  try {
    await loadImageSource('/images/fukuyama-castle-sunset.jpg');
    setStatus('初期状態に戻しました。');
  } catch {
    drawCard();
  }
});

downloadButton.addEventListener('click', () => {
  setStatus('画像を書き出しています…');
  canvas.toBlob((blob) => {
    if (!blob) {
      setStatus('画像を書き出せませんでした。');
      return;
    }

    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const datePart = state.date || todayInJapan();
    link.href = downloadUrl;
    link.download = `fukuyama-castle-memory-${datePart}.png`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    setStatus('記念カードを端末に保存しました。');
  }, 'image/png');
});

window.addEventListener('beforeunload', () => {
  if (state.imageObjectUrl) URL.revokeObjectURL(state.imageObjectUrl);
});

void document.fonts.ready.then(async () => {
  try {
    await loadImageSource('/images/fukuyama-castle-sunset.jpg');
    setStatus('写真を選ぶと、あなただけの記念カードを作れます。');
  } catch {
    drawCard();
    setStatus('写真を選んで記念カードを作ってください。');
  }
});
