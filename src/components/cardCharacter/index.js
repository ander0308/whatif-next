import Link from "next/link"
import Image from "next/image"

import { StyleCard } from "./styles"

function CardCharacter({image, name, slug}) {
  return (
    <StyleCard>
      <Link href={`/character/${slug}`}>
        <div className="image">
          <Image src={image} alt="imagem personagem" />
        </div>
        <div className="info">
          <div>
            <h3>{name}</h3>
            <span>Marvel Studios</span>
          </div>
          <span>What if</span>
        </div>
      </Link>
    </StyleCard>
  )
}

export default CardCharacter
