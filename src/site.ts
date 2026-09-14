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
  tagline: "Siti semplici e veloci per piccole attività.",
  intro:
    "Aiuto bar, artigiani, negozi e professionisti a farsi trovare online e ricevere più contatti da telefono.",
  location: "Italia · lavoro anche da remoto",
  availability: "Disponibile per nuovi progetti",
  photo: "", // opzionale: metti "/foto.jpg" in public/ e scrivi qui "/foto.jpg"

  // — Contatti (PLACEHOLDER: sostituisci con i tuoi) —
  phoneDisplay: "+39 333 000 0000",
  phoneHref: "+393330000000", // formato internazionale senza spazi, serve per tel: e vCard
  whatsappNumber: "393330000000", // senza "+" — serve per wa.me
  whatsappMessage:
    "Ciao Daniele, ti ho trovato dal tuo sito. Vorrei farti una domanda sul sito per la mia attività.",
  email: "ciao@danielefenu.it",
  website: "https://danielefenu.netlify.app", // ← il tuo URL Netlify finale (serve anche per QR + vCard)
  github: "https://github.com/tuo-username",
  linkedin: "https://linkedin.com/in/tuo-username",
  instagram: "", // lascialo vuoto se non vuoi mostrarlo

  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      this.whatsappMessage,
    )}`;
  },

  // — "Cosa faccio" —
  services: [
    {
      n: "01",
      title: "Sito vetrina in una pagina",
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
  ],

  // — Progetti (screenshot placeholder in CSS, nessun file da creare) —
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
