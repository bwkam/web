import Layout from '@/components/Layout'
import MDXComponents from '@/components/MDXComponents'
import '@/styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import { RecoilRoot } from 'recoil'
import { Analytics } from "@vercel/analytics/react";


export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </RecoilRoot>
    </MDXProvider>
  )
}
