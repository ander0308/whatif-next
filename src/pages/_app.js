import { Poppins } from 'next/font/google'
import { globalStyles } from "@/styles/global";

import Header from "@/components/header";
import Footer from "@/components/footer";


globalStyles();

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )

}
