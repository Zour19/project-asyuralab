import Head from 'next/head'
import { useState, useRef } from 'react'

export default function Home() {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState(null)
  const [uploadedUrl, setUploadedUrl] = useState(null)
  const fileInputRef = useRef(null)

  async function handleUpload() {
    if (!file) {
      setUploadStatus('error-no-file')
      return
    }

    setUploading(true)
    setUploadStatus(null)

    try {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const base64 = e.target.result.split(',')[1]
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename: file.name, fileData: base64 }),
        })

        const data = await res.json()
        if (res.ok) {
          setUploadStatus('success')
          setUploadedUrl(data.url)
          setFile(null)
          if (fileInputRef.current) fileInputRef.current.value = ''
        } else {
          setUploadStatus('error')
        }
      }
      reader.readAsDataURL(file)
    } catch (err) {
      console.error(err)
      setUploadStatus('error')
    } finally {
      setUploading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Portfolio Fotografer — My Photographer</title>
        <meta name="description" content="Portfolio fotografer — layanan foto profesional." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ivory to-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome — My Photography</h1>
          <p className="text-lg text-gray-600">Capture your precious moments with professional photography.</p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">Upload Photo to Portfolio</h2>
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mb-2"
            >
              {file ? `Selected: ${file.name}` : 'Choose Image'}
            </button>
            {file && (
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="inline-block ml-2 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 disabled:opacity-50"
              >
                {uploading ? 'Uploading…' : 'Upload'}
              </button>
            )}
            {uploadStatus === 'success' && <p className="text-green-600 mt-4">✓ Photo uploaded successfully!</p>}
            {uploadStatus === 'error' && <p className="text-red-600 mt-4">✗ Upload failed. Try again.</p>}
            {uploadStatus === 'error-no-file' && <p className="text-red-600 mt-4">✗ Please select a file first.</p>}
            {uploadedUrl && <p className="text-sm text-gray-600 mt-4 break-all">{uploadedUrl}</p>}
          </div>
        </div>
      </section>
    </>
  )
}
