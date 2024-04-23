export type Social = {
  github?: string
  twitter?: string
  juejin?: string
  qq?: string
  wx?: string
  cloudmusic?: string
  zhihu?: string
  email?: string
  discord?: string
}

type SocialValue = {
  href?: string
  title: string
  icon: string
  color: string
}

const social: Social = {
  github: 'https://github.com/kkkh',
  twitter: 'https://43322.cn/',
  juejin: 'https://juejin.cn/user/946044495221566',
  qq: 'https://o.43322.cn/%E5%AD%A6%E6%9C%89%E6%89%80%E6%88%90/2023%E5%B9%B411%E6%9C%8818%E6%97%A5/QQ.JPG',
  wx: 'https://o.43322.cn/%E5%AD%A6%E6%9C%89%E6%89%80%E6%88%90/2023%E5%B9%B411%E6%9C%8818%E6%97%A5/Wechat.JPG',
  // zhihu: 'https://www.zhihu.com/people/o004',
  // cloudmusic: 'https://music.163.com/#/user/home?id=535661838',
  email: 'mailto:qinchao@43322.cn',
  discord: 'https://43322.cn/',
}

const socialSet: Record<keyof Social | 'rss', SocialValue> = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  juejin: {
    href: social.juejin,
    title: '掘金',
    icon: 'simple-icons:juejin',
    color: '#1E81FF',
  },
  twitter: {
    href: social.twitter,
    title: 'qinchao',
    icon: 'ri:twitter-line',
    color: '#1da1f2',
  },
  discord: {
    href: social.discord,
    title: 'qin',
    icon: 'ri:discord-line',
    color: '#5A65F6',
  },
  qq: {
    href: social.qq,
    title: 'QQ',
    icon: 'ri:qq-line',
    color: '#1296db',
  },
  wx: {
    href: social.wx,
    title: '微信',
    icon: 'ri:wechat-2-line',
    color: '#07c160',
  },
  zhihu: {
    href: social.zhihu,
    title: '知乎',
    icon: 'ri:zhihu-line',
    color: '#1772F6',
  },
  email: {
    href: social.email,
    title: '邮箱',
    icon: 'ri:mail-line',
    color: '#D44638',
  },
  cloudmusic: {
    href: social.cloudmusic,
    title: '网易云',
    icon: 'ri:netease-cloud-music-line',
    color: '#C20C0C',
  },
  rss: {
    href: '/blog/rss.xml',
    title: 'RSS',
    icon: 'ri:rss-line',
    color: '#FFA501',
  },
}

export default socialSet
