import SectionHeroCharacter from "@/components/details/sectionHeroCharacter"
import ListCharacters from "@/components/home/ListCharacters"
import PageTitle from "@/components/PageTitle"

function PageCharacter() {

  return (
    <>
      <PageTitle title="Whatif | Detalhes do personagem" description="Um projeto desenvolvindo no curso codeboost"/>
      <SectionHeroCharacter />
      <ListCharacters />
    </>
  )
}

export default PageCharacter
