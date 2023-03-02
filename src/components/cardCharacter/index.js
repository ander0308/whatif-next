import Link from "next/link"
import Image from "next/image"

import { StyleCard } from "./styles"
import ImageCharacter from '@/assets/character.jpg'

function CardCharacter() {
  return (
    <StyleCard>
      <Link href="#">
        <div className="image">
          <Image src={ImageCharacter} alt="imagem personagem" />
        </div>
        <div className="info">
          <div>
            <h3>T Challa</h3>
            <span>Marvel Studios</span>
          </div>
          <span>What if</span>
        </div>
      </Link>
    </StyleCard>
  )
}

export default CardCharacter
