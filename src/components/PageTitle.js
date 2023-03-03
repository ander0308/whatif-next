import Head from "next/head"

function PageTitle({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}

export default PageTitle
