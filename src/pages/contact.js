import Head from 'next/head'
import { useState } from 'react'
import { submitContact } from '../utils/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await submitContact(form)
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>Contact — My Photographer</title>
        <meta name="description" content="Contact page — reach out for photography services." />
      </Head>
      <section>
        <h1 className="text-2xl font-semibold">Contact</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mt-4 space-y-3">
          <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Nama" className="w-full p-2 border" required />
          <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Email" className="w-full p-2 border" required />
          <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Pesan" className="w-full p-2 border" required />
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            {status === 'sending' ? 'Mengirim…' : 'Kirim'}
          </button>
          {status === 'sent' && <p className="text-green-600">Pesan terkirim. Terima kasih!</p>}
          {status === 'error' && <p className="text-red-600">Terjadi kesalahan. Silakan coba lagi.</p>}
        </form>
      </section>
    </>
  )
}
