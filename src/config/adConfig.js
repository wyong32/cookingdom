// 广告配置文件
export const adConfigs = {
  ad1: {
    name: '广告1', //广告名称
    scriptUrl: 'https://a.magsrv.com/ad-provider.js', // 广告脚本URL
    className: 'eas6a97888e2', // 广告CSS类名
    zoneId: '5632176', // 广告区域ID
    hasContainer: true, // 是否有容器（true=自己控制样式，false=广告商控制样式）
    containerClass: 'ad-container', // 容器CSS类名（当hasContainer=true时使用）
    device: 'desktop', // 'all', 'desktop', 'mobile'
    delay: 1000,
  },
  ad2: {
    name: '广告2',
    scriptUrl: 'https://a.magsrv.com/ad-provider.js',
    className: 'eas6a97888e17',
    zoneId: '5632182',
    hasContainer: false, // 广告商控制样式
    device: 'desktop',
    delay: 1000,
  },
  ad3: {
    name: '广告3',
    scriptUrl: 'https://a.magsrv.com/ad-provider.js',
    className: 'eas6a97888e17',
    zoneId: '5632204',
    hasContainer: false,
    device: 'desktop',
    delay: 1000,
  },
  ad4: {
    name: '广告4',
    scriptUrl: 'https://a.magsrv.com/ad-provider.js',
    className: 'eas6a97888e10',
    zoneId: '5632278',
    hasContainer: true,
    containerClass: 'ad-container',
    device: 'mobile',
    delay: 1000,
  },
  ad5: {
    name: '广告5',
    scriptUrl: 'https://a.magsrv.com/ad-provider.js',
    className: 'eas6a97888e14',
    zoneId: '5632280',
    hasContainer: false, // 广告商控制样式
    device: 'mobile',
    delay: 1000,
  },
  ad6: {
    name: '广告6',
    scriptUrl: 'https://a.magsrv.com/ad-provider.js',
    className: 'eas6a97888e20',
    zoneId: '5632312',
    hasContainer: true,
    containerClass: 'ad-container',
    device: 'all',
    delay: 1000,
  },
  ad7: {
    name: '广告7',
    scriptUrl: 'https://a.pemsrv.com/ad-provider.js',
    className: 'eas6a97888e35',
    zoneId: '5632322',
    hasContainer: false, // 广告商控制样式
    device: 'desktop',
    delay: 1000,
  },
  ad8: {
    name: '广告8',
    scriptUrl: 'https://a.pemsrv.com/ad-provider.js',
    className: 'eas6a97888e33',
    zoneId: '5632326',
    hasContainer: false, // 广告商控制样式
    device: 'mobile',
    delay: 1000,
  },
}

// 页面广告配置
export const pageAdConfigs = {
  // 首页广告
  home: {
    top: ['ad1'],
    middle: ['ad6'],
    bottom: ['ad6'],
    floating: ['ad2', 'ad3', 'ad5', 'ad7', 'ad8'],
  },
  // 详情页广告
  detail: {
    top: ['ad1'],
    bottom: ['ad6'],
    floating: ['ad2', 'ad5', 'ad8'],
  },
  // 列表页广告
  list: {
    top: ['ad6'],
    floating: ['ad2', 'ad7'],
  },
}

// 广告配置字段说明
export const adConfigSchema = {
  name: 'string - 广告名称',
  scriptUrl: 'string - 广告脚本URL',
  className: 'string - 广告CSS类名',
  zoneId: 'string - 广告区域ID',
  hasContainer: 'boolean - 是否有容器（true=自己控制样式，false=广告商控制样式）',
  containerClass: 'string - 容器CSS类名（当hasContainer=true时使用）',
  device: 'string - 设备类型（all/desktop/mobile）',
  delay: 'number - 延迟加载时间（毫秒）',
}
