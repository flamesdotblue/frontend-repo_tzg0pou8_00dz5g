import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-sm bg-neutral-900" aria-hidden="true" />
          <span className="font-semibold tracking-tight text-neutral-900 text-lg">
            Agentice
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <a href="#product" className="hover:text-neutral-900 transition-colors">Produit</a>
          <a href="#integrations" className="hover:text-neutral-900 transition-colors">Intégrations</a>
          <a href="#security" className="hover:text-neutral-900 transition-colors">Sécurité</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 transition-colors"
          >
            Demander une démo
          </a>
        </div>
      </div>
    </header>
  );
}
