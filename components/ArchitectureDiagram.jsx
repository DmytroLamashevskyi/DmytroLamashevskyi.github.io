function Flow({ steps }) {
  return (
    <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
      {steps.map(([title, detail], index) => (
        <li key={title} className="flex min-w-0 flex-1 flex-col gap-3 lg:flex-row">
          {index > 0 && <span aria-hidden="true" className="self-center text-xl text-accent/60"><span className="lg:hidden">↓</span><span className="hidden lg:inline">→</span></span>}
          <div className="w-full rounded-xl border border-accent/25 bg-accent/[0.055] p-4">
            <span className="text-[10px] text-accent/60">{String(index + 1).padStart(2, "0")}</span>
            <p className="mt-2 break-words text-sm font-semibold text-white/90">{title}</p>
            {detail && <p className="mt-2 text-xs leading-5 text-white/55">{detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function ArchitectureDiagram({ diagram, locale, slug }) {
  const titleId = `${slug}-${diagram.id}-title`;
  return (
    <figure aria-labelledby={titleId} className="rounded-2xl border border-white/10 bg-black/15 p-5 sm:p-7">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h3 id={titleId} className="text-lg font-semibold">{diagram.title}</h3>
        <span className="text-[10px] uppercase tracking-widest text-accent/65">{locale === "ja" ? "簡略化した構成図" : "Simplified system view"}</span>
      </div>
      {diagram.steps && <Flow steps={diagram.steps} />}
      {diagram.lanes && <div className="space-y-6">{diagram.lanes.map((lane) => <div key={lane.label}><p className="mb-3 text-xs text-white/50">{lane.label}</p><Flow steps={lane.steps} /></div>)}</div>}
      {diagram.branches && <div className="mt-5 grid gap-3 border-t border-dashed border-white/15 pt-5 sm:grid-cols-2">{diagram.branches.map(([title, detail]) => <div key={title} className="rounded-xl border border-white/10 bg-white/[0.025] p-4"><p className="text-sm font-semibold text-accent/85">{title}</p><p className="mt-2 text-xs leading-6 text-white/60">{detail}</p></div>)}</div>}
      {diagram.finish && <div className="mt-5"><p aria-hidden="true" className="mb-3 text-center text-xl text-accent/60">↓</p><Flow steps={diagram.finish} /></div>}
      <figcaption className="mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-white/60">{diagram.caption}</figcaption>
    </figure>
  );
}
