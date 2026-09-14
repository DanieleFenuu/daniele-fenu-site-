import { useRef } from "react";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { ArrowLeft, Download } from "lucide-react";
import { site } from "../site";

export function QrPage() {
  const qrWrapRef = useRef<HTMLDivElement>(null);

  function downloadPng() {
    const svg = qrWrapRef.current?.querySelector("svg");
    if (!svg) return;

    const xml = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([xml], {
      type: "image/svg+xml;charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const size = 1024;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(svgUrl);

      const pngUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = pngUrl;
      a.download = "daniele-fenu-qr.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
    };
    img.src = svgUrl;
  }

  return (
    <div className="flex min-h-svh flex-col bg-paper">
      <div className="mx-auto flex w-full max-w-xl items-center px-5 pt-5">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
        >
          <ArrowLeft size={15} />
          Torna alla home
        </Link>
      </div>

      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center px-5 pb-12 pt-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-lg font-bold text-white">
          DF
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-ink">
          {site.fullName}
        </h1>
        <p className="mt-1 font-semibold text-accent">{site.role}</p>
        <p className="mt-1 text-sm text-ink-soft">
          Inquadra per aprire il mio biglietto da visita
        </p>

        <div className="mt-7 rounded-3xl border border-line bg-white p-6 shadow-[0_20px_60px_-30px_rgba(35,39,46,0.35)]">
          <div ref={qrWrapRef} className="h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]">
            <QRCodeSVG
              value={site.website}
              width="100%"
              height="100%"
              fgColor="#23272e"
              bgColor="#ffffff"
              level="M"
              includeMargin={false}
            />
          </div>
        </div>

        <p className="mt-4 max-w-xs break-all text-[13px] text-ink-soft">
          {site.website}
        </p>

        <button
          onClick={downloadPng}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-accent-dark sm:w-auto sm:px-10"
        >
          <Download size={18} strokeWidth={2.2} />
          Scarica QR in PNG
        </button>

        <p className="mt-6 max-w-xs text-[12.5px] leading-relaxed text-ink-soft">
          Suggerimento: stampa questo QR sul retro del tuo biglietto cartaceo
          o mostralo dal telefono quando incontri qualcuno.
        </p>
      </main>
    </div>
  );
}
