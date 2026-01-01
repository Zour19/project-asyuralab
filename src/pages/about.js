import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About — My Photographer</title>
        <meta name="description" content="About me: professional photographer portfolio and services." />
      </Head>

      <section className="container mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex">
          {/* left: image */}
          <div className="md:w-1/2">
            <img
              src="/images/about/profile.jpg"
              alt="Profile"
              className="w-full h-80 object-cover md:h-full"
            />
          </div>

          {/* right: content */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-2">Tentang Saya</h1>
            <p className="text-gray-600 mb-4">Fotografer profesional — menangkap momen berharga dengan gaya natural dan editorial.</p>

            <p className="text-gray-700 leading-relaxed">Saya fokus pada fotografi pernikahan, portrait, dan editorial. Dengan pengalaman bertahun-tahun, saya bekerja sama dengan klien untuk menciptakan narasi visual yang kuat dan timeless. Saya percaya pada perencanaan yang matang, komunikasi yang jelas, dan hasil akhir yang memukau.</p>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-semibold">120+</p>
                <p className="text-sm text-gray-500">Proyek</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">10</p>
                <p className="text-sm text-gray-500">Tahun Pengalaman</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">50+</p>
                <p className="text-sm text-gray-500">Klien</p>
              </div>
            </div>

            <div className="mt-6">
              <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Hire Me</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
