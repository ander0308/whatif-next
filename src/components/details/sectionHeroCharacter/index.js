import Image from 'next/image'

import { Container } from '@/styles/global'
import {SectionCharacterStyle} from './styles'

function SectionHeroCharacter({data}) {
  return (
    <SectionCharacterStyle>
      <Container>
        <div className='image'>
          <Image src={data.image_character.url} alt={`imagem ${data.name_character}`} width={486} height={631}/>
        </div>
        <div className='info'>
          <span>A História</span>
          <div>
            <h1>{data.name_character}</h1>
            <p>{data.description_character[0].text}</p>
          </div>
        </div>
      </Container>
    </SectionCharacterStyle>
  )
}

export default SectionHeroCharacter
