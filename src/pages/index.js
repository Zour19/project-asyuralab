import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Fotografer — My Photographer</title>
        <meta name="description" content="Portfolio fotografer — layanan foto profesional." />
      </Head>
      <section>
        <h1 className="text-3xl font-bold">Welcome — My Photography</h1>
        <p className="mt-4 text-gray-600">Showcase of my latest work.</p>
      </section>
    </>
  )
}
