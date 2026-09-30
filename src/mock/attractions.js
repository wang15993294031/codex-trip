export const attractions = [
  {
    id: '1',
    name: '故宫',
    coverImage: 'https://picsum.photos/seed/forbidden-city/400/300',
    images: [
      'https://picsum.photos/seed/forbidden-city-1/800/600',
      'https://picsum.photos/seed/forbidden-city-2/800/600',
      'https://picsum.photos/seed/forbidden-city-3/800/600'
    ],
    category: 'cultural',
    description: '世界上现存规模最大、保存最为完整的木质结构古建筑之一',
    rating: 4.9,
    address: '北京市东城区景山前街4号',
    openTime: '08:30-17:00（淡季）08:30-17:30（旺季）',
    ticket: '旺季60元/淡季40元',
    details: `故宫又名紫禁城，是明清两代的皇家宫殿，也是中国古代宫廷建筑的精华。故宫占地72万平方米，建筑面积约15万平方米，有大小宫殿七十多座，房屋九千余间。它以三大殿为中心，占地面积72万平方米，建筑面积约15万平方米，是世界上规模最大、保存最完整的木质结构古建筑群之一。`,
    tips: [
      '建议提前在官网预约门票，避免现场排队',
      '从午门进入，建议提前规划游览路线',
      '建议租赁导览器或使用手机导览APP',
      '避开节假日和周末，人流量会少很多'
    ],
    route: '午门 → 太和殿 → 中和殿 → 保和殿 → 乾清宫 → 交泰殿 → 坤宁宫 → 御花园 → 神武门'
  },
  {
    id: '2',
    name: '八达岭长城',
    coverImage: 'https://picsum.photos/seed/great-wall-1/400/300',
    images: [
      'https://picsum.photos/seed/great-wall-1/800/600',
      'https://picsum.photos/seed/great-wall-2/800/600',
      'https://picsum.photos/seed/great-wall-3/800/600'
    ],
    category: 'cultural',
    description: '明长城最具代表性的段落，天下九塞之一',
    rating: 4.8,
    address: '北京市延庆区军都山关沟古道北口',
    openTime: '06:30-19:00（夏季）07:00-18:00（冬季）',
    ticket: '旺季40元/淡季35元',
    details: `八达岭长城是明长城最具代表性的段落之一，位于北京市延庆区军都山关沟古道北口。八达岭长城史称天下九塞之一，是万里长城的精华。八达岭长城是明长城向游客开放最早的地段，八达岭景区以八达岭长城为主，兴建了八达岭饭店和供国际会议、商务洽淡的四星级以上的八达岭度假村。`,
    tips: [
      '建议乘坐877路公交车或S2线火车前往',
      '穿着舒适的徒步鞋，准备好防晒用品',
      '建议乘坐缆车或索道上山，保存体力',
      '注意安全，不要攀爬未开放区域'
    ],
    route: '关沟区域 → 望京石 → 弹琴峡 → 八达岭关城门 → 好汉坡'
  },
  {
    id: '3',
    name: '颐和园',
    coverImage: 'https://picsum.photos/seed/summer-palace-1/400/300',
    images: [
      'https://picsum.photos/seed/summer-palace-1/800/600',
      'https://picsum.photos/seed/summer-palace-2/800/600',
      'https://picsum.photos/seed/summer-palace-3/800/600'
    ],
    category: 'nature',
    description: '中国现存规模最大、保存最完整的皇家园林',
    rating: 4.7,
    address: '北京市海淀区新建宫门路19号',
    openTime: '06:30-18:00（夏季）07:00-17:00（冬季）',
    ticket: '旺季30元/淡季20元',
    details: `颐和园是清代皇家园林，前身为清漪园，坐落在北京西郊，距城区十五公里，占地约二百九十公顷，与圆明园毗邻。它是以昆明湖、万寿山为基址，以杭州西湖为蓝本，汲取江南园林的设计手法而建成的一座大型山水园林，也是保存最完整的一座皇家行宫御苑，被誉为'皇家园林博物馆'。`,
    tips: [
      '建议从北宫门进入，先游览苏州街',
      '昆明湖边可以乘坐游船游览',
      '长廊建议慢慢走，欣赏彩画故事',
      '傍晚时分在十七孔桥看日落非常美'
    ],
    route: '北宫门 → 苏州街 → 四大部洲 → 佛香阁 → 长廊 → 石舫 → 西堤 → 十七孔桥 → 南湖岛'
  },
  {
    id: '4',
    name: '天坛',
    coverImage: 'https://picsum.photos/seed/temple-of-heaven-1/400/300',
    images: [
      'https://picsum.photos/seed/temple-of-heaven-1/800/600',
      'https://picsum.photos/seed/temple-of-heaven-2/800/600',
      'https://picsum.photos/seed/temple-of-heaven-3/800/600'
    ],
    category: 'cultural',
    description: '明、清两代皇帝祭祀天地、祈谷的地方',
    rating: 4.6,
    address: '北京市东城区天坛路甲1号',
    openTime: '06:00-21:00（旺季）06:30-21:00（淡季）',
    ticket: '旺季15元/淡季10元',
    details: `天坛是明、清两代皇帝祭祀天地、祈谷的地方，位于北京东城区永定门内大街东侧。天坛占地约273万平方米，是圜丘、祈谷两坛的总称，有坛墙两重，形成内外坛，坛墙南方北圆，象征天圆地方。天坛是中华民族5000多年文明的思想、政治和伦理的集中体现。`,
    tips: [
      '建议早上6点前到达，可以观看当地居民晨练',
      '祈年殿是必打卡景点，拍照效果很好',
      '圜丘坛可以体验回音壁效果',
      '公园很大，建议租借导览车或自行车'
    ],
    route: '南门 → 圜丘坛 → 回音壁 → 祈年殿 → 丹陛桥 → 斋宫 → 百花园 → 西门'
  },
  {
    id: '5',
    name: '鸟巢/水立方',
    coverImage: 'https://picsum.photos/seed/nest-cube-1/400/300',
    images: [
      'https://picsum.photos/seed/nest-cube-1/800/600',
      'https://picsum.photos/seed/nest-cube-2/800/600',
      'https://picsum.photos/seed/nest-cube-3/800/600'
    ],
    category: 'modern',
    description: '2008年北京奥运会主场馆，北京地标性建筑',
    rating: 4.5,
    address: '北京市朝阳区国家体育场南路1号',
    openTime: '09:00-19:00（鸟巢）10:00-22:00（水立方）',
    ticket: '鸟巢50元/水立方30元',
    details: `国家体育场（鸟巢）位于北京奥林匹克公园中心区南部，为2008年北京奥运会的主体育场。工程总占地面积21公顷，场内观众坐席约为91000个。举行了奥运会、残奥会开闭幕式、田径比赛及足球比赛决赛。`,
    tips: [
      '建议傍晚前往，可以看到夜景灯光',
      '可以提前在网上购票，避免排队',
      '鸟巢内部有奥运纪念品商店',
      '水立方晚上有灯光秀，值得一看'
    ],
    route: '鸟巢外景 → 鸟巢内部参观 → 奥林匹克公园 → 水立方外景 → 玲珑塔'
  },
  {
    id: '6',
    name: '南锣鼓巷',
    coverImage: 'https://picsum.photos/seed/nanluoguxiang-1/400/300',
    images: [
      'https://picsum.photos/seed/nanluoguxiang-1/800/600',
      'https://picsum.photos/seed/nanluoguxiang-2/800/600',
      'https://picsum.photos/seed/nanluoguxiang-3/800/600'
    ],
    category: 'history',
    description: '北京最古老的街区之一，保留着元代胡同格局',
    rating: 4.4,
    address: '北京市东城区南锣鼓巷',
    openTime: '全天开放',
    ticket: '免费',
    details: `南锣鼓巷是北京最古老的街区之一，是我国唯一完整保存着元代胡同院落肌理、规模最大、品级最高、资源最丰富的棋盘式传统民居区，也是最赋有老北京风情的历史文化旅游街区。南锣鼓巷南北走向，全长约786米，东西各有8条胡同整齐排列着。`,
    tips: [
      '建议下午4点后前往，避免人流高峰',
      '可以尝试各种特色小吃和文创产品',
      '两侧的胡同也值得探索',
      '注意避开节假日，人会非常多'
    ],
    route: '南锣鼓巷主街 → 文宇奶酪店 → 各种特色小店 → 两侧胡同探索'
  },
  {
    id: '7',
    name: '北海公园',
    coverImage: 'https://picsum.photos/seed/beihai-park-1/400/300',
    images: [
      'https://picsum.photos/seed/beihai-park-1/800/600',
      'https://picsum.photos/seed/beihai-park-2/800/600',
      'https://picsum.photos/seed/beihai-park-3/800/600'
    ],
    category: 'nature',
    description: '中国现存最古老的皇家园林之一',
    rating: 4.5,
    address: '北京市西城区文津街1号',
    openTime: '06:00-21:00（夏季）06:30-20:00（冬季）',
    ticket: '旺季10元/淡季5元',
    details: `北海公园位于北京城的中心，是中国现存最古老的皇家园林之一，原为辽金元明清的皇家宫苑。北海全园以北海为中心，面积约71公顷，水面占583市亩，陆地占480市亩。这里原是辽代宫苑，金代中都城东北郊的皇家园林，元代称太液池，属御苑，明清时不断扩建。`,
    tips: [
      '白塔是公园的标志性建筑，必打卡',
      '可以乘坐游船在湖上游览',
      '公园连接着什刹海，可以一起游览',
      '建议傍晚时分前往，看白塔日落很美'
    ],
    route: '南门 → 琼华岛 → 白塔 → 渡船到北岸 → 九龙壁 → 静心斋 → 西天梵境 → 北门'
  },
  {
    id: '8',
    name: '798艺术区',
    coverImage: 'https://picsum.photos/seed/798-art-1/400/300',
    images: [
      'https://picsum.photos/seed/798-art-1/800/600',
      'https://picsum.photos/seed/798-art-2/800/600',
      'https://picsum.photos/seed/798-art-3/800/600'
    ],
    category: 'modern',
    description: '原国营电子工业老厂区改造的艺术社区',
    rating: 4.3,
    address: '北京市朝阳区酒仙桥路4号',
    openTime: '全天开放（大部分画廊10:00-18:00）',
    ticket: '免费（个别展馆除外）',
    details: `798艺术区位于北京朝阳区酒仙桥街道大山子地区，故又称大山子艺术区，原为原国营电子工业老厂区所在地。798艺术区总面积60多万平方米，是目前全世界最大，也最迅速腾飞的艺术展示中心。许多来自法国、美国、意大利、德国、荷兰、台湾等国家和地区的艺术机构及艺术家个人入驻。`,
    tips: [
      '建议预留半天时间慢慢逛',
      '可以参观各种画廊和艺术展览',
      '有很多创意店铺和咖啡馆',
      '艺术区会不定期举办各类艺术活动'
    ],
    route: '尤伦斯当代艺术中心 → 各个画廊参观 → 创意店铺 → 艺术装置 → 咖啡馆休息'
  }
]

export const getAttractions = (params = {}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = [...attractions]
      
      if (params.category && params.category !== 'all') {
        result = result.filter(item => item.category === params.category)
      }
      
      if (params.keyword) {
        const keyword = params.keyword.toLowerCase()
        result = result.filter(item => 
          item.name.toLowerCase().includes(keyword) || 
          item.description.toLowerCase().includes(keyword)
        )
      }
      
      resolve(result)
    }, 300)
  })
}

export const getAttractionById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const attraction = attractions.find(item => item.id === id)
      resolve(attraction)
    }, 300)
  })
}