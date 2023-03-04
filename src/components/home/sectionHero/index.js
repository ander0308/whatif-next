import Image from "next/image"

import { Container } from "@/styles/global"
import { SectionHeroStyle, ContentSocial, ContentText } from "./styles"

import IconYoutube from "@/assets/youtube.svg"
import IconInstagram from "@/assets/instagram-fill.svg"
import PopupVideo from "@/components/popupVideo/"
import { useEffect } from "react"

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

function SectionHero({data}) {
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
            <h3>{data.subtitle_hero}</h3>
            <h1>{data.title_hero}</h1>
            <p>{data.description_hero[0].text}</p>
            <a href={data.url_button.url} target="_blank">{data.label_button}</a>
          </div>
          <PopupVideo label={data.label_trailer} thumb={data.thumbnail_trailer.url}/>
        </ContentText>
      </Container>
    </SectionHeroStyle>
  )
}

export default SectionHero
