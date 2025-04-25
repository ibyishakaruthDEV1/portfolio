import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md  top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          Portfolio
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-secondary">Home</Link>
          <Link href="#projects" className="hover:text-secondary">Projects</Link>
          <Link href="#about" className="hover:text-secondary">About</Link>
          <Link href="#contact" className="hover:text-secondary">Contact</Link>
          </div>
        {/* Mobile Menu (Hamburger Icon) */}
        <button className="md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}