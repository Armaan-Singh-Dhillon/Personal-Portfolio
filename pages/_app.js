import Navbar from '@/components/navbar'
import Context from '../Context/Context.js'
import '@/styles/globals.css'



export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout

  return <>

    <Context>

      <Navbar></Navbar>
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </Context>

  </>
}


const EmptyLayout = ({ children }) => <>{children}</>
