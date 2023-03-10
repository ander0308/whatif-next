import Head from 'next/head'
// import { getCssText } from '@/styles'

import SectionHero from '@/components/home/sectionHero'
import ListCharacters from '@/components/home/ListCharacters'
import { getPrismicClient } from '@/service/prismic'

export default function Home({ dataPage, characters }) {
  return (
    <>
      <Head>
        <title>Whatif - Page</title>
        <meta name="description" content="Um projeto desenvolvindo no curso codeboost" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} /> */}
      </Head>
      <SectionHero data={dataPage} />
      <ListCharacters data={characters} />
    </>
  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient()

  const contentPages = await prismic.getSingle("home")
  const characters = await prismic.getAllByType("character")

  return {
    props: {
      dataPage: contentPages.data,
      characters
    },
    revalidate: 60
  }
}
