import {
  ArrowUpRight,
  Download,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { downloadVCard } from "../lib/vcard";
import { site } from "../site";

export function Hero() {
  const initials = `${site.firstName[0]}${site.lastName[0]}`;

  return (
    <section className="mx-auto w-full max-w-xl px-5 pt-10 sm:pt-14">
      {/* stato */}
      <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-[12.5px] font-medium text-accent">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        {site.availability}
      </p>

      {/* foto / monogramma */}
      <div className="mt-6 flex items-center gap-4">
        {site.photo ? (
          <img
            src={site.photo}
            alt={site.fullName}
            className="h-16 w-16 rounded-2xl object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-xl font-bold tracking-tight text-white">
            {initials}
          </div>
        )}
        <div>
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink-soft">
            {site.location}
          </p>
          <p className="mt-0.5 text-[13px] text-ink-soft">
            Rispondo in giornata, di solito entro poche ore.
          </p>
        </div>
      </div>

      {/* gerarchia: nome → ruolo → cosa */}
      <h1 className="mt-5 text-[42px] font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
        {site.firstName}
        <br />
        {site.lastName}
      </h1>
      <p className="mt-3 text-lg font-semibold text-accent">{site.role}</p>
      <p className="mt-2 max-w-md text-[16.5px] leading-relaxed text-ink">
        {site.tagline}
      </p>
      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">
        {site.intro}
      </p>

      {/* CTA principale */}
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-[17px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(32,56,255,0.6)] transition-all hover:bg-accent-dark active:scale-[0.99]"
      >
        <MessageCircle size={20} strokeWidth={2.2} />
        Scrivimi su WhatsApp
      </a>

      {/* secondaria */}
      <button
        onClick={downloadVCard}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-line bg-white px-6 py-3.5 text-[15.5px] font-semibold text-ink transition-colors hover:border-ink"
      >
        <Download size={18} strokeWidth={2.2} />
        Salva contatto
      </button>

      {/* contatti rapidi */}
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        <a
          href={`tel:${site.phoneHref}`}
          className="flex flex-col items-center gap-1.5 rounded-2xl border border-line py-4 text-[13.5px] font-medium text-ink transition-colors hover:border-ink"
        >
          <Phone size={19} strokeWidth={2} className="text-accent" />
          Chiama
        </a>
        <a
          href={`mailto:${site.email}`}
          className="flex flex-col items-center gap-1.5 rounded-2xl border border-line py-4 text-[13.5px] font-medium text-ink transition-colors hover:border-ink"
        >
          <Mail size={19} strokeWidth={2} className="text-accent" />
          Email
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1.5 rounded-2xl border border-line py-4 text-[13.5px] font-medium text-ink transition-colors hover:border-ink"
        >
          <ArrowUpRight size={19} strokeWidth={2} className="text-accent" />
          GitHub
        </a>
      </div>

      <a
        href={site.linkedin}
        target="_blank"
        rel="noreferrer"
        className="mt-2.5 flex items-center justify-center gap-1.5 rounded-2xl border border-line py-3.5 text-[13.5px] font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
      >
        LinkedIn — profilo professionale
        <ArrowUpRight size={15} />
      </a>
    </section>
  );
}
