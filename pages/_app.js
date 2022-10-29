import '../styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col gap-y-20'>
    <Navbar />
      <Component {...pageProps} />
    <Footer />
    </div>
  )
}

export default MyApp
