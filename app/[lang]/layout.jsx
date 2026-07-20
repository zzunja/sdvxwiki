import { Footer, Layout, LocaleSwitch, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { LocalizedSearch } from '../../components/Search'
import 'nextra-theme-docs/style.css'
import './globals.css'

const metadataByLocale = {
  en: {
    title: 'Sound Voltex Wiki',
    description: 'A comprehensive wiki for the rhythm game Sound Voltex.',
    keywords: [
      'Sound Voltex',
      'SDVX',
      'SDVX wiki',
      'SDVX guide',
      'Sound Voltex Guide',
      'SDVX gameplay',
      'SDVX mechanics',
      'Sound Voltex Wiki',
      'Nabla',
      'Sound Voltex Nabla',
    ],
    openGraph: { locale: 'en_US' },
  },
  'zh-tw': {
    title: 'Sound Voltex 維基',
    description: '完整整理 Sound Voltex 節奏遊戲資訊的維基與指南。',
    keywords: [
      'Sound Voltex',
      'SDVX',
      'SDVX 維基',
      'SDVX 指南',
      'Sound Voltex 攻略',
      'SDVX 遊戲玩法',
      'SDVX 遊戲機制',
      'Nabla',
      'Sound Voltex Nabla',
    ],
    openGraph: { locale: 'zh_TW' },
  },
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  return {
    ...(metadataByLocale[lang] ?? metadataByLocale.en),
    icons: {
      icon: '/googlesearch/favicon.png',
      apple: '/googlesearch/favicon.png',
    },
  }
}
export const dynamicParams = false

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
          hue: 88,
          saturation: 85,
          lightness: 60
        }}
      >
      </Head>
      <body>
        <Layout
          navbar={navbar}
          search={<LocalizedSearch lang={lang} />}
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
            {locale: 'zh-tw', name: '繁體中文'},
          ]}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
