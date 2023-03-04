import { useRouter } from "next/router"

import { getPrismicClient } from "@/service/prismic"

import SectionHeroCharacter from "@/components/details/sectionHeroCharacter"
import ListCharacters from "@/components/home/ListCharacters"
import PageTitle from "@/components/PageTitle"

function PageCharacter({ characters, character }) {
  const router = useRouter()

  if(router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <PageTitle title="Whatif | Detalhes do personagem" description="Um projeto desenvolvindo no curso codeboost"/>
      {
        character && <SectionHeroCharacter data={character} />
      }
      {
        characters && <ListCharacters data={characters} />
      }
    </>
  )
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient()
  const characters = await prismic.getAllByType("character")

  const paths = characters.map(({data}) => {
    return {
      params: {
        slug : data.slug
      }
    }
  })
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const prismic = getPrismicClient()
  const characters = await prismic.getAllByType("character")

  const character = characters.find(({ data })=> {
    return data.slug === context.params.slug
  })

  // Função que lista os personagens, porém sem o personagem do slug
  characters.splice(characters.findIndex((element)=>{
    return element.data.slug === character.data.slug
  }), 1)

  return {
    props: {
      characters,
      character: character.data
    }
  }
}

export default PageCharacter
