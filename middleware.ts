import { NextResponse } from 'next/server'
import { NotFoundPage } from 'nextra-theme-docs';
import {middleware as middlewareNextra} from 'nextra/locales'


export function middleware(request){
  const url = request.nextUrl.pathname

  if(url.includes('/wp-admin') || url.includes('/wordpress')){
    //prevent the auto robots that just go to /wp-admin and /wordpress on repeat
    return new NextResponse('Not Found', { status: 404 });
  } 

  return middlewareNextra(request)
}
export const config = {
  //this is for exlcuding what gets redirected with language. if you have anything to add, add it here. ".*\\..*" is for the whole public folder
  matcher: [
    '/((?!api|public/|_next|_pagefind|favicon.ico|sitemap.xml|.*\\..*).*)', '/wp-admin/:path*','/wordpress/:path*'
  ]
}
