import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="security" className="bg-neutral-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">Sécurité par design</h2>
              <p className="mt-3 text-neutral-600">
                Contrôles d'accès respectés, journalisation des actions et options d'hébergement conformes à vos exigences.
                Une approche sobre et rigoureuse, pensée pour les équipes IT et les environnements sensibles.
              </p>
            </div>
            <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm text-neutral-700">
                <li className="rounded-md border border-neutral-200 bg-neutral-50 p-4">Héritage des droits et confidentialité par défaut</li>
                <li className="rounded-md border border-neutral-200 bg-neutral-50 p-4">Chiffrement des données en transit et au repos</li>
                <li className="rounded-md border border-neutral-200 bg-neutral-50 p-4">Journalisation, traçabilité et audit</li>
                <li className="rounded-md border border-neutral-200 bg-neutral-50 p-4">Conformité RGPD et conservation maîtrisée</li>
                <li className="rounded-md border border-neutral-200 bg-neutral-50 p-4">Gestion fine des accès et des rôles</li>
                <li className="rounded-md border border-neutral-200 bg-neutral-50 p-4">Déploiements cloud privé ou sur site</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
