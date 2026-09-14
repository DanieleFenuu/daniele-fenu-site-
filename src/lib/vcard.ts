import { site } from "../site";

/** Genera il testo vCard 3.0 e lo scarica come file .vcf */
export function downloadVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${site.lastName};${site.firstName};;;`,
    `FN:${site.fullName}`,
    `TITLE:${site.role}`,
    `TEL;TYPE=CELL,VOICE:${site.phoneHref}`,
    `EMAIL;TYPE=INTERNET:${site.email}`,
    `URL:${site.website}`,
    `NOTE:${site.tagline}`,
    "END:VCARD",
  ];

  const blob = new Blob([lines.join("\r\n")], {
    type: "text/vcard;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "daniele-fenu.vcf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
