

import { StylePageNotFound} from "./styles"
import { Container } from "@/styles/global"

import ImageNotFound from '@/assets/image-not-found.png'
import Link from "next/link"
import Image from "next/image"

function ComponentPageNotFound() {
  return (
<StylePageNotFound>
  <Container>
    <h1>Whoops, essa página sumiu.</h1>
    <p>OHHH, parece que não conseguimos encontrar a página que você está procurando. Tente voltar à página anterior ou consulte nossa Central de Ajuda para obter mais informações.</p>
    <Link href="/">Voltar</Link>
    <Image src={ImageNotFound} alt="Imagem de página não encontrada" />
  </Container>
  </StylePageNotFound>
  )
}

export default ComponentPageNotFound
