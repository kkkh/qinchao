import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import Translate, { translate } from '@docusaurus/Translate'

export type FeatureItem = {
  title: string
  text: JSX.Element
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '网络工程师 学有所成',
    }),
    text: (
      <Translate>
        作为一名 运维 网络工程师，本着不断 努力 不断 学习
        的原则，努力钻研计算机知识。
      </Translate>
    ),
    Svg: WebDeveloperSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '会点Java & 精通C和HTML',
    }),
    text: (
      <Translate>
        作为一名曾学习与实践网络工程专业熟练掌握网络搭建知识的学生，对于网络工程相关知识有着浓厚的兴趣，同时造就了超凡的学习能力。为不断提高个人综合水平奋斗着。
      </Translate>
    ),
    Svg: SpiderSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '计算机爱好者',
    }),
    text: (
      <Translate>
        作为一名计算机爱好者，积极参与各项活动，为各种竞赛充分准备着，希望有生之年能够学有所成，名扬天下。
      </Translate>
    ),
    Svg: OpenSourceSvg,
  },
]

export default FEATURES
