import { useRouter } from "next/router"

function PageCharacter() {

  const route = useRouter()
  return (
    <h1>Personagem: {JSON.stringify(route.query)}</h1>
  )
}

export default PageCharacter
