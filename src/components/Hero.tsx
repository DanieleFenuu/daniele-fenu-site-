import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  QrCode,
} from "lucide-react";
import { downloadVCard } from "../lib/vcard";
import { site } from "../site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

/** Foto profilo stile Instagram ma elegante: cerchio a fianco del nome con anello sottile. */
function ProfilePhoto() {
  const [missing, setMissing] = useState(false);
  if (!site.photo || missing) return null;
  return (
    <div className="shrink-0 rounded-full bg-ink p-[2.5px] shadow-[0_10px_28px_-14px_rgba(35,39,46,0.7)]">
      <div className="rounded-full bg-white p-[2.5px]">
        <img
          src={site.photo}
          alt={`Foto di ${site.fullName}`}
          onError={() => setMissing(true)}
          className="h-[76px] w-[76px] rounded-full object-cover object-[50%_18%] sm:h-[84px] sm:w-[84px]"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-xl px-5 pt-5 sm:pt-6">
      {/* disponibilità a sinistra, QR a destra sulla stessa riga */}
      <div className="flex items-center justify-between gap-2">
        <p className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-[12.5px] font-medium text-green-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          {site.availability}
        </p>
        <Link
          to="/qr"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
        >
          <QrCode size={15} strokeWidth={2.2} />
          QR
        </Link>
      </div>

      {/* gerarchia: foto + nome → ruolo → cosa */}
      <div className="mt-5 flex items-center gap-4">
        <ProfilePhoto />
        <h1 className="text-[42px] font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
          {site.firstName}
          <br />
          {site.lastName}
        </h1>
      </div>
      <p className="mt-3 text-lg font-semibold text-accent">{site.role}</p>
      <p className="mt-2 max-w-md text-[16.5px] font-medium leading-relaxed text-ink">
        {site.tagline}
      </p>
      <p className="mt-1.5 max-w-md text-[14px] leading-relaxed text-ink-soft">
        {site.intro}
      </p>

      {/* CTA principale: WhatsApp */}
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-accent px-6 py-4 text-[17px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(32,56,255,0.6)] transition-all hover:bg-accent-dark active:scale-[0.99]"
      >
        <WhatsAppIcon size={21} />
        Scrivimi su WhatsApp
      </a>

      {/* Instagram */}
      <a
        href={site.instagram}
        target="_blank"
        rel="noreferrer"
        className="mt-3 flex w-full items-center gap-1 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-4 transition-colors hover:border-ink"
      >
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
          style={{
            background:
              "linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)",
          }}
        >
          <InstagramIcon size={19} />
        </span>
        <span className="ml-1.5 flex-1 text-center text-[15px] font-semibold tracking-tight text-ink">
          {site.instagramLabel}
        </span>
        <ArrowUpRight size={17} className="shrink-0 text-ink-soft" />
      </a>

      {/* salva contatto */}
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
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1.5 rounded-2xl border border-line py-4 text-[13.5px] font-medium text-ink transition-colors hover:border-ink"
        >
          <ArrowUpRight size={19} strokeWidth={2} className="text-accent" />
          LinkedIn
        </a>
      </div>

    </section>
  );
}
