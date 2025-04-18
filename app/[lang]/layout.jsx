import { Footer, Layout, LocaleSwitch, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
 
export const metadata = {
  title: 'Sound Voltex Wiki',
  description: 'A comprehensive wiki for the rhythm game Sound Voltex.',
  icons:{
    icon: '/googlesearch/favicon.png',
    apple: '/googlesearch/favicon.png'
  } ,
  //mostly auto generated
  keywords: [
    'Sound Voltex',
    'SDVX',
    'SDVX wiki',
    'SDVX guide',
    'Sound Voltex Guide',
    'SDVX gameplay',
    'SDVX mechanics',
  ],
}

const footer = <Footer/>

const navbar = (
  <Navbar
    logo={
    <>
    <div className="flex items-center">
      <img src="/googlesearch/logo.webp" className="mr-2 relative top-1 w-32px h-32px"/>
      <span style={{ fontWeight: 'bold', fontSize: '25px' }}>sdvx.org</span>
    </div>
    </>
    }
  />
)
 
export default async function RootLayout({ children, params }) {
  const {lang} = await params
  let pageMap = await getPageMap(`/${lang}`)


  return (
    <html
      lang={lang}
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
        color={{
          hue: 210,
          saturation: 55
        }}
      >
      </Head>
      <body>
        <Layout
          navbar={navbar}
          sidebar={{ 
            defaultMenuCollapseLevel: 1 
          }}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/zzunja/sdvxwiki"
          footer={footer}
          feedback={{
            content: null
          }}
          editLink={null}
          i18n={[
            {locale: 'en', name: 'English'},
          ]}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}