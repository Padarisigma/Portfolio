'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative z-50">
      {/* Бургер-иконка */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-[5px] justify-center items-center w-10 h-10"
      >
        <span
          className={`w-6 h-0.5 bg-white mb-1 transform transition duration-300 ${
            isOpen ? 'rotate-45 translate-y-1' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white mb-1 transition duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1' : ''
          }`}
        />
      </button>

      {/* Меню с плавной анимацией */}
      <div
        className={`absolute top-12 right-0 flex flex-col gap-[10px] text-white p-6 rounded-md shadow-lg bg-black space-y-4 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </div>
  );
}
