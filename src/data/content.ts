import type { Locale } from '../i18n';

export interface LocaleContent {
  nav: { highlights: string; food: string; access: string; nearby: string; faq: string; card: string };
  hero: {
    kicker: string;
    title1: string;
    title2: string;
    titleSmall: string;
    lead: string;
    ctaAccess: string;
    ctaCard: string;
    verticalStrong: string;
    verticalSmall: string;
  };
  quickFacts: {
    accessLabel: string;
    accessValue: string;
    accessNote: string;
    parkLabel: string;
    parkValue: string;
    parkNote: string;
    museumLabel: string;
    museumValue: string;
    museumNote: string;
    seasonLabel: string;
    seasonValue: string;
    seasonNote: string;
  };
  about: { eyebrow: string; title: string; description: string; lead: string; p1: string; p2: string; imgAlt: string; cap1: string; cap2: string };
  highlights: {
    eyebrow: string;
    title: string;
    description: string;
    items: { num: string; h3: string; p: string; mark: string }[];
    timeline: { year: string; h3: string; p: string }[];
  };
  scenery: { eyebrow: string; title: string; description: string; caps: string[]; noteStrong: string; noteP: string };
  food: {
    eyebrow: string;
    title: string;
    description: string;
    items: { type: string; title: string; text: string; where: string }[];
    footerP: string;
    footerBtn: string;
  };
  access: {
    eyebrow: string;
    title: string;
    description: string;
    routes: { h3: string; p: string }[];
    mapLabel: string;
    mapCaption: string;
    walkLabel: string;
    stationLabel: string;
  };
  nearby: {
    eyebrow: string;
    title: string;
    description: string;
    items: { image: string; width: number; height: number; alt: string; time: string; title: string; text: string; tag: string }[];
    dayPlanTitle: string;
    dayPlanSteps: string[];
  };
  memoryCard: {
    eyebrow: string;
    title: string;
    description: string;
    privacyTitle: string;
    privacyText: string;
    step1: string;
    step1a: string;
    step1b: string;
    step1c: string;
    step2: string;
    titleLabel: string;
    dateLabel: string;
    sizeLabel: string;
    noteLabel: string;
    styleLabel: string;
    styleIron: string;
    styleSakura: string;
    styleGold: string;
    step4: string;
    zoomLabel: string;
    fxLabel: string;
    fyLabel: string;
    download: string;
    downloadNote: string;
    reset: string;
    previewLabel: string;
    previewSize: string;
    cardTitle: string;
    cardNote: string;
    sizeOptions: { value: string; label: string }[];
  };
  visitInfo: {
    eyebrow: string;
    title: string;
    description: string;
    cards: { label: string; h3: string; dl: { dt: string; dd: string }[] }[];
    notice: string;
  };
  faq: { q: string; a: string }[];
  footer: {
    ctaTitle: string;
    ctaP: string;
    links: { about: string; food: string; access: string; nearby: string; faq: string; card: string };
    photoSummary: string;
    photoText: string;
    disclaimer: string;
  };
}

const photoCreditText = `“Fukuyama Castle at Sunset” © The Modern Polymath / CC BY-SA 4.0、“Fukuyama Castle wall at night” © Phiteros / CC BY-SA 4.0、“Fukuyama Castle” © The Modern Polymath / CC BY-SA 4.0、“Fukuyama Castle 2025-04” © Editor0206 / CC0 1.0、“Fukuyama Castle seen from Fukuyama station” © John Seb Barber / CC BY 2.0、“Sanzoinari-jinja01s1980” © 663highland / CC BY-SA 3.0 または CC BY 2.5。画像は表示最適化・トリミングを行う場合があります。出典URLと詳細は同梱の PHOTO-CREDITS.md に記載しています。`;

