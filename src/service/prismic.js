import { createClient } from '@prismicio/client'

export function getPrismicClient(request){
  const prismic = createClient(process.env.PRISMIC_ENDPOINT, {
    request,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })

  return prismic
}
