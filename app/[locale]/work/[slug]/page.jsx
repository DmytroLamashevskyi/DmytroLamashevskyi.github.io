import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowLeft, BsArrowUpRight } from "react-icons/bs";
import { caseStudySlugs, getCaseStudy } from "@/lib/case-studies";
import { locales } from "@/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => caseStudySlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const study = getCaseStudy(locale, slug);
  if (!study) return {};

  return {
    title: `${study.title} — Case Study`,
    description: study.summary,
    alternates: {
      canonical: `/${locale}/work/${slug}`,
      languages: {
        en: `/en/work/${slug}`,
        ja: `/ja/work/${slug}`,
      },
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { locale, slug } = await params;
  const study = getCaseStudy(locale, slug);
  if (!study) notFound();
  const labels = locale === "ja"
    ? { back: "プロジェクト一覧", role: "担当", stack: "技術スタック", next: "次の検証", private: "ソース非公開" }
    : { back: "Selected work", role: "Role", stack: "Technology", next: "Next validation", private: "Private source" };

  return (
    <article className="py-12 xl:py-20">
      <div className="container mx-auto">
        <Link href={`/${locale}/work`} className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-accent">
          <BsArrowLeft /> {labels.back}
        </Link>

        <header className="mt-10 grid gap-10 border-b border-white/10 pb-14 xl:grid-cols-[1.3fr_0.7fr] xl:items-end">
          <div>
            <span className="eyebrow">{study.eyebrow}</span>
            <h1 className="h1 mt-5">{study.title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">{study.summary}</p>
          </div>
          <div className="surface-card p-6">
            <span className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{study.status}</span>
            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/35">{labels.role}</p>
            <p className="mt-2 text-sm leading-6 text-white/70">{study.role}</p>
            {study.links.map((link) => (
              <Link key={link.href} href={link.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white">
                {link.label} <BsArrowUpRight />
              </Link>
            ))}
          </div>
        </header>

        <section className="grid gap-4 border-b border-white/10 py-10 sm:grid-cols-3">
          {study.signals.map((signal) => (
            <div key={signal.label} className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <p className="text-xl font-semibold text-accent">{signal.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/40">{signal.label}</p>
            </div>
          ))}
        </section>

        <div className="grid gap-8 py-14 xl:grid-cols-[0.82fr_1.18fr]">
          <h2 className="h3 text-white">{study.problem.title}</h2>
          <div className="space-y-5 text-sm leading-7 text-white/60 sm:text-base">
            {study.problem.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>

        <section className="surface-card p-6 sm:p-8 xl:p-10">
          <div className="max-w-3xl">
            <h2 className="h3">{study.architecture.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">{study.architecture.intro}</p>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {study.architecture.flow.map((step, index) => (
              <div key={step} className="relative rounded-xl border border-accent/20 bg-accent/[0.055] px-4 py-5 text-sm font-semibold text-white/80">
                <span className="mb-3 block text-[10px] tracking-[0.18em] text-accent/65">0{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
          <ul className="mt-8 grid gap-4 text-sm leading-7 text-white/60 lg:grid-cols-3">
            {study.architecture.notes.map((note) => <li key={note} className="border-l border-accent/40 pl-4">{note}</li>)}
          </ul>
        </section>

        <section className="py-14">
          <h2 className="h3">{study.decisions.title}</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {study.decisions.items.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <span className="text-xs text-accent/70">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-y border-white/10 py-14 xl:grid-cols-[0.82fr_1.18fr]">
          <h2 className="h3">{study.outcome.title}</h2>
          <div className="space-y-5 text-sm leading-7 text-white/60 sm:text-base">
            {study.outcome.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="grid gap-6 py-14 lg:grid-cols-2">
          <div className="surface-card p-7">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold">{study.boundaries.title}</h2>
              <span className="shrink-0 text-[10px] uppercase tracking-[0.15em] text-white/30">{labels.private}</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/55">{study.boundaries.body}</p>
          </div>
          <div className="surface-card p-7">
            <h2 className="text-lg font-semibold">{labels.next}</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/60">
              {study.next.map((item) => <li key={item} className="flex gap-3"><span className="text-accent">→</span><span>{item}</span></li>)}
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 pt-10">
          <p className="text-xs uppercase tracking-[0.16em] text-white/35">{labels.stack}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.stack.map((item) => <span key={item} className="tech-pill">{item}</span>)}
          </div>
        </section>
      </div>
    </article>
  );
}
