import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { ArrowLeft, Globe, ScanLine } from "lucide-react";
import { site } from "../site";
import { SiteLogo } from "../components/Chrome";

export function QrPage() {
  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-paper">
      {/* dettagli colore di sfondo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-accent-soft blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-accent-soft blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-xl items-center justify-between px-5 pt-5">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/80 px-3.5 py-2 text-[13px] font-medium text-ink-soft backdrop-blur transition-colors hover:border-ink hover:text-ink"
        >
          <ArrowLeft size={15} />
          Torna alla home
        </Link>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3.5 py-2 text-[13px] font-semibold text-accent">
          <ScanLine size={15} strokeWidth={2.2} />
          Scansionami
        </span>
      </div>

      <main className="relative mx-auto flex w-full max-w-xl flex-1 flex-col items-center px-5 pb-12 pt-8 text-center">
        <div className="rounded-3xl bg-gradient-to-b from-accent-soft to-white p-1.5">
          <div className="rounded-[20px] bg-white px-6 pb-5 pt-6">
            <div className="flex flex-col items-center">
              <SiteLogo size="lg" />
              <h1 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-ink">
                {site.fullName}
              </h1>
              <p className="mt-1 text-[13px] font-bold uppercase tracking-[0.14em] text-accent">
                {site.role}
              </p>
            </div>

            <div className="relative mx-auto mt-6 h-[260px] w-[260px] sm:h-[300px] sm:w-[300px]">
              {/* cornicette colore ai 4 angoli */}
              <span aria-hidden className="absolute -left-2 -top-2 h-7 w-7 rounded-tl-2xl rounded-br-md border-[3px] border-b-0 border-r-0 border-accent" />
              <span aria-hidden className="absolute -right-2 -top-2 h-7 w-7 rounded-tr-2xl rounded-bl-md border-[3px] border-b-0 border-l-0 border-accent" />
              <span aria-hidden className="absolute -bottom-2 -left-2 h-7 w-7 rounded-bl-2xl rounded-tr-md border-[3px] border-r-0 border-t-0 border-accent" />
              <span aria-hidden className="absolute -bottom-2 -right-2 h-7 w-7 rounded-br-2xl rounded-tl-md border-[3px] border-l-0 border-t-0 border-accent" />
              <div className="h-full w-full rounded-2xl bg-white p-3">
                <QRCodeSVG
                  value={site.website}
                  width="100%"
                  height="100%"
                  fgColor="#23272e"
                  bgColor="#ffffff"
                  level="H"
                  includeMargin={false}
                  imageSettings={
                    site.logo
                      ? {
                          src: site.logo,
                          height: 56,
                          width: 56,
                          excavate: true,
                        }
                      : undefined
                  }
                />
              </div>
            </div>

            <p className="mt-4 text-sm font-medium text-ink-soft">
              Inquadra per aprire il mio biglietto da visita
            </p>

            <p className="mx-auto mt-4 inline-flex max-w-full items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-[13px] font-medium text-ink-soft ring-1 ring-line">
              <Globe size={14} className="shrink-0 text-accent" />
              <span className="truncate">{site.website}</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
