import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-white shadow-sm">
      <Link href="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="logo" className="h-8 w-8 object-contain" />
        <span className="font-semibold">My Photographer</span>
      </Link>
      <div className="space-x-4">
        <Link href="/portfolio" className="hover:text-gray-600">Portfolio</Link>
        <Link href="/about" className="hover:text-gray-600">About</Link>
        <Link href="/blog" className="hover:text-gray-600">Blog</Link>
        <Link href="/contact" className="hover:text-gray-600">Contact</Link>
      </div>
    </nav>
  )
}
