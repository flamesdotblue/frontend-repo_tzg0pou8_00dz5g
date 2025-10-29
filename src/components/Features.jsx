import React from 'react';
import { FileText, Search, Folder, Shield } from 'lucide-react';

const items = [
  {
    icon: Folder,
    title: 'Classement automatique',
    desc: "Les documents sont analysés, indexés et organisés sans effort, selon vos référentiels d'entreprise.",
  },
  {
    icon: Search,
    title: 'Recherche sémantique',
    desc: "Posez une question naturelle et retrouvez instantanément le bon document ou l'information essentielle.",
  },
  {
    icon: FileText,
    title: 'Compréhension contextuelle',
    desc: "L'assistant synthétise, explique et met en perspective les contenus pour accélérer la décision.",
  },
  {
    icon: Shield,
    title: 'Gouvernance & sécurité',
    desc: "Héritage des droits, journalisation et conformité pour un déploiement en environnement exigeant.",
  },
];

export default function Features() {
  return (
    <section id="product" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Précision, fiabilité et discrétion
          </h2>
          <p className="mt-3 text-neutral-600">
            Conçu pour les environnements d'entreprise, Agent Assistant Documentaire se concentre sur l'essentiel :
            une information accessible, maîtrisée et de confiance.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="integrations" className="mt-12 rounded-xl border border-neutral-200 bg-white p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-neutral-900">Intégrations naturelles</h3>
              <p className="mt-1 text-sm text-neutral-600 max-w-2xl">
                Utilisable individuellement ou intégré directement à vos outils internes (ERP, CRM, GED). Déploiement
                simple, aligné sur vos processus et vos règles d'accès.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600">
              <span className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1">SharePoint</span>
              <span className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1">Google Drive</span>
              <span className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1">OneDrive</span>
              <span className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1">Salesforce</span>
              <span className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1">SAP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
