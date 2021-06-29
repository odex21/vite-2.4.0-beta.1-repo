import { createI18n } from 'vue-i18n'

const messages = {}

export const i18n = createI18n({
  locale: 'zh-cn', // set locale
  fallbackLocale: 'zh-cn', // set fallback locale
  messages,
  datetimeFormats: {
    'zh-cn': {
      // 2020年11月11日
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      // 2020年11月11日 18:44
      m: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      },
      // chrome 的简中locale 没得用 slash了
      // 2021年4月1号 11:00
      slash: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      },
      // 2021/4/6
      slashShort: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      },
      // 2020年11月11日周三 下午6:44
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
      },
      // 18:00
      time: {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      },
    },
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
  },
})
