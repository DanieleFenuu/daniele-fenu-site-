import { Link } from "react-router-dom";
import { QrCode } from "lucide-react";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-xl items-center justify-between px-5 pt-5">
      <Link to="/" className="flex items-center gap-2.5" aria-label="Home">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-[13px] font-bold tracking-tight text-white">
          DF
        </span>
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
