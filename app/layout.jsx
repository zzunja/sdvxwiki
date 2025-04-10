import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
 
export const metadata = {
  title: 'Sound Voltex Wiki',
  description: 'A comprehensive wiki for the rhythm game Sound Voltex.',
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
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
        color={{
          hue: 210,
          saturation: 55
        }}
      >
        <link rel="icon" type="image/png" href="/googlesearch/favicon.png"></link>
      </Head>
      <body>
        <Layout
          navbar={navbar}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/zzunja/sdvxwiki"
          footer={footer}
          feedback={{content: null}}
          editLink={null}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}