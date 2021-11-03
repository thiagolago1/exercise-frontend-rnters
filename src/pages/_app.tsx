import { AppProps } from 'next/app'
import '../styles/global.scss';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import '../utils/i18n';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <SearchBar />
      <Component {...pageProps} />
    </>
  )
  
}

export default MyApp
