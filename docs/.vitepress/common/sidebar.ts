import { DefaultTheme } from 'vitepress'

const slash = (path: string) => `/${path}`

export const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Arch Linux',
    items: [
      { text: 'Arch Linux', link: slash('arch') },
      { text: 'Kde Plasma', link: slash('kde') },
      { text: 'Tmux', link: slash('tmux') },
      { text: 'Cachyos', link: slash('cachyos') },
      { text: 'How Disable Ipv6 ?', link: slash('disable-ipv6') },
      { text: 'MangoHud Conf', link: slash('mangohud') },
      { text: 'Recommend Package', link: slash('package-advice') },
      { text: 'CPU Compass', link: slash('cpu-compass') },
      { text: 'Linux Migration', link: slash('linux-migration') },
      { text: 'Locale & Region', link: slash('locale-region') },
      { text: 'Sudo-rs', link: slash('sudo-rs') },
    ],
  },
  {
    text: 'Java',
    items: [{ text: 'Spring Boot Mail', link: slash('spring-boot-starter-mail') }],
  },
  {
    text: 'Kotlin',
    items: [{ text: 'SpringBoot TypeAlias', link: slash('springboot-typealias') }],
  },
  {
    text: 'Go',
    items: [
      { text: 'Fiber Review', link: slash('fiber') },
      { text: 'Natools4go', link: slash('natools4go') },
    ],
  },
  {
    text: 'AI',
    items: [{ text: 'Facefusion', link: slash('facefusion') }],
  },
  {
    text: 'JS',
    items: [{ text: 'Package.json Compass', link: slash('package-json') }],
  },
  {
    text: 'Etc',
    items: [
      { text: "No man's sky note", link: slash('nms') },
      { text: 'VSCode Configuration', link: slash('vscode-noitalic') },
      { text: 'Minecraft Commands', link: slash('mc-common') },
      { text: 'Frontend Performance', link: slash('frontend-performance') },
    ],
  },
]
