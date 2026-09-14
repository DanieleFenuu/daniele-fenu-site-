import { ArrowUpRight } from "lucide-react";
import { site } from "../site";
import { WhatsAppIcon } from "./icons";

export function Services() {
  return (
    <section className="mx-auto w-full max-w-xl px-5 pt-14">
      <h2 className="text-2xl font-bold tracking-[-0.02em] text-ink">
        Mi occupo di creare:
      </h2>

      <div className="mt-5 divide-y divide-line rounded-2xl border border-line">
        {site.services.map((s) => (
          <div key={s.n} className="px-5 py-5">
            <p className="text-[12.5px] font-bold tracking-widest text-accent">
              {s.n}
            </p>
            <h3 className="mt-1 text-[16.5px] font-semibold tracking-tight text-ink">
              {s.title}
            </h3>
            <p className="mt-1 text-[14.5px] leading-relaxed text-ink-soft">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="mx-auto w-full max-w-xl px-5 pt-14">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Lavori
          </p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.02em] text-ink">
            Esempi recenti
          </h2>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {site.projects.map((p) => (
          <article
            key={p.name}
            className="overflow-hidden rounded-2xl border border-line"
          >
            {/* screenshot placeholder in puro CSS */}
            <div className="bg-accent-soft px-5 pb-0 pt-5">
              <div className="rounded-t-xl border border-b-0 border-line bg-white px-4 pb-4 pt-3 shadow-sm">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-[13px] font-bold text-white">
                    {p.initials}
                  </span>
                  <div className="flex-1">
                    <div className="h-2.5 w-2/3 rounded-full bg-ink/15" />
                    <div className="mt-1.5 h-2 w-1/3 rounded-full bg-ink/10" />
                  </div>
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-line" />
                <div className="mt-1.5 h-2 w-5/6 rounded-full bg-line" />
                <div className="mt-3 h-8 w-28 rounded-lg bg-accent/90" />
              </div>
            </div>

            <div className="px-5 py-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">
                {p.tag}
              </p>
              <h3 className="mt-1 text-[16px] font-semibold tracking-tight text-ink">
                {p.name}
              </h3>
              <p className="mt-0.5 text-[14px] text-ink-soft">{p.result}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-[14px] font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
              >
                {p.linkLabel}
                <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-xl px-5 pt-14">
      <div className="rounded-3xl bg-ink px-6 py-8 text-center">
        <h2 className="text-[22px] font-bold leading-snug tracking-tight text-white">
          {site.finalCta.title}
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-[14.5px] leading-relaxed text-white/70">
          {site.finalCta.text}
        </p>
        <a
          href={site.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-[16px] font-semibold text-ink transition-transform active:scale-[0.99]"
        >
          <span className="text-accent">
            <WhatsAppIcon size={19} />
          </span>
          {site.finalCta.button}
        </a>
        <p className="mt-3 text-[12.5px] text-white/50">
          Oppure: {site.phoneDisplay} · {site.email}
        </p>
      </div>
    </section>
  );
}
