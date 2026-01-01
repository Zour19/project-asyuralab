import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-white shadow-sm">
      <Link href="/">
        <a className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-8 w-8 object-contain" />
          <span className="font-semibold">My Photographer</span>
        </a>
      </Link>
      <div className="space-x-4">
        <Link href="/portfolio"><a>Portfolio</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </div>
    </nav>
  )
}
