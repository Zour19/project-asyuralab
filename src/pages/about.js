import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About — My Photographer</title>
        <meta name="description" content="About me: professional photographer portfolio and services." />
      </Head>
      <section>
        <h1 className="text-2xl font-semibold">About Me</h1>
        <p className="mt-3 text-gray-600">Short bio and photography background.</p>
      </section>
    </>
  )
}
