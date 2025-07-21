import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <div className="bg-[#4c3e3c] ">
    <nav className=" block bg-[#fadcd9]  shadow-md fixed w-full top-0 z-50 mb-20">
      <div className="max-w-7xl mx-auto px-2  sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#fb4570]" >Prapti<span>🌸</span></div>

        {/* Desktop Menu */}
        <ul className=" md:flex space-x-6 text-black-600 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-[#f8afa6] transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-700 font-medium hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
