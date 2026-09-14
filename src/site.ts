/**
 * ─────────────────────────────────────────────
 *  UNICO FILE DI CONFIGURAZIONE DEL SITO
 *  Cambia solo qui dentro. Niente altro da toccare.
 * ─────────────────────────────────────────────
 */

export const site = {
  // — Identità —
  firstName: "Daniele",
  lastName: "Fenu",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Junior Web Developer",
  tagline: "Siti Web e Software fatti secondo le esigenze del cliente.",
  intro: "Aiuto le piccole/medie attività a farsi trovare online e crescere.",
  availability: "Disponibile 7/7 dalle 9.00 alle 22.00",
  photo: "", // opzionale: metti "/foto.jpg" in public/ e scrivi qui "/foto.jpg"
  logo: "/logo.png", // il tuo logo DF originale

  // — Contatti —
  phoneDisplay: "+39 391 135 3470",
  phoneHref: "+393911353470", // formato internazionale senza spazi, serve per tel: e vCard
  whatsappNumber: "393911353470", // senza "+" — serve per wa.me
  whatsappMessage:
    "Ciao Daniele, ti ho trovato dal tuo sito. Vorrei farti una domanda sul sito per la mia attività.",
  email: "danielefenu2004@gmail.com",
  website: "https://danielefenu.netlify.app", // ← il tuo URL Netlify finale (serve anche per QR + vCard)
  github: "https://github.com/tuo-username", // TODO: tuo username GitHub
  linkedin:
    "https://www.linkedin.com/in/daniele-fenu-761b5b365?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  instagram: "https://www.instagram.com/danielefenu_",
  instagramLabel: "@danielefenu_",

  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      this.whatsappMessage,
    )}`;
  },

  // — "Mi occupo di creare" —
  services: [
    {
      n: "01",
      title: "Siti vetrina di attività",
      text: "Chi sei, cosa fai, dove sei, come contattarti. Online in pochi giorni, perfetto da mostrare al volo.",
    },
    {
      n: "02",
      title: "Contatti che funzionano",
      text: "WhatsApp in evidenza, tasto chiama, email, mappa. Il cliente ti contatta in un tocco, da telefono.",
    },
    {
      n: "03",
      title: "Ritocchi e assistenza",
      text: "Testi, foto, orari, prezzi: aggiorno io. Piccole modifiche rapide senza che tu debba pensarci.",
    },
    {
      n: "04",
      title: "Card NFC fisiche per social e recensioni",
      text: "Card fisiche con chip NFC: il cliente avvicina il telefono e apre i tuoi social o la pagina delle recensioni Google.",
    },
  ],

  // — Progetti (nascosti per ora, li riaccendiamo quando vuoi) —
  projects: [
    {
      name: "Bar Centrale — sito vetrina",
      tag: "Sito one-page",
      result: "Menu e WhatsApp sempre a portata di tocco.",
      link: "https://example.com",
      linkLabel: "Vedi esempio",
      initials: "BC",
    },
    {
      name: "Idraulico Rossi — pagina contatti",
      tag: "Landing contatti",
      result: "Tasto Chiama + WhatsApp in cima, zero distrazioni.",
      link: "https://example.com",
      linkLabel: "Vedi esempio",
      initials: "IR",
    },
    {
      name: "B&B Il Cortile — mini sito",
      tag: "Mini sito",
      result: "Foto, prezzi, disponibilità via messaggio diretto.",
      link: "https://example.com",
      linkLabel: "Vedi esempio",
      initials: "IC",
    },
  ],

  // — CTA finale —
  finalCta: {
    title: "Hai un'attività? Parliamone 5 minuti.",
    text: "Mandami un messaggio: mi dici cosa fai e ti dico se un sito semplice ti serve davvero.",
    button: "Scrivimi su WhatsApp",
  },

  footerNote: "Fatto a mano con React — niente template.",
} as const;

export type Site = typeof site;
