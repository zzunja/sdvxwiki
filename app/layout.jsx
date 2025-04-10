import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
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
    logo={<span style={{ fontWeight: 'bold', fontSize: '25px'}}>SDVX wiki</span>}
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