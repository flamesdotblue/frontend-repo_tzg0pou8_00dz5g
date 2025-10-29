import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-sm bg-neutral-900" aria-hidden="true" />
            <div className="text-neutral-900 font-medium">Agentice</div>
          </div>
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Agentice. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#security" className="hover:text-neutral-900">Sécurité</a>
            <a href="#legal" className="hover:text-neutral-900">Mentions légales</a>
            <a href="#privacy" className="hover:text-neutral-900">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
