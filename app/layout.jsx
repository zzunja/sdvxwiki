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
    <img src='/logo.webp' className='mr-2 mt-1' width="32"/>
    <span style={{ fontWeight: 'bold', fontSize: '25px'}}>SDVX wiki</span>
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
      </Head>
      <body>
        <Layout
          navbar={navbar}
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