import Head from 'next/head'

export default function Portfolio() {
  const photos = ['/images/photo1.jpg', '/images/photo2.jpg']
  return (
    <>
      <Head>
        <title>Portfolio — My Photographer</title>
        <meta name="description" content="Gallery of photography work." />
      </Head>
      <section>
        <h1 className="text-2xl font-semibold">Portfolio</h1>
        <p className="mt-3 text-gray-600">Gallery of photos stored in `public/images/`.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index}`} className="w-full h-64 object-cover rounded" />
          ))}
        </div>
      </section>
    </>
  )
}
