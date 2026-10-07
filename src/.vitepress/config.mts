import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default ({
  base: '/UF3-Estructuras-Condicionales-y-Bucles/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  head: [
  ['link', { rel: 'icon', href: '/img/logo.png' }],
  ],
  locales: {
    root: {
      label: 'Español',
      lang: 'es-ES',
      link: '/',
      title: 'UF3 - Estructuras condicionales y bucles',
      description: 'Unidad 3 donde se introducen las estructuras condicionales y bucles.',
      themeConfig: {
        siteTitle: 'Estructuras condicionales</br> y bucles',
        outline: { label: 'En esta página' },
          docFooter: { prev: 'Anterior', next: 'Siguiente' },
          nav: [
            { text: '🏠 Inicio', link: '/' },
            { text: '📚 Contenidos', items: [
              { text: '1. Introducción', link: '/1-introduccio' },
              { text: '2. Estructuras Condicionales', link: '/2-estructures-condicionals' },
              { text: '3. Operador Ternario', link: '/3-operador_cond-ternari' },
              { text: '4. Bucle while', link: '/4-while' },
              { text: '5. Bucle do-while', link: '/5-do-while' },
              { text: '6. Bucle for', link: '/6-for' },
              { text: "💡Ejemplos", link: '/8-exemples' },
              { text: "✏️Ejercicios", link: '/7-exercicis' }
            ]}
          ]
      }
    }
  },
  // Tema por idioma
  themeConfig: {
    logo: '/img/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GGEdu' }
    ],
    sidebar: {
      '/': [
        { text: '📚 Contenidos', items: [
            { text: '1. Introducción', link: '/1-introduccio' },
              { text: '2. Estructuras Condicionales', link: '/2-estructures-condicionals' },
              { text: '3. Operador Ternario', link: '/3-operador_cond-ternari' },
              { text: '4. Bucle while', link: '/4-while' },
              { text: '5. Bucle do-while', link: '/5-do-while' },
              { text: '6. Bucle for', link: '/6-for' },
              { text: "💡Ejemplos", link: '/8-exemples' },
              { text: "✏️Ejercicios", link: '/7-exercicis' }
            { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' }
          ]
        },
      ]
    },
    footer: {
      message: '<img src="/img/logo-autor.png" alt="Autor Principal" style="height:60px; margin: 0 auto; display:block;" />',
      copyright: 'Copyright © 2025'
    }
  }
})
