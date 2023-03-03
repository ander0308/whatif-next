import Head from 'next/head'
// import { getCssText } from '@/styles'

import SectionHero from '@/components/home/sectionHero'
import ListCharacters from '@/components/home/ListCharacters'

export default function Home() {
  return (
    <>
      <Head>
        <title>Whatif - Page</title>
        <meta name="description" content="Um projeto desenvolvindo no curso codeboost" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} /> */}
      </Head>
      <SectionHero />
      <ListCharacters />
      </>
  )
}
