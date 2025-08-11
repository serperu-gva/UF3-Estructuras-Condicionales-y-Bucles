import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default ({
  base: '/UF4/',
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
      title: 'UF4 - Estructuras repetitivas',
      description: 'Unidad 4 donde se introducen las estructuras repetitivas.',
      themeConfig: {
        siteTitle: 'Estructuras </br>repetitivas',
        outline: { label: 'En esta página' },
          docFooter: { prev: 'Anterior', next: 'Siguiente' },
          nav: [
            { text: '🏠 Inicio', link: '/' },
            { text: '📚 Contenidos', items: [
              { text: '1. Introducción', link: '/1-introduccio' },
              { text: '2. Bucle for', link: '/2-for' },
              { text: '3. Bucle while', link: '/3-while' },
              { text: '4. Bucle do-while', link: '/4-do-while' },
              { text: "💡Ejemplos", link: '/5-exemples' },
              { text: "✏️Ejercicios", link: '/6-exercicis' },
            ]}
          ]
      }
    },
    ca: {
      label: 'Valencià',
      lang: 'ca-ES',
      link: '/ca/',
      title: 'U4 - Estrucutures </br>repetitives',
      description: 'Unitat 4 on s\'introduïxen les estructures repetitives.',
      themeConfig: {
        siteTitle: 'Estrucutures repetitives',
        outline: { label: 'En aquesta pàgina' },
          docFooter: { prev: 'Anterior', next: 'Següent' },
          nav: [
            { text: '🏠 Inici', link: '/ca/index' },
            { text: '📚 Continguts', items: [
              { text: '1. Introducció', link: '/ca/1-introduccio' },
              { text: '2. Bucle for', link: '/ca/2-for' },
              { text: '3. Bucle while', link: '/ca/3-while' },
              { text: '4. Bucle do-while', link: '/ca/4-do-while' },
              { text: "💡Exemples", link: '/ca/5-exemples' },
              { text: "✏️Exercicis", link: '/ca/6-exercicis' },
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
            { text: '2. Bucle for', link: '/2-for' },
            { text: '3. Bucle while', link: '/3-while' },
            { text: '4. Bucle do-while', link: '/4-do-while' },
            { text: "💡Ejemplos", link: '/5-exemples' },
            { text: "✏️Ejercicios", link: '/6-exercicis' },
          ]
        },
        { text: '📚 Contenidos adicionales', items: [
          { text: 'Metodo Math.random()', link: '/7-add_random' },
          { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
          { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
        ]}
      ],
      '/ca/': [
        { text: '📚 Continguts', items: [
            { text: '1. Introducció', link: '/ca/1-introduccio' },
            { text: '2. Bucle for', link: '/ca/2-for' },
            { text: '3. Bucle while', link: '/ca/3-while' },
            { text: '4. Bucle do-while', link: '/ca/4-do-while' },
            { text: "💡Exemples", link: '/ca/5-exemples' },
            { text: "✏️Exercicis", link: '/ca/6-exercicis' },
          ]
        },
        { text: '📚 Continguts addicionals', items: [
          { text: 'Mètode Math.random()', link: '/ca/7-add_random' },
          { text: '<img src="../img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
          { text: '<img src="../img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
        ]}
      ]
    },
    footer: {
      message: '<img src="/img/logo-autor.png" alt="Autor Principal" style="height:60px; margin: 0 auto; display:block;" />',
      copyright: 'Copyright © 2025'
    }
  }
})
