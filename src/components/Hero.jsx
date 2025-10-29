import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="h-full w-full bg-[radial-gradient(60%_60%_at_50%_0%,rgba(10,10,10,0.06),rgba(255,255,255,0))]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Agent Assistant Documentaire
          </div>
          <h1 className="mt-6 text-4xl/tight font-semibold tracking-tight text-neutral-900 md:text-5xl/tight">
            La gestion documentaire, réinventée avec sobriété et précision
          </h1>
          <p className="mt-5 max-w-2xl text-neutral-600 text-base md:text-lg">
            Développé par Agentice, notre assistant IA classe, retrouve et comprend vos documents. Il s’intègre naturellement à vos outils internes pour accélérer l’accès à l’information et supprimer les tâches répétitives.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#demo" className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 transition-colors">
              Demander une démo
            </a>
            <a href="#product" className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:border-neutral-400 transition-colors">
              Voir la documentation
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-2 w-24 rounded bg-neutral-200" />
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
              </div>
            </div>
            <div className="h-40 rounded-lg border border-dashed border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-400 text-sm">
              Aperçu de classement documentaire épuré
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-2 w-24 rounded bg-neutral-200" />
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
                <span className="h-2 w-2 rounded-full bg-neutral-300" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-3 w-4/5 rounded bg-neutral-200" />
              <div className="h-3 w-3/5 rounded bg-neutral-200" />
              <div className="h-3 w-2/5 rounded bg-neutral-200" />
              <div className="h-28 rounded-md border border-neutral-200 bg-neutral-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
