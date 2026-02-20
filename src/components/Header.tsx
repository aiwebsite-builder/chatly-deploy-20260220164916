import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-emerald-400">
          MySite
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#" className="text-gray-200 hover:text-emerald-400 transition-colors duration-200">Home</a></li>
          <li><a href="#" className="text-gray-200 hover:text-rose-400 transition-colors duration-200">About</a></li>
          <li><a href="#" className="text-gray-200 hover:text-rose-400 transition-colors duration-200">Services</a></li>
          <li><a href="#" className="text-gray-200 hover:text-rose-400 transition-colors duration-200">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-4 mt-2 transition-all duration-300 ease-in-out origin-top animate-fade-in-down">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#" className="block text-gray-100 hover:text-rose-400 transition-colors duration-200 text-lg py-2" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#" className="block text-gray-100 hover:text-rose-400 transition-colors duration-200 text-lg py-2" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#" className="block text-gray-100 hover:text-rose-400 transition-colors duration-200 text-lg py-2" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#" className="block text-gray-100 hover:text-rose-400 transition-colors duration-200 text-lg py-2" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
