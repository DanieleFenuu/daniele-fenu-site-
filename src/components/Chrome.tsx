import { useState } from "react";
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
