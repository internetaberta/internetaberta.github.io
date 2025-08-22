import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Internet Aberta",
  description: "Um guia para proteger sua privacidade digital diante do PL N°2628/22.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Guia', link: '/guia' }
    ],

    sidebar: [
      {
        text: 'Guia',
        items: [
          { text: 'O que é o PL N°2628/22?', link: '/guia' },
          { text: 'Projeto de Lei', link: '/projetodelei' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
