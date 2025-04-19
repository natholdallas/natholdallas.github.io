import { DefaultTheme } from 'vitepress'

const slash = (path: string) => `/${path}`

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Arch Linux',
    items: [
      { text: 'Cachyos', link: slash('cachyos') },
      { text: 'How Disable Ipv6 ?', link: slash('disable-ipv6') },
      { text: 'MangoHud Conf', link: slash('mangohud') },
      { text: 'Recommend Package', link: slash('package-advice') },
      { text: 'CPU Compass', link: slash('cpu-compass') },
      { text: 'Linux Migration', link: slash('linux-migration') },
      { text: 'Locale & Region', link: slash('locale-region') },
    ],
  },
  {
    text: 'Java',
    items: [{ text: 'spring-boot-starter-mail', link: slash('spring-boot-starter-mail') }],
  },
  {
    text: 'Kotlin',
    items: [{ text: 'SpringBoot TypeAlias', link: slash('springboot-typealias') }],
  },
  {
    text: 'Go',
    items: [{ text: 'Fiber Review', link: slash('fiber-api') }],
  },
  {
    text: 'Other',
    items: [
      { text: 'Vscode Conf', link: slash('vscode-noitalic') },
      { text: 'Minecraft Commands', link: slash('mc-common') },
      { text: 'Frontend performance', link: slash('frontend-performance') },
    ],
  },
]
