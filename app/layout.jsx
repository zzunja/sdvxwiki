import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
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
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
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