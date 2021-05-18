import Layout from '../layout/layout'
import GeneralProvider from '../provider/GeneralProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <GeneralProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </GeneralProvider>
  )
}

export default MyApp
