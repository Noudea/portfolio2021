import Layout from '../layout/Layout'
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
