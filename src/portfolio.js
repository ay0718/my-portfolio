const header = {
  
  homepage: '',
  title: 'JS.',
}

const about = {
  
  name: 'Ayaka Nishimura',
  role: 'フロントエンジニア',
  description: [
    '得意業務: 実装、運用、特にECサイトの開発や運用に強み',
    '言語スキル: 英語ネイティブレベル',
    '欧州バイヤー: 前職でジュエリー及び、ハイブランのバイヤーをしており、その際にヨーロッパを中心に訪問し英語で取引をしておりました。',
    'オフショアチーム管理: ベトナムのオフショアチームのコントロール経験あり'
  ],
  resume: 'https://docs.google.com/spreadsheets/d/1LpvrWQkY8J2ZyXqI9yfqBHV-g7GY6xUW6JXRupLSzmY/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ayaka-nishimura-57012520a',
    github: 'https://github.com/ay0718',
  },
}


const projects = [
  
  {
    name: 'GoogleADS、Googleアナリティクスを連携したデータアプリ開発（動画配信プラットフォームサービス）',
    description: [
      '- 既存UIの大幅アップデートを実施し、UI更新により操作性向上を目指す（アプリサイドのGoogle Analyticsページ（アクセス状況、アクセス数、流入経路、コンバージョン）、Google広告、Googleリスティング各ページの改修）',
      '-企業ユーザーが利用するUI機能をリリース'
    ],
    stack: ['React','Mantain','Docker'],
    sourceCode: 'https://github.com/ay0718',
  },
  {
    name: 'ライブイベントLP',
    description:
      'LP制作、運用及びテスト業務、本番反映化,実装方法のマニュアル作成,テスト業務のマニュアル作成',
    stack: ['JavaScript','HTML','CSS','Firebase'],
    sourceCode: 'https://github.com/ay0718',
    livePreview: 'https://treasure-fanmeeting-2023.selforder.live/',
  },
  {
    name: '自社複数ECサイト運用、開発,楽天LP運用',
    description:
      ' コーディング、各種テスト、修正,Photoshopを使用し画像修正,FileZillaを使用し本番反映化',
    stack: ['PHP(フロントのみ)', 'Vue（運用）', 'JavaScript','Wordpress','Photoshop','Filezilla'],
    sourceCode: 'https://github.com/ay0718',
    livePreview: 'https://store.lulukushel.jp/',
  },
]

const skills = [
  
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'SASS',
  'Material UI',
  'Mantain',
  'Googleアナリティクス認定資格',
  'Google 広告ディスプレイ広告認定資格',
  'Creative 認定試験',
  'インバウンド認定資格(hubspot)',
]

const contact = {
  
  email: 'a.7180.19xx@gmail.com',
}

export { header, about, projects, skills, contact }
