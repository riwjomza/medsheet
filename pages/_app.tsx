import '../styles/globals.css'
import '../styles/dropdown.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts'
import {AuthProvider} from '../context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AuthProvider>
  )
}
