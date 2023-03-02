import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin']
})

function PageNotFound() {
  return (
    <h1 className={poppins.className}>Página não encontrada</h1>
  )
}

export default PageNotFound
