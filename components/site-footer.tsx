import Image from "next/image";
import { ExternalIcon } from "./icons";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest-950 text-ivory-100/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-white px-2.5 py-1.5">
              <Image
                src={images.logo}
                alt="KAMBEST"
                sizes="140px"
                className="h-12 w-auto"
              />
            </span>
            <span className="font-display text-lg font-semibold leading-snug text-ivory-50">
              Tradomedical Services
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Information on this page is general and is not a substitute for
            professional medical advice, diagnosis or treatment.
          </p>
          <a
            href={site.mainWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-sage-300/40 px-4 py-2.5 text-sm font-semibold text-ivory-50 transition-colors hover:bg-white/10"
          >
            Visit the main KAMBEST website
            <ExternalIcon className="size-4" />
          </a>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
            Contact
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              WhatsApp:{" "}
              <a href={site.whatsapp.href} className="font-medium text-ivory-50 hover:underline">
                {site.whatsapp.display}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.href}>
                {p.label}:{" "}
                <a href={p.href} className="font-medium text-ivory-50 hover:underline">
                  {p.display}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
            Locations
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            {site.locations.map((l) => (
              <li key={l.city}>
                <span className="block font-medium text-ivory-50">{l.city}</span>
                {l.address}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 pb-24 pt-6 text-xs md:pb-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © 2026 {site.name}. Health information last updated{" "}
            {site.contentUpdated}.
          </p>
        
        </div>
      </div>
    </footer>
  );
}
