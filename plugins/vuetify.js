import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// 导入样式
import 'vuetify/styles'

export default defineNuxtPlugin(() => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#6200ea',
            secondary: '#03dac6',
          },
        },
        dark: {
          colors: {
            primary: '#bb86fc',
            secondary: '#03dac6',
          },
        },
      },
    },
  })

  return {
    provide: {
      vuetify,
    },
  }
})
