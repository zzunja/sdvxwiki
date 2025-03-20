import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
 
export const metadata = {
  title: 'Sound Voltex Wiki',
  description: 'A comprehensive wiki for the rhythm game Sound Voltex.',
}

//cant pass null to lastUpdated even tho docs say u can so just make it an empty div.
const footer = <Footer/>
const lastUpdated = <div/>

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
          hue: 166,
          saturation: 65
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
          lastUpdated={lastUpdated}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}