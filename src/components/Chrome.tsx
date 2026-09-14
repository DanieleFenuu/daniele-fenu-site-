import { useState } from "react";
import { Link } from "react-router-dom";
import { QrCode } from "lucide-react";
import { site } from "../site";

/** Logo DF: usa public/logo.png, con monogramma di riserva se manca il file. */
export function SiteLogo({ size }: { size: "sm" | "lg" }) {
  const [missing, setMissing] = useState(false);
  const cls = size === "sm" ? "h-9 w-9 rounded-full" : "h-14 w-14 rounded-2xl";

  if (!site.logo || missing) {
    return (
      <span
        className={`flex items-center justify-center bg-ink font-bold tracking-tight text-white ${cls} ${
          size === "sm" ? "text-[13px]" : "text-lg"
        }`}
      >
        DF
      </span>
    );
  }
  return (
    <img
      src={site.logo}
      alt="Logo Daniele Fenu"
      onError={() => setMissing(true)}
      className={`${cls} object-cover`}
    />
  );
}

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-xl items-center justify-between px-5 pt-5">
      <Link to="/" className="flex items-center gap-2.5" aria-label="Home">
        <SiteLogo size="sm" />
        <span className="text-sm font-semibold tracking-tight text-ink">
          Daniele Fenu
        </span>
      </Link>
      <Link
        to="/qr"
        className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
      >
        <QrCode size={15} strokeWidth={2.2} />
        QR
      </Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-xl px-5 pb-10 pt-4">
      <div className="border-t border-line pt-5">
        <p className="text-[13px] leading-relaxed text-ink-soft">
          © {new Date().getFullYear()} Daniele Fenu · {site_footer()}
        </p>
      </div>
    </footer>
  );

  function site_footer() {
    return "Junior Web Developer";
  }
}
