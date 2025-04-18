export {middleware} from 'nextra/locales'

export const config = {
  //this is for exlcuding what gets redirected with language. if you have anything to add, add it here. ".*\\..*" is for the whole public folder
  matcher: [
    '/((?!api|public/|_next|_pagefind|favicon.ico|sitemap.xml|.*\\..*).*)',
  ]
}
