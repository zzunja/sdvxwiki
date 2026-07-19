import nextra from 'nextra'
 
const withNextra = nextra({
})
 
export default withNextra({
  i18n: {
    locales: ['en', 'zh-tw'],
    defaultLocale: 'en',
    localeDetection: true
  },
})
