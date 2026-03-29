import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide text-violet-400">
          Abdul.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
  {links.map((link) => (
    <li key={link.name}>
      <a
        href={link.href}
        className="hover:text-white transition cursor-pointer"
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
  <ul className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-6 space-y-4 text-gray-300">
    {links.map((link) => (
      <li key={link.name}>
        <a href={link.href} className="hover:text-white">
          {link.name}
        </a>
      </li>
    ))}
  </ul>
)}
    </nav>
  );
}