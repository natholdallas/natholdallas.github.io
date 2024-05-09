import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Arch Linux',
    items: [
      {
        text: '引言',
        link: '/arch/index'
      },
      {
        text: 'Aur与官方包推荐',
        link: '/arch/package-advice'
      },
      {
        text: 'CPU 指南',
        link: '/arch/cpu-compass'
      }
    ]
  },
  {
    text: 'Java',
    items: []
  },
  {
    text: 'SpringBoot',
    items: [
      {
        text: '引言',
        link: '/springboot/index'
      },
      {
        text: 'mail 包指南',
        link: '/springboot/spring-boot-starter-mail'
      }
    ]
  },
  {
    text: 'Kotlin',
    items: [
      {
        text: '引言',
        link: '/kotlin/index'
      },
      {
        text: 'SpringBoot-TypeAlias',
        link: '/kotlin/springboot-typealias'
      }
    ]
  },
  {
    text: 'Speedrun',
    items: []
  },
  {
    text: 'Other',
    items: [
      {
        text: '引言',
        link: '/other/index'
      },
      {
        text: 'Vscode 无斜体配置',
        link: '/other/vscode-noitalic'
      }
    ]
  }
]
