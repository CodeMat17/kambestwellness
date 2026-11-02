import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowRightIcon,
  ChatQuestionIcon,
  ChevronDownIcon,
  ClockIcon,
  ExternalIcon,
  HeartPulseIcon,
  InfoIcon,
  LabelIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  SproutIcon,
  StethoscopeIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { healthTopics, type HealthTopic } from "@/lib/health-topics";
import { images } from "@/lib/images";
import { mapsUrl, site } from "@/lib/site";

const topicIcons: Record<HealthTopic["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  heart: HeartPulseIcon,
  stethoscope: StethoscopeIcon,
  label: LabelIcon,
  chat: ChatQuestionIcon,
  sprout: SproutIcon,
};

const phoneNumber = (href: string) => href.replace("tel:", "");

// Structured data for search engines (schema.org JSON-LD).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      logo: `${site.url}${images.logo.src}`,
      sameAs: [site.mainWebsite],
      founder: { "@type": "Person", name: "Orji Nkemdilim Moses" },
      contactPoint: site.phones.map((p) => ({
        "@type": "ContactPoint",
        telephone: phoneNumber(p.href),
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: "en",
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en-NG",
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: "en-NG",
      dateModified: site.contentUpdatedIso,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
      primaryImageOfPage: `${site.url}/opengraph-image.jpg`,
    },
    ...site.locations.map((l) => ({
      "@type": "LocalBusiness",
      "@id": `${site.url}/#${l.locality.toLowerCase().replace(/[^a-z]+/g, "-")}`,
      name: `${site.name} — ${l.city}`,
      parentOrganization: { "@id": `${site.url}/#organization` },
      url: site.url,
      image: `${site.url}/opengraph-image.jpg`,
      telephone: phoneNumber(site.phones[0].href),
      hasMap: mapsUrl(l.mapQuery),
      address: {
        "@type": "PostalAddress",
        streetAddress: l.streetAddress,
        addressLocality: l.locality,
        addressRegion: l.state,
        addressCountry: "NG",
      },
    })),
  ],
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
      <span className="h-px w-6 bg-gold-500" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden bg-forest-900 text-ivory-50 md:flex md:min-h-[calc(100svh-4rem)] md:items-center"
        >
          <Image
            src={images.mortarAndBottles}
            alt=""
            fill
            fetchPriority="high"
            loading="eager"
            quality={50}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-forest-950/95 via-forest-900/85 to-forest-900/60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 hidden size-112 rounded-full bg-forest-600/40 blur-3xl md:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-24 hidden size-96 rounded-full bg-gold-500/15 blur-3xl md:block"
          />

          <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 md:grid-cols-[1.25fr_1fr] md:items-center md:py-12 md:short:py-8">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-sage-300/30 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-sage-100">
                <span className="size-1.5 rounded-full bg-gold-400" />
                {site.name}
              </p>

              <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-[clamp(2.75rem,min(5vw,8.5svh),4.5rem)] md:short:mt-5">
                Traditional Wellness.
                <span className="block text-gold-400">Informed Choices.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory-100/90 md:short:mt-4">
                Explore general health information and learn about responsible
                approaches to wellbeing.
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-sage-300">
                KAMBEST Tradomedical Services is committed to clear
                communication and helping visitors find relevant services
                about our organisation and its services.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:short:mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-semibold text-forest-950 shadow-lg shadow-black/20 transition hover:bg-gold-500"
                >
                  Contact KAMBEST
                  <ArrowRightIcon className="size-5" />
                </a>
             
              </div>
            </div>

            {/* Quick-contact card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 sm:p-8 md:backdrop-blur md:short:p-6">
              <p className="font-display text-2xl font-semibold">
                Speak with our team
              </p>
              <p className="mt-2 text-sm leading-relaxed text-sage-300">
                For general enquiries about our organisation, locations and
                services.
              </p>

              <div className="mt-6 space-y-3 md:short:mt-4">
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-whatsapp px-4 py-3.5 text-white transition hover:brightness-110"
                >
                  <WhatsAppIcon className="size-7 shrink-0" />
                  <span>
                    <span className="block text-sm font-semibold">Chat with KAMBEST</span>
                    <span className="block text-xs text-white">
                      WhatsApp · {site.whatsapp.display}
                    </span>
                  </span>
                </a>
                {site.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="flex items-center gap-4 rounded-2xl bg-ivory-50 px-4 py-3.5 text-forest-900 transition hover:bg-ivory-100"
                  >
                    <PhoneIcon className="size-6 shrink-0" />
                    <span>
                      <span className="block text-sm font-semibold">
                        {p.label === "Call" ? "Call KAMBEST" : "Call alternative line"}
                      </span>
                      <span className="block text-xs text-charcoal-soft">{p.display}</span>
                    </span>
                  </a>
                ))}
              </div>

              <ul className="mt-6 grid gap-2 border-t border-white/10 pt-5 text-sm text-ivory-100/85 md:short:mt-4 md:short:pt-4">
                {site.locations.map((l) => (
                  <li key={l.city} className="flex items-center gap-2">
                    <MapPinIcon className="size-4 shrink-0 text-gold-400" />
                    {l.city}, {l.state}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Values strip */}
        <section aria-label="Our approach" className="border-b border-ivory-200 bg-ivory-100">
          <ul className="mx-auto grid max-w-6xl gap-px px-4 sm:grid-cols-3 sm:px-6">
            {[
              {
                icon: InfoIcon,
                title: "Clear information",
                text: "Balanced, dated health content with sources.",
              },
              {
                icon: ShieldIcon,
                title: "Responsible approach",
                text: "We encourage consulting qualified professionals.",
              },
              {
                icon: MapPinIcon,
                title: "Real locations",
                text: "Visit us in Port Harcourt or Lekki/Ajah.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4 py-6 sm:px-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-forest-800 text-gold-400">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block font-semibold text-forest-900">{title}</span>
                  <span className="block text-sm text-charcoal-soft">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Eyebrow>About us</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest-900 sm:text-4xl">
                About KAMBEST Tradomedical Services
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-charcoal">
                KAMBEST Tradomedical Services is built on respect for
                traditional herbal knowledge and a commitment to careful,
                responsible practice. We work with carefully sourced herbs and
                aim to give clear, honest information and services about every product we
                offer — without shortcuts or exaggerated promises.
              </p>

              <div className="mt-6 border-l-2 border-gold-500 pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-500">
                  Our founder
                </p>
                <p className="mt-2 leading-relaxed text-charcoal">
                  <span className="font-semibold text-forest-900">
                    Orji Nkemdilim Moses
                  </span>{" "}
                  — popularly known as KAMBEST — is a respected entrepreneur
                  and the founder of KAMBEST Health Solutions, a health and
                  wellness brand serving customers across Nigeria.
                </p>
              </div>

              <p className="mt-6 leading-relaxed text-charcoal-soft">
                Today, the KAMBEST name stands for consistency, integrity and
                genuine care — built one trusted relationship at a time. We
                encourage visitors to consult qualified healthcare
                professionals about medical concerns, and our team can be
                reached by WhatsApp, telephone, or in person in Port Harcourt
                and Lekki/Ajah.
              </p>
              <a
                href={site.mainWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-forest-700 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-forest-900"
              >
                Visit the main KAMBEST website
                <ExternalIcon className="size-4" />
              </a>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-sage-100 p-6 sm:p-8">
                <Image
                  src={images.naturopathy}
                  alt="Wooden mortar of capsules with fresh herbs and amber bottles"
                  placeholder="blur"
                  sizes="(min-width: 1152px) 464px, (min-width: 768px) 40vw, calc(100vw - 5rem)"
                  className="mb-4 aspect-4/3 w-full rounded-2xl object-cover shadow-sm"
                />
                <dl className="grid grid-cols-2 gap-4">
                  {[
                    { k: "Locations", v: "2", note: "Rivers & Lagos" },
                    { k: "Ways to reach us", v: "3", note: "WhatsApp & phone" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-2xl bg-ivory-50 p-5 shadow-sm">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-sage-500">
                        {s.k}
                      </dt>
                      <dd className="mt-1 font-display text-4xl font-semibold text-forest-800">
                        {s.v}
                      </dd>
                      <dd className="text-sm text-charcoal-soft">{s.note}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 rounded-2xl bg-forest-800 p-5 text-ivory-50">
                  <p className="font-display text-xl font-semibold">
                    Our commitment
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-sage-100">
                    Clear communication, honest information, and pointing
                    visitors to qualified professionals for medical
                    decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsible information notice */}
        <section aria-labelledby="informed-decisions" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="relative overflow-hidden rounded-3xl border-l-4 border-gold-500 bg-sage-100 p-6 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-forest-800 text-gold-400">
                <ShieldIcon className="size-7" />
              </span>
              <div>
                <h2
                  id="informed-decisions"
                  className="font-display text-2xl font-semibold text-forest-900 sm:text-3xl"
                >
                  Making Informed Health Decisions
                </h2>
                <p className="mt-4 max-w-3xl leading-relaxed text-charcoal">
                  Health information is not a substitute for professional
                  medical advice, diagnosis or treatment. Please consult a
                  qualified healthcare professional about symptoms, medical
                  conditions, medicines and treatment decisions.
                </p>
             
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="leaf-pattern bg-forest-900 py-16 text-ivory-50 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                <span className="h-px w-6 bg-gold-400" />
                Get in touch
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
                Contact KAMBEST
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-sage-100">
                For general enquiries about KAMBEST Tradomedical Services —
                our organisation, locations, opening arrangements and
                services — contact our team.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-8 rounded-3xl bg-whatsapp p-6 text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:brightness-110 sm:p-7"
              >
                <WhatsAppIcon className="size-10" />
                <span>
                  <span className="block text-sm font-medium text-white">WhatsApp</span>
                  <span className="block font-display text-2xl font-semibold">
                    {site.whatsapp.display}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 font-semibold">
                    Chat with KAMBEST
                    <ArrowRightIcon className="size-5 transition group-hover:translate-x-1" />
                  </span>
                </span>
              </a>
              {site.phones.map((p, i) => (
                <a
                  key={p.href}
                  href={p.href}
                  className={`group flex flex-col justify-between gap-8 rounded-3xl p-6 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 sm:p-7 ${
                    i === 0
                      ? "bg-gold-400 text-forest-950 hover:bg-gold-500"
                      : "border border-white/15 bg-white/5 text-ivory-50 hover:bg-white/10"
                  }`}
                >
                  <PhoneIcon className="size-10" />
                  <span>
                    <span className={`block text-sm font-medium ${i === 0 ? "text-forest-900" : "text-sage-300"}`}>
                      {p.label}
                    </span>
                    <span className="block font-display text-2xl font-semibold">{p.display}</span>
                    <span className="mt-4 inline-flex items-center gap-2 font-semibold">
                      Call KAMBEST
                      <ArrowRightIcon className="size-5 transition group-hover:translate-x-1" />
                    </span>
                  </span>
                </a>
              ))}
            </div>

           
          </div>
        </section>

        {/* Locations */}
        <section id="locations" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <Eyebrow>Locations</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            Visit Us
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {site.locations.map((l) => (
              <article
                key={l.city}
                className="flex flex-col rounded-3xl border border-ivory-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-2xl bg-sage-100 text-forest-700">
                    <MapPinIcon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-forest-900">
                      {l.city}
                    </h3>
                    <p className="text-sm text-sage-500">{l.state}</p>
                  </div>
                </div>
                <p className="mt-5 flex-1 leading-relaxed text-charcoal">{l.address}</p>
                <a
                  href={mapsUrl(l.mapQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-5 py-3 text-sm font-semibold text-ivory-50 transition hover:bg-forest-900 sm:self-start"
                >
                  Get directions
                  <ExternalIcon className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Main website link */}
        <section aria-label="Main website" className="px-4 pb-16 sm:px-6 md:pb-24">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-ivory-200 p-6 sm:p-10 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl font-display text-xl leading-snug text-forest-900 sm:text-2xl">
              Visit the main KAMBEST website for further information about the
              organisation and its services.
            </p>
            <a
              href={site.mainWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-forest-800 px-6 py-3.5 font-semibold text-ivory-50 transition hover:bg-forest-900"
            >
              Visit the main KAMBEST website
              <ExternalIcon className="size-4" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Mobile contact bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ivory-200 bg-ivory-50 p-3 md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </a>
          <a
            href={site.phones[0].href}
            className="flex items-center justify-center gap-2 rounded-full bg-forest-800 py-3 text-sm font-semibold text-ivory-50"
          >
            <PhoneIcon className="size-5" />
            Call KAMBEST
          </a>
        </div>
      </div>
    </>
  );
}
