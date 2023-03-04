import Image from 'next/image'

import CardCharacter from '@/components/cardCharacter'
import { Container } from '@/styles/global'
import { StyleSectionCharacters, StyleListCharacters } from './styles'

import LogoMarvel from '@/assets/logo.svg'

function ListCharacters({ data }) {
  return (
    <StyleSectionCharacters>
      <Container>
        <div className='title'>
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </div>
        <StyleListCharacters>

          {
            data.map((character) => {
              return(
                <CardCharacter key={character.id} name={character.data.name_character} image={character.data.image_character.url} slug={character.slugs} />
              )
            })
          }
          <div className='marvel'>
            <Image src={LogoMarvel} alt="Logo Marvel Studios" />
          </div>
        </StyleListCharacters>
      </Container>
    </StyleSectionCharacters>
  )
}

export default ListCharacters