export const content: Record<Locale, LocaleContent> = {
  ja: {
    nav: { highlights: '見どころ', food: '周辺の味', access: '交通', nearby: '周辺スポット', faq: 'よくある質問', card: '記念カードを作る' },
    hero: {
      kicker: 'Fukuyama Castle Park · Hiroshima',
      title1: '駅前、五分。',
      title2: '四百年の城へ。',
      titleSmall: '福山城公園 — 新幹線から見える城',
      lead: '福山駅の北口を出ると、石垣の上に天守が現れます。伏見櫓、筋鉄御門、全国でも珍しい天守北側の鉄板張り。短い乗り継ぎ時間にも、じっくり歩く一日にも似合う城です。',
      ctaAccess: '行き方を見る',
      ctaCard: '写真で記念カードを作る',
      verticalStrong: '備後国 福山',
      verticalSmall: '築城一六二二年'
    },
    quickFacts: {
      accessLabel: 'ACCESS',
      accessValue: '福山駅北口<br />徒歩 約5分',
      accessNote: '新幹線・在来線からすぐ',
      parkLabel: 'PARK',
      parkValue: '6:00–22:00',
      parkNote: '天守前広場・無休／無料',
      museumLabel: 'MUSEUM',
      museumValue: '9:00–17:00',
      museumNote: '最終入館16:30・月曜休館',
      seasonLabel: 'SEASON',
      seasonValue: '桜 約300本',
      seasonNote: '春は城郭一帯が華やぐ'
    },
    about: {
      eyebrow: 'A CASTLE BESIDE THE STATION',
      title: '列車を降りた瞬間、旅は城下町になる。',
      description: '福山城は、江戸時代初期の1622年に水野勝成が築いた城。山陽新幹線のホームから天守を望める近さと、石垣・櫓・門がつくる重厚な景観が、この場所ならではの魅力です。',
      lead: '白い天守を支える石垣。<br />北面を守る、黒い鉄板。',
      p1: '戦災で焼失した天守は1966年に再建され、築城400年を迎えた2022年に外観を改修。天守北側には、かつて砲撃への備えとして施されたとされる鉄板張りが復元されました。',
      p2: '伏見城から移されたと伝わる伏見櫓と筋鉄御門は国の重要文化財。天守の展示を巡ったあとは、門の金具、石垣の勾配、城下を見渡す高低差にも目を向けてみてください。',
      imgAlt: '桜と青空に映える福山城天守',
      cap1: '春の天守',
      cap2: 'APRIL · FUKUYAMA'
    },
    highlights: {
      eyebrow: 'THREE DETAILS',
      title: '福山城で、見るべき三つ。',
      description: '遠景だけで終わらせず、素材と構造に近づくと、福山城の個性がはっきり見えてきます。',
      items: [
        { num: '01', h3: '北側の鉄板張り', p: '白い天守の背面に現れる黒い帯。全国的にも珍しい防御の意匠を、北側へ回って確かめます。', mark: '鉄' },
        { num: '02', h3: '伏見櫓と筋鉄御門', p: '伏見城の遺構と伝わる二つの重要文化財。木部、瓦、門扉の鉄金具に時間の厚みが残ります。', mark: '門' },
        { num: '03', h3: '駅と城の近さ', p: '北口から石垣を見上げ、数分で城内へ。鉄道と城郭が一枚の風景に収まる福山らしい眺めです。', mark: '駅' }
      ],
      timeline: [
        { year: '1622', h3: '福山城、完成', p: '初代福山藩主・水野勝成が築城。西国の守りを担う大規模な近世城郭となりました。' },
        { year: '1945', h3: '天守、戦災で焼失', p: '福山空襲により天守などを焼失。伏見櫓や筋鉄御門は残りました。' },
        { year: '1966', h3: '天守を再建', p: '市制50周年を記念して天守を再建。内部は福山城博物館として歩めるようになります。' },
        { year: '2022', h3: '築城400年', p: '外観改修と展示刷新を実施。天守北側の鉄板張りが現代に復元されました。' }
      ]
    },
    scenery: {
      eyebrow: 'SCENES OF THE CASTLE',
      title: '朝、桜、そして夜。',
      description: '駅前の城だから、時間帯を変えて何度でも立ち寄れます。天守の白、石垣の灰、夜の黒。そのコントラストが写真の表情を変えます。',
      caps: ['石垣と木立の奥に立つ天守', '桜が添える、春の白', '夜、石垣に浮かぶ光'],
      noteStrong: '撮るなら、夕方から夜へ。',
      noteP: '西日が天守を暖かく染める時間から、城壁が照らされる夜まで滞在すると、一度の訪問で異なる表情を残せます。催事やライトアップ内容は日によって変わるため、訪問当日にご確認ください。'
    },
    food: {
      eyebrow: 'TASTE OF FUKUYAMA',
      title: '城歩きのあと、備後を食べる。',
      description: '飲食店が集まるのは主に福山駅南口側。城から駅を抜け、元町・船町方面へ歩くと、郷土料理から麺、瀬戸内の魚まで選択肢が広がります。',
      items: [
        { type: '郷土料理', title: 'うずみ', text: '具をご飯の下に「埋める」福山の郷土料理。やさしいだしと、鯛・海老・野菜などの具を一緒に味わいます。', where: '駅周辺の郷土料理店で' },
        { type: '備後の麺', title: '尾道ラーメン', text: '醤油を軸にした瀬戸内らしい一杯。短い滞在でも立ち寄りやすく、城歩きの前後に選びやすい味です。', where: '福山駅南口側で探す' },
        { type: '瀬戸内の味', title: '鯛と小魚', text: '鞆の浦を抱える福山では、鯛料理や小魚、季節の魚介も旅の主役。昼膳から居酒屋まで幅広く楽しめます。', where: '元町・船町の和食店へ' },
        { type: '備後の粉もの', title: '府中焼き', text: 'ミンチ肉を使い、表面を香ばしく焼き上げる備後エリアのご当地お好み焼き。熱々を鉄板でどうぞ。', where: '駅周辺・市街地で' }
      ],
      footerP: '店舗の営業日・提供メニューは変わります。特に夕食や週末は、当日の営業状況と予約の要否をご確認ください。',
      footerBtn: '駅周辺で探す'
    },
    access: {
      eyebrow: 'DETAILED ACCESS',
      title: '迷わない。北口を出て、城を目指す。',
      description: '福山城公園は、JR福山駅の北側。新幹線改札・在来線改札から北口へ進み、駅前広場を抜ければ石垣が見えます。',
      routes: [
        { h3: '山陽新幹線で', p: '広島・岡山・新大阪方面から<strong>福山駅</strong>へ。改札後は「北口」の案内に沿います。' },
        { h3: '在来線で', p: 'JR山陽本線・福塩線で<strong>福山駅</strong>下車。北口から地上へ出て、正面の城郭方向へ徒歩約5分です。' },
        { h3: '車で', p: '城周辺の<strong>福山城博物館・文学館・美術館などの有料駐車場</strong>を利用。文化ゾーン施設の利用で最初の1時間が無料になる場合があります。' },
        { h3: '歩きやすさ', p: '駅からの距離は短い一方、城内には坂・石段・段差があります。車いすやベビーカー利用時は現地の案内表示をご確認ください。' }
      ],
      mapLabel: 'JR福山駅北口から福山城公園まで徒歩約5分の概略図',
      mapCaption: '概略図です。工事・催事・バリアフリールートにより入口や動線が変わる場合があります。',
      walkLabel: '徒歩',
      stationLabel: 'JR 福山駅 北口'
    },
    nearby: {
      eyebrow: 'AROUND THE CASTLE',
      title: '城から、文化と港町へ。',
      description: '公園周辺は美術館・歴史博物館が集まる文化ゾーン。時間に余裕があれば、ばらのまち福山の市街地や鞆の浦まで足を延ばせます。',
      items: [
        { image: '/images/sanzoinari-shrine.jpg', width: 1280, height: 853, alt: '三蔵稲荷神社の社殿', time: '城内・徒歩すぐ', title: '三蔵稲荷神社', text: '福山城の北側に鎮座。城郭の石垣と神社の朱が重なる、静かな寄り道です。', tag: '城とあわせて参拝' },
        { image: '/images/fukuyama-castle-park.jpg', width: 1280, height: 720, alt: '福山城の石垣と天守', time: '徒歩約3〜5分', title: 'ふくやま美術館', text: '城の西側、文化ゾーンにある美術館。庭越しに城を望む時間も楽しめます。', tag: '雨の日にも組みやすい' },
        { image: '/images/fukuyama-castle-spring.jpg', width: 1280, height: 719, alt: '春の福山城天守', time: '徒歩約5分', title: '広島県立歴史博物館', text: '草戸千軒町遺跡をはじめ、瀬戸内と備後の歴史を深く知れる文化ゾーンの博物館です。', tag: '城下町の背景を知る' },
        { image: '/images/fukuyama-station-approach.jpg', width: 1280, height: 960, alt: '福山駅北口から見た福山城', time: '駅前から路線バス', title: '鞆の浦', text: '港町の路地、常夜燈、海景色へ。福山城と組み合わせると、城下と港の一日旅になります。', tag: '半日〜一日コース' }
      ],
      dayPlanTitle: '一日の組み方',
      dayPlanSteps: ['09:30 福山城', '11:30 文化ゾーン', '13:00 駅南口で昼食', '14:00 鞆の浦へ']
    },
    memoryCard: {
      eyebrow: 'MEMORIAL CARD MAKER',
      title: '今日の一枚を、旅の札に。',
      description: '撮影した写真・自撮り・アルバムの写真を選び、福山城らしい意匠の記念カードを作れます。処理はすべてブラウザ内のCanvasで行います。',
      privacyTitle: '写真はあなたの端末にだけ保存されます',
      privacyText: '写真・入力文字・完成画像はアップロードされず、サーバーを経由しません。',
      step1: '01 · 写真を選ぶ',
      step1a: '写真を撮る',
      step1b: '自撮りする',
      step1c: 'アルバム',
      step2: '02 · 文字とサイズ',
      titleLabel: '場所名／タイトル',
      dateLabel: '日付',
      sizeLabel: 'サイズ',
      noteLabel: 'ひとこと',
      styleLabel: '03 · 意匠を選ぶ',
      styleIron: '鉄黒',
      styleSakura: '桜霞',
      styleGold: '金箔',
      step4: '04 · 写真の位置',
      zoomLabel: '拡大',
      fxLabel: '左右',
      fyLabel: '上下',
      download: 'PNGで端末に保存',
      downloadNote: '完成画像にも個人情報は自動で追加されません。',
      reset: '初期状態に戻す',
      previewLabel: 'プレビュー',
      previewSize: 'はがき縦 · 1000 × 1480px',
      cardTitle: '福山城公園',
      cardNote: '駅前、五分。四百年の城へ。',
      sizeOptions: [
        { value: 'square', label: '1:1（正方形）' },
        { value: 'postcard', label: 'はがき縦（100:148）' },
        { value: 'story', label: '9:16（ストーリー）' }
      ]
    },
    visitInfo: {
      eyebrow: 'BEFORE YOU GO',
      title: '公園と博物館は、時間が異なります。',
      description: '公園の天守前広場と、天守内部の福山城博物館は別の利用案内です。入館を予定する場合は、休館日と最終入館時刻にご注意ください。',
      cards: [
        {
          label: '福山城公園・天守前広場',
          h3: '城外を歩く',
          dl: [
            { dt: '利用時間', dd: '6:00–22:00' },
            { dt: '休み', dd: 'なし' },
            { dt: '料金', dd: '無料' },
            { dt: '目安', dd: '30〜60分' }
          ]
        },
        {
          label: '福山城博物館・天守内部',
          h3: '展示と展望を巡る',
          dl: [
            { dt: '開館', dd: '9:00–17:00' },
            { dt: '最終入館', dd: '16:30' },
            { dt: '休館', dd: '月曜（祝日の場合は翌日）・12月28〜31日ほか' },
            { dt: '一般料金', dd: '500円' }
          ]
        }
      ],
      notice: '掲載情報は確認時点の内容です。臨時休館、展示替え、催事、料金改定があるため、来訪前に公式案内をご確認ください。'
    },
    faq: [
      { q: '福山駅から福山城公園まで徒歩で何分ですか？', a: 'JR福山駅の北口を出て駅前広場を抜けると石垣が見え、城内へは徒歩約5分です。新幹線・在来線の改札からも北口へ進むだけでアクセスできます。' },
      { q: '福山城公園の入場料・入館料はいくらですか？', a: '天守前広場を含む公園の利用は無料です。天守内部の福山城博物館（展示と展望）は一般500円で、最終入館は16:30、月曜休館（祝日の場合は翌日）です。' },
      { q: '福山城公園の駐車場はありますか？', a: '城周辺の福山城博物館・文学館・美術館などの有料駐車場をご利用ください。文化ゾーン施設の利用で最初の1時間が無料になる場合があります。車いすやベビーカー利用時は現地の案内表示をご確認ください。' },
      { q: '福山城公園の開園・営業時間はいつですか？', a: '公園の天守前広場は6:00–22:00（無休・無料）で歩けます。天守内部の福山城博物館は9:00–17:00（最終入館16:30）、12月28〜31日などを除き月曜休館です。' },
      { q: '福山城の桜の見頃はいつですか？', a: '春には城郭一帯に桜が約300本咲き、天守と石垣が華やぎます。例年は4月前后が見頃の目安ですが、気候により前後するため来訪前に公式案内をご確認ください。' },
      { q: '福山城はいつ、誰が築いた城ですか？', a: '1622年（元和8年）、初代福山藩主・水野勝成が築城しました。天守は1945年の福山空襲で焼失し、1966年に市制50周年を記念して再建。2022年の築城400年で外観を改修し、天守北側の鉄板張りが復元されました。' },
      { q: '福山駅周辺でおすすめの観光スポットは？', a: '駅前の福山城公園のほか、ふくやま美術館や広島県立歴史博物館がある文化ゾーン、三蔵稲荷神社などの城下スポットが徒歩圏内です。時間に余裕があればばらのまち福山の市街地や、港町の鞆の浦まで足を延ばせます。' }
    ],
    footer: {
      ctaTitle: '次の列車まで、城へ。',
      ctaP: '〒720-0061 広島県福山市丸之内一丁目8番 · JR福山駅北口から徒歩約5分',
      links: { about: '福山城について', food: '周辺の味', access: '交通', nearby: '周辺スポット', faq: 'よくある質問', card: '記念カード' },
      photoSummary: '写真の出典・ライセンス',
      photoText: photoCreditText,
      disclaimer: '本サイトは福山市、福山城博物館および関係団体が運営する公式サイトではありません。来訪前に必ず公式情報をご確認ください。'
    }
  },

  zh: {
    nav: { highlights: '看點', food: '周邊美食', access: '交通', nearby: '周邊景點', faq: '常見問題', card: '製作紀念卡' },
    hero: {
      kicker: 'Fukuyama Castle Park · Hiroshima',
      title1: '車站前，五分鐘。',
      title2: '四百年古城。',
      titleSmall: '福山城公園 — 從新幹線就看得到的城',
      lead: '走出福山站北口，天守閣便矗立在石垣之上。伏見櫓、筋鐵御門，以及全日本少見的天守北側鐵板包覆。無論是短暫轉車，或是悠閒漫步一整天，這座城都恰到好處。',
      ctaAccess: '查看交通方式',
      ctaCard: '用照片做紀念卡',
      verticalStrong: '備後國 福山',
      verticalSmall: '築城一六二二年'
    },
    quickFacts: {
      accessLabel: 'ACCESS',
      accessValue: 'JR福山站北口<br />步行 約5分',
      accessNote: '新幹線・在來線出站即達',
      parkLabel: 'PARK',
      parkValue: '6:00–22:00',
      parkNote: '天守前廣場・無休／免費',
      museumLabel: 'MUSEUM',
      museumValue: '9:00–17:00',
      museumNote: '最後入館16:30・週一休館',
      seasonLabel: 'SEASON',
      seasonValue: '櫻花 約300株',
      seasonNote: '春天城郭一帶繁花盛開'
    },
    about: {
      eyebrow: 'A CASTLE BESIDE THE STATION',
      title: '一下車，旅程便走進城下町。',
      description: '福山城是水野勝成於江戶時代初期的1622年興建。從山陽新幹線月台就能望見天守的距離，加上石垣、櫓、城門構成的厚重景觀，正是此地獨有的魅力。',
      lead: '撐起白色天守的石垣。<br />守護北面的黑色鐵板。',
      p1: '毀於戰火的天守於1966年重建，並在迎來築城400年的2022年整修外觀。天守北側重現了相傳昔日為防砲擊而加裝的鐵板包覆。',
      p2: '相傳自伏見城遷移而來的伏見櫓與筋鐵御門，皆為國家重要文化財。走完天守內的展示後，也請留意門上的金屬配件、石垣的坡度，以及俯瞰城下的高低落差。',
      imgAlt: '櫻花與藍天映襯下的福山城天守',
      cap1: '春日天守',
      cap2: 'APRIL · FUKUYAMA'
    },
    highlights: {
      eyebrow: 'THREE DETAILS',
      title: '福山城，必看三處。',
      description: '別只看遠景，走近材料與構造，福山城的個性便清晰可見。',
      items: [
        { num: '01', h3: '北側鐵板包覆', p: '白色天守背面那道黑帶。全日本罕見的防禦設計，繞到北側即可確認。', mark: '鐵' },
        { num: '02', h3: '伏見櫓與筋鐵御門', p: '相傳為伏見城遺構的兩處重要文化財。木作、瓦片、門扉鐵件都留有歲月厚度。', mark: '門' },
        { num: '03', h3: '車站與城的距離', p: '從北口仰望石垣，幾分鐘即入城內。鐵道與城郭收進同一幅風景，正是福山風情。', mark: '站' }
      ],
      timeline: [
        { year: '1622', h3: '福山城竣工', p: '初代福山藩主水野勝成興建。成為守備西國的大規模近世城郭。' },
        { year: '1945', h3: '天守毁於戰火', p: '福山空襲使天守等焚毀。伏見櫓與筋鐵御門留存下來。' },
        { year: '1966', h3: '天守重建', p: '為紀念實施市制50週年重建天守。內部成為可參觀的福山城博物館。' },
        { year: '2022', h3: '築城400年', p: '進行外觀整修與展示更新。天守北側的鐵板包覆重現於現代。' }
      ]
    },
    scenery: {
      eyebrow: 'SCENES OF THE CASTLE',
      title: '晨、櫻，與夜。',
      description: '車站前的城，因此可隨著時段多次造訪。天守的白、石垣的灰、夜裡的黑，對比讓照片表情各異。',
      caps: ['石垣與林木深處聳立的天守', '櫻花點綴的春之白', '夜裡浮現於石垣的光'],
      noteStrong: '想拍，就從黃昏到夜晚。',
      noteP: '從夕陽將天守染暖的時刻，待到城壁被點亮的夜裡，一次造訪就能留下不同表情。活動與點燈內容每日不同，請於來訪當天確認。'
    },
    food: {
      eyebrow: 'TASTE OF FUKUYAMA',
      title: '逛完城，吃備後。',
      description: '餐飲店主要集中於福山站南口一側。從城穿過車站往元町、船町方向走，從鄉土料理、麵食到瀨戶內海鮮，選擇愈來愈豐富。',
      items: [
        { type: '鄉土料理', title: 'うずみ（埋飯）', text: '將配料「埋」在米飯下的福山鄉土料理。溫潤的高湯，搭配鯛魚、蝦、蔬菜等配料一同品嚐。', where: '車站周邊的鄉土料理店' },
        { type: '備後麵食', title: '尾道拉麵', text: '以醬油為基底、充滿瀨戶內風味的拉麵。即使短暫停留也方便前往，適合安排在逛城前後。', where: '福山站南口一側尋找' },
        { type: '瀨戶內滋味', title: '鯛魚與小魚', text: '坐擁鞆之浦的福山，鯛魚料理、小魚與季節海鮮也是旅途主角。從午膳到居酒屋都能廣泛享受。', where: '前往元町・船町的和食店' },
        { type: '備後粉物', title: '府中燒', text: '使用絞肉、表面煎得香脆的備後地方特色御好燒。熱騰騰地上鐵板享用。', where: '車站周邊・市區' }
      ],
      footerP: '店家的營業日與供應菜單會變動。尤其晚餐或週末，請確認當天營業狀況與是否需要預約。',
      footerBtn: '在車站周邊尋找'
    },
    access: {
      eyebrow: 'DETAILED ACCESS',
      title: '不迷路。出北口，朝城而去。',
      description: '福山城公園位於JR福山站北側。從新幹線改札、在來線改札前往北口，穿越站前廣場即可看見石垣。',
      routes: [
        { h3: '搭乘山陽新幹線', p: '從廣島、岡山、新大阪方向前往<strong>福山站</strong>。出站後沿「北口」指標前進。' },
        { h3: '搭乘在來線', p: '搭乘JR山陽本線、福鹽線於<strong>福山站</strong>下車。從北口上到地面，朝正前方城郭方向步行約5分。' },
        { h3: '開車', p: '利用城周邊的<strong>福山城博物館、文學館、美術館等付費停車場</strong>。文化園區設施消費，首小時有可能免費。' },
        { h3: '步行友善', p: '距車站雖近，城內仍有坡道、石階與高低差。使用輪椅或嬰兒車時，請參考現場指標。' }
      ],
      mapLabel: 'JR福山站北口至福山城公園步行約5分示意圖',
      mapCaption: '為示意圖。因施工、活動、無障礙路線，出入口與動線可能變更。',
      walkLabel: '步行',
      stationLabel: 'JR 福山站 北口'
    },
    nearby: {
      eyebrow: 'AROUND THE CASTLE',
      title: '從城，走向文化與港町。',
      description: '公園周邊是美術館、歷史博物館聚集的文化園區。若有餘裕，可延伸至「玫瑰之城」福山的市區，或是鞆之浦。',
      items: [
        { image: '/images/sanzoinari-shrine.jpg', width: 1280, height: 853, alt: '三藏稻荷神社的社殿', time: '城內・步行即達', title: '三藏稻荷神社', text: '坐落於福山城北側。城郭石垣與神社朱紅交疊，是一處安靜的順遊點。', tag: '搭配城一同參拜' },
        { image: '/images/fukuyama-castle-park.jpg', width: 1280, height: 720, alt: '福山城的石垣與天守', time: '步行約3〜5分', title: '福山美術館', text: '位於城西側文化園區的美術館。也能享受隔著庭園眺望城郭的時光。', tag: '雨天也易安排' },
        { image: '/images/fukuyama-castle-spring.jpg', width: 1280, height: 719, alt: '春日福山城天守', time: '步行約5分', title: '廣島縣立歷史博物館', text: '可深入認識草戶千軒町遺址，以及瀨戶內與備後歷史的文化園區博物館。', tag: '了解城下町背景' },
        { image: '/images/fukuyama-station-approach.jpg', width: 1280, height: 960, alt: '從福山站北口望見的福山城', time: '從車站前搭巴士', title: '鞆之浦', text: '港町的小巷、常夜燈與海景。與福山城搭配，便是城下與港口的一日遊。', tag: '半日〜一日行程' }
      ],
      dayPlanTitle: '一日安排',
      dayPlanSteps: ['09:30 福山城', '11:30 文化園區', '13:00 站南口午餐', '14:00 前往鞆之浦']
    },
    memoryCard: {
      eyebrow: 'MEMORIAL CARD MAKER',
      title: '今天的這張，做成旅途書籤。',
      description: '選擇拍攝的照片、自拍或相簿照片，即可製作帶有福山城風格的紀念卡。所有處理都在瀏覽器內的 Canvas 完成。',
      privacyTitle: '照片只會保存在您的裝置上',
      privacyText: '照片、輸入文字與完成圖像皆不上傳，也不經過伺服器。',
      step1: '01 · 選擇照片',
      step1a: '拍照',
      step1b: '自拍',
      step1c: '相簿',
      step2: '02 · 文字與尺寸',
      titleLabel: '地點名稱／標題',
      dateLabel: '日期',
      sizeLabel: '尺寸',
      noteLabel: '一句話',
      styleLabel: '03 · 選擇樣式',
      styleIron: '鐵黑',
      styleSakura: '櫻霞',
      styleGold: '金箔',
      step4: '04 · 照片位置',
      zoomLabel: '放大',
      fxLabel: '左右',
      fyLabel: '上下',
      download: '以 PNG 儲存到裝置',
      downloadNote: '完成圖像也不會自動加入個人資訊。',
      reset: '還原為初始狀態',
      previewLabel: '預覽',
      previewSize: '明信片直式 · 1000 × 1480px',
      cardTitle: '福山城公園',
      cardNote: '車站前、五分鐘。四百年古城。',
      sizeOptions: [
        { value: 'square', label: '1:1（正方形）' },
        { value: 'postcard', label: '明信片直式（100:148）' },
        { value: 'story', label: '9:16（限動）' }
      ]
    },
    visitInfo: {
      eyebrow: 'BEFORE YOU GO',
      title: '公園與博物館，時間不同。',
      description: '公園的天守前廣場，與天守內部的福山城博物館是不同利用規範。若計畫入館，請留意休館日與最後入館時間。',
      cards: [
        {
          label: '福山城公園・天守前廣場',
          h3: '漫步城外',
          dl: [
            { dt: '利用時間', dd: '6:00–22:00' },
            { dt: '休館', dd: '無' },
            { dt: '費用', dd: '免費' },
            { dt: '建議', dd: '30〜60分' }
          ]
        },
        {
          label: '福山城博物館・天守內部',
          h3: '走訪展示與眺望',
          dl: [
            { dt: '開館', dd: '9:00–17:00' },
            { dt: '最後入館', dd: '16:30' },
            { dt: '休館', dd: '週一（逢假日則翌日）・12月28〜31日等' },
            { dt: '一般票價', dd: '500日圓' }
          ]
        }
      ],
      notice: '本頁資訊為確認當時內容。可能有臨時休館、換展、活動與票價調整，來訪前請確認官方資訊。'
    },
    faq: [
      { q: '從福山站到福山城公園步行要幾分鐘？', a: '走出JR福山站北口、穿過站前廣場即可看見石垣，步行至城內約5分。從新幹線、在來線改札前往北口即可抵達。' },
      { q: '福山城公園的門票／入館費是多少？', a: '包含天守前廣場在內的公園免費。天守內部的福山城博物館（展示與眺望）一般500日圓，最後入館16:30，週一休館（逢假日則翌日）。' },
      { q: '福山城公園有停車場嗎？', a: '請利用城周邊的福山城博物館、文學館、美術館等付費停車場。文化園區設施消費，首小時有可能免費。使用輪椅或嬰兒車時，請參考現場指標。' },
      { q: '福山城公園的開園／營業時間是？', a: '公園天守前廣場為6:00–22:00（無休・免費）可散步。天守內部福山城博物館為9:00–17:00（最後入館16:30），除12月28〜31日等外，週一休館。' },
      { q: '福山城櫻花的最佳觀賞期是？', a: '春天城郭一帶約有300株櫻花盛開，天守與石垣更顯華麗。往年多以4月前后為基準，會因氣候前後變動，來訪前請確認官方資訊。' },
      { q: '福山城是誰、何時興建的？', a: '1622年（元和8年），初代福山藩主水野勝成興建。天守於1945年福山空襲焚毀，1966年為紀念實施市制50週年重建。2022年築城400年整修外觀，重現天守北側鐵板包覆。' },
      { q: '福山站周邊有哪些推薦景點？', a: '除車站前的福山城公園外，還有福山美術館、廣島縣立歷史博物館所在的文化園區，以及三藏稻荷神社等城下景點都在步行範圍。若有餘裕，可延伸至「玫瑰之城」福山市區或港町鞆之浦。' }
    ],
    footer: {
      ctaTitle: '下一班車之前，前往城。',
      ctaP: '〒720-0061 廣島縣福山市丸之內一丁目8番 · 自JR福山站北口步行約5分',
      links: { about: '關於福山城', food: '周邊美食', access: '交通', nearby: '周邊景點', faq: '常見問題', card: '紀念卡' },
      photoSummary: '照片出處・授權',
      photoText: photoCreditText,
      disclaimer: '本網站並非福山市、福山城博物館及相關團體營運的官方網站。來訪前請務必確認官方資訊。'
    }
  },

  en: {
    nav: { highlights: 'Highlights', food: 'Local Flavors', access: 'Access', nearby: 'Nearby', faq: 'FAQ', card: 'Make a Card' },
    hero: {
      kicker: 'Fukuyama Castle Park · Hiroshima',
      title1: 'Five minutes from the station.',
      title2: 'A 400-year-old castle.',
      titleSmall: 'Fukuyama Castle Park — the castle you see from the Shinkansen',
      lead: 'Step out of the north exit of Fukuyama Station and the keep rises above the stone walls. The Fushimi Yagura, the Kinketsu Gate, and the rare iron-plated north face of the keep. Perfect for a short transfer or a full day of wandering.',
      ctaAccess: 'See how to get here',
      ctaCard: 'Make a card from your photo',
      verticalStrong: 'Bingo Province, Fukuyama',
      verticalSmall: 'Founded 1622'
    },
    quickFacts: {
      accessLabel: 'ACCESS',
      accessValue: 'JR Fukuyama Stn. North<br />5-min walk',
      accessNote: 'Right by the Shinkansen & local lines',
      parkLabel: 'PARK',
      parkValue: '6:00–22:00',
      parkNote: 'Keep plaza · open daily · free',
      museumLabel: 'MUSEUM',
      museumValue: '9:00–17:00',
      museumNote: 'Last entry 16:30 · closed Mon',
      seasonLabel: 'SEASON',
      seasonValue: '≈300 cherry trees',
      seasonNote: 'Spring dresses the castle grounds'
    },
    about: {
      eyebrow: 'A CASTLE BESIDE THE STATION',
      title: 'The moment you leave the train, the town becomes a castle town.',
      description: 'Fukuyama Castle was built in 1622 by Mizuno Katsunari, early in the Edo period. The keep is visible from the Sanyo Shinkansen platform, and the heavy scenery of stone walls, turrets and gates is what makes this place special.',
      lead: 'Stone walls holding up the white keep.<br />Black iron plating guarding the north.',
      p1: 'The keep lost to wartime fire was rebuilt in 1966, and its exterior was renovated for the castle’s 400th anniversary in 2022. On the north face, the iron plating once added as defense against artillery was reproduced.',
      p2: 'The Fushimi Yagura and Kinketsu Gate, said to have been moved from Fushimi Castle, are National Important Cultural Properties. After the keep’s exhibits, look closely at the metal fittings on the gates, the slope of the stone walls, and the height difference over the castle town.',
      imgAlt: 'Fukuyama Castle keep against cherry blossoms and blue sky',
      cap1: 'The keep in spring',
      cap2: 'APRIL · FUKUYAMA'
    },
    highlights: {
      eyebrow: 'THREE DETAILS',
      title: 'Three things to see at Fukuyama Castle.',
      description: 'Don’t stop at the distant view — get close to the materials and structure, and the castle’s character comes into focus.',
      items: [
        { num: '01', h3: 'The iron-plated north face', p: 'A black band on the back of the white keep. A rare defensive detail found across Japan — walk around to the north to see it.', mark: '鉄' },
        { num: '02', h3: 'Fushimi Yagura & Kinketsu Gate', p: 'Two Important Cultural Properties said to be relics of Fushimi Castle. The wood, tiles and iron fittings on the gates carry the weight of time.', mark: '門' },
        { num: '03', h3: 'The station’s closeness to the castle', p: 'Look up at the stone walls from the north exit and you are inside within minutes. Railway and castle in one view — distinctly Fukuyama.', mark: '駅' }
      ],
      timeline: [
        { year: '1622', h3: 'Fukuyama Castle completed', p: 'Built by Mizuno Katsunari, the first lord of Fukuyama. It became a large early-modern castle guarding the west of the country.' },
        { year: '1945', h3: 'The keep lost to war', p: 'The keep was destroyed in the Fukuyama air raid. The Fushimi Yagura and Kinketsu Gate survived.' },
        { year: '1966', h3: 'The keep rebuilt', p: 'Rebuilt to mark the 50th anniversary of the city. Inside it became the walkable Fukuyama Castle Museum.' },
        { year: '2022', h3: '400th anniversary', p: 'Exterior renovation and exhibit renewal. The iron plating on the keep’s north face was reproduced for today.' }
      ]
    },
    scenery: {
      eyebrow: 'SCENES OF THE CASTLE',
      title: 'Morning, cherry blossoms, and night.',
      description: 'A castle by the station means you can return at different hours. The white of the keep, the grey of the stone, the black of night — the contrast changes the photo’s mood.',
      caps: ['The keep standing beyond stone walls and trees', 'Spring white, touched by cherry blossoms', 'Light rising on the stone walls at night'],
      noteStrong: 'For photos, go from dusk into night.',
      noteP: 'Stay from the time the setting sun warms the keep to the night when the walls are lit, and one visit leaves you with different moods. Event and lighting details change daily, so please check on the day of your visit.'
    },
    food: {
      eyebrow: 'TASTE OF FUKUYAMA',
      title: 'After the castle, eat Bingo.',
      description: 'Restaurants cluster mainly on the south side of Fukuyama Station. From the castle through the station toward Motomachi and Funamachi, choices widen from local dishes to noodles to Seto Inland Sea fish.',
      items: [
        { type: 'Local dish', title: 'Uzumi', text: 'A Fukuyama local dish that “buries” toppings under the rice. Enjoy the gentle broth with tai, shrimp and vegetables together.', where: 'At local-dish restaurants near the station' },
        { type: 'Bingo noodles', title: 'Onomichi Ramen', text: 'A soy-based bowl typical of the Seto Inland Sea. Easy to drop in even on a short visit, before or after walking the castle.', where: 'Look on the south side of Fukuyama Station' },
        { type: 'Seto Inland Sea', title: 'Tai and small fish', text: 'With Tomonoura at its door, Fukuyama makes tai dishes and small fish seasonal stars of the trip, from lunch sets to izakaya.', where: 'Head to Japanese restaurants in Motomachi and Funamachi' },
        { type: 'Bingo griddle food', title: 'Fuchu-yaki', text: 'A Bingo-area okonomiyaki using minced meat, seared crisp on the surface. Serve it hot off the griddle.', where: 'Around the station and city center' }
      ],
      footerP: 'Restaurants’ open days and menus change. Especially for dinner or weekends, check the day’s hours and whether reservation is needed.',
      footerBtn: 'Search near the station'
    },
    access: {
      eyebrow: 'DETAILED ACCESS',
      title: 'No wrong turns. Out the north exit, head for the castle.',
      description: 'Fukuyama Castle Park sits north of JR Fukuyama Station. From the Shinkansen or local gate, go to the north exit; past the station plaza you’ll see the stone walls.',
      routes: [
        { h3: 'By Sanyo Shinkansen', p: 'From Hiroshima, Okayama or Shin-Osaka to <strong>Fukuyama Station</strong>. After the gate, follow signs for the “North Exit.”' },
        { h3: 'By local line', p: 'On the JR Sanyo Main Line or Fukuen Line, get off at <strong>Fukuyama Station</strong>. Up to ground from the north exit, then about a 5-minute walk toward the castle ahead.' },
        { h3: 'By car', p: 'Use the <strong>paid parking at the Fukuyama Castle Museum, Literature Museum, Art Museum</strong> and nearby. The first hour may be free with use of the cultural-zone facilities.' },
        { h3: 'Walkability', p: 'The station is close, but the grounds have slopes, stone steps and level changes. If using a wheelchair or stroller, please check the on-site guidance.' }
      ],
      mapLabel: 'Sketch: about a 5-minute walk from JR Fukuyama Station North Exit to Fukuyama Castle Park',
      mapCaption: 'This is a sketch. Entrances and routes may change due to construction, events or accessibility paths.',
      walkLabel: 'Walk',
      stationLabel: 'JR Fukuyama Station North Exit'
    },
    nearby: {
      eyebrow: 'AROUND THE CASTLE',
      title: 'From the castle, to culture and a port town.',
      description: 'Around the park is a cultural zone of art and history museums. With time to spare, extend to the “Rose Town” Fukuyama city center or to Tomonoura on the coast.',
      items: [
        { image: '/images/sanzoinari-shrine.jpg', width: 1280, height: 853, alt: 'The hall of Sanzoinari Shrine', time: 'In the park · a short walk', title: 'Sanzoinari Shrine', text: 'Stands north of Fukuyama Castle. The stone walls and the shrine’s vermilion overlap in a quiet side trip.', tag: 'Worship with the castle' },
        { image: '/images/fukuyama-castle-park.jpg', width: 1280, height: 720, alt: 'Stone walls and keep of Fukuyama Castle', time: 'About 3–5 min walk', title: 'Fukuyama Art Museum', text: 'An art museum on the cultural zone west of the castle. Enjoy time looking across the garden to the castle.', tag: 'Easy even on a rainy day' },
        { image: '/images/fukuyama-castle-spring.jpg', width: 1280, height: 719, alt: 'Fukuyama Castle keep in spring', time: 'About 5 min walk', title: 'Hiroshima Prefectural Museum of History', text: 'A cultural-zone museum where you can learn the history of the Seto Inland Sea and Bingo, including the Kusado Sengen town ruins.', tag: 'Learn the castle-town backdrop' },
        { image: '/images/fukuyama-station-approach.jpg', width: 1280, height: 960, alt: 'Fukuyama Castle seen from the north exit of Fukuyama Station', time: 'Local bus from the station front', title: 'Tomonoura', text: 'Lanes of a port town, a perpetual lighthouse, and sea views. Paired with Fukuyama Castle, it becomes a castle-and-port day trip.', tag: 'Half-day to full-day' }
      ],
      dayPlanTitle: 'How to spend a day',
      dayPlanSteps: ['09:30 Fukuyama Castle', '11:30 Cultural zone', '13:00 Lunch, south exit', '14:00 Head to Tomonoura']
    },
    memoryCard: {
      eyebrow: 'MEMORIAL CARD MAKER',
      title: 'Turn today’s shot into a travel card.',
      description: 'Pick a photo you took, a selfie, or an album photo, and make a memorial card in Fukuyama Castle style. All processing happens in your browser’s Canvas.',
      privacyTitle: 'Photos stay only on your device',
      privacyText: 'Photos, typed text and finished images are not uploaded and never pass through a server.',
      step1: '01 · Choose a photo',
      step1a: 'Take a photo',
      step1b: 'Selfie',
      step1c: 'Album',
      step2: '02 · Text & size',
      titleLabel: 'Place / Title',
      dateLabel: 'Date',
      sizeLabel: 'Size',
      noteLabel: 'A note',
      styleLabel: '03 · Choose a style',
      styleIron: 'Iron Black',
      styleSakura: 'Sakura Haze',
      styleGold: 'Gold Leaf',
      step4: '04 · Photo position',
      zoomLabel: 'Zoom',
      fxLabel: 'Horizontal',
      fyLabel: 'Vertical',
      download: 'Save as PNG to device',
      downloadNote: 'No personal information is added automatically to the finished image.',
      reset: 'Reset to default',
      previewLabel: 'Preview',
      previewSize: 'Postcard · 1000 × 1480px',
      cardTitle: 'Fukuyama Castle Park',
      cardNote: 'Five minutes from the station. A 400-year-old castle.',
      sizeOptions: [
        { value: 'square', label: '1:1 (Square)' },
        { value: 'postcard', label: 'Postcard (100:148)' },
        { value: 'story', label: '9:16 (Story)' }
      ]
    },
    visitInfo: {
      eyebrow: 'BEFORE YOU GO',
      title: 'The park and the museum keep different hours.',
      description: 'The keep plaza of the park and the Fukuyama Castle Museum inside the keep follow separate guidance. If you plan to enter, note the closed days and last entry.',
      cards: [
        {
          label: 'Fukuyama Castle Park · keep plaza',
          h3: 'Walk outside the castle',
          dl: [
            { dt: 'Hours', dd: '6:00–22:00' },
            { dt: 'Closed', dd: 'None' },
            { dt: 'Fee', dd: 'Free' },
            { dt: 'Plan', dd: '30–60 min' }
          ]
        },
        {
          label: 'Fukuyama Castle Museum · keep interior',
          h3: 'Exhibits & view',
          dl: [
            { dt: 'Open', dd: '9:00–17:00' },
            { dt: 'Last entry', dd: '16:30' },
            { dt: 'Closed', dd: 'Mon (or next day if holiday) · Dec 28–31 etc.' },
            { dt: 'General', dd: '¥500' }
          ]
        }
      ],
      notice: 'Information here is as of confirmation. Temporary closures, exhibit changes, events and fee revisions may occur, so please check official guidance before visiting.'
    },
    faq: [
      { q: 'How many minutes is the walk from Fukuyama Station to Fukuyama Castle Park?', a: 'Out the north exit of JR Fukuyama Station and past the plaza, the stone walls appear; it’s about a 5-minute walk into the park. From either the Shinkansen or local gate, just head to the north exit.' },
      { q: 'What is the admission fee for Fukuyama Castle Park?', a: 'The park including the keep plaza is free. The Fukuyama Castle Museum inside the keep (exhibits and view) is ¥500 general, last entry 16:30, closed Mondays (or the next day if a holiday).' },
      { q: 'Is there parking at Fukuyama Castle Park?', a: 'Use the paid parking at the Fukuyama Castle Museum, Literature Museum, Art Museum and nearby. The first hour may be free with use of the cultural-zone facilities. If using a wheelchair or stroller, please check the on-site guidance.' },
      { q: 'What are the opening hours of Fukuyama Castle Park?', a: 'The keep plaza is open 6:00–22:00 (daily, free). The Fukuyama Castle Museum inside the keep is 9:00–17:00 (last entry 16:30), closed Mondays except Dec 28–31 and similar.' },
      { q: 'When is the best time for cherry blossoms at Fukuyama Castle?', a: 'In spring about 300 cherry trees bloom across the castle grounds, dressing the keep and stone walls in color. Around April is the usual guide, but it shifts with the weather, so please check official guidance before visiting.' },
      { q: 'When and by whom was Fukuyama Castle built?', a: 'It was built in 1622 (Genna 8) by Mizuno Katsunari, the first lord of Fukuyama. The keep was destroyed in the 1945 Fukuyama air raid and rebuilt in 1966 for the city’s 50th anniversary. For the 400th anniversary in 2022 the exterior was renovated and the north-face iron plating reproduced.' },
      { q: 'What spots near Fukuyama Station do you recommend?', a: 'Besides Fukuyama Castle Park by the station, the cultural zone with the Fukuyama Art Museum and Hiroshima Prefectural Museum of History, and castle-town spots like Sanzoinari Shrine are within walking distance. With time, extend to the “Rose Town” Fukuyama center or the port of Tomonoura.' }
    ],
    footer: {
      ctaTitle: 'To the castle, before the next train.',
      ctaP: '〒720-0061 8 Marunouchi, Fukuyama City, Hiroshima · about a 5-minute walk from JR Fukuyama Station North Exit',
      links: { about: 'About the castle', food: 'Local flavors', access: 'Access', nearby: 'Nearby', faq: 'FAQ', card: 'Card' },
      photoSummary: 'Photo credits & licenses',
      photoText: photoCreditText,
      disclaimer: 'This site is not an official site operated by the City of Fukuyama, the Fukuyama Castle Museum or related organizations. Please always check official information before visiting.'
    }
  }
};
