export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  try {
    // Example: if deployed to Cloudflare Workers with D1 binding named `D1_DATABASE`,
    // you can use the D1 binding to run SQL like below. In Next.js local dev this binding
    // won't be available — fallback to echoing the payload.
    if (globalThis.D1_DATABASE) {
      const result = await globalThis.D1_DATABASE.prepare(
        `INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`
      ).run(name, email, message)
      return res.status(200).json({ ok: true, insertedId: result.lastRowId })
    }

    // Fallback: return received data (useful for local dev)
    return res.status(200).json({ ok: true, received: { name, email, message } })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: err.message })
  }
}
