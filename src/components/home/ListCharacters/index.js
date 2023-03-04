import Image from 'next/image'

import CardCharacter from '@/components/cardCharacter'
import { Container } from '@/styles/global'
import { StyleSectionCharacters, StyleListCharacters } from './styles'

import LogoMarvel from '@/assets/logo.svg'
import ImageCharacter from '@/assets/character.jpg'

const characters = [
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger"
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger"
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger"
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger"
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger"
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger"
  },
  {
    name: "Killmonger",
    image: ImageCharacter,
    slug: "killmonger"
  },
]

function ListCharacters() {
  return (
    <StyleSectionCharacters>
      <Container>
        <div className='title'>
          <span>What if</span>
          <h2>Personagens Marvel</h2>
        </div>
        <StyleListCharacters>

          {
            characters.map(({name, image, slug}) => {
              return(
                <CardCharacter key={name} name={name} image={image} slug={slug} />
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
