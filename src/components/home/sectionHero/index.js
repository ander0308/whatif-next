import Image from "next/image"

import { Container } from "@/styles/global"
import { SectionHeroStyle, ContentSocial, ContentText } from "./styles"

import IconYoutube from "@/assets/youtube.svg"
import IconInstagram from "@/assets/instagram-fill.svg"
import PopupVideo from "@/components/popupVideo/"

const socials = [
  {
    name: "youtube",
    alt: "Icone do youtube",
    url: "#",
    icon: IconYoutube
  },
  {
    name: "Instagram",
    alt: "Icone do Instagram",
    url: "#",
    icon: IconInstagram
  }
]

function SectionHero() {
  return (
    <SectionHeroStyle>
      <Container>
        <ContentSocial>
          <ul>
            {
            socials.map(({name, url, alt, icon}) => {
              return(
              <li key={name}>
                <a href={url} target="_blank">
                  <Image src={icon} alt={alt}/>
                </a>
              </li>
              )
            })}
          </ul>
        </ContentSocial>
        <ContentText>
          <div className="left">
            <h3>COMING SON</h3>
            <h1>Marvels WHAT IF...?</h1>
            <p>A primeira série animada da Marvel Studios reinventa os momentos definitivos do Universo Cinematográfico Marvel de forma surpreendente, mudando o destino de seus heróis favoritos. Com diversos atores dublando seus personagens originais, “What If...?” tem roteiro de AC Bradley e direção de Bryan Andrews..
            </p>
            <a href="#">Saiba mais</a>
          </div>
          <PopupVideo />
        </ContentText>
      </Container>
    </SectionHeroStyle>
  )
}

export default SectionHero
