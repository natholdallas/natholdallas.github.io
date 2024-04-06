import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'NatholDallas',
  description: 'learning more and more',
  srcDir: 'src',
  themeConfig: {
    logo: 'https://vitepress.dev/vitepress-logo-mini.svg',
    editLink: {
      pattern: '',
      text: '在 Github 上编辑此页面'
    },
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      {
        text: 'Arch Linux',
        items: [
          {
            text: '引言',
            link: '/arch/index'
          },
          {
            text: 'Aur与官方包推荐',
            link: '/arch/paru-advice'
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
          }
        ]
      },
      {
        text: 'Kotlin',
        items: []
      },
      {
        text: 'Speedrun',
        items: []
      },
      {
        text: 'Other',
        items: []
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NatholDallas' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UChLXIS188azwTPio8P8_v8w' }
    ],
    search: {
      provider: 'local'
    }
  }
})
