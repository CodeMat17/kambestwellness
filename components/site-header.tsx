"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const nav = [
  { label: "Home", href: "/#home" },
  { label: "About KAMBEST", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-forest-900/95 text-ivory-50 backdrop-blur supports-[backdrop-filter]:bg-forest-900/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/#home"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="rounded-xl bg-white px-2 py-1 shadow-sm">
            <Image
              src={images.logo}
              alt="KAMBEST"
              loading="eager"
              sizes="104px"
              className="h-9 w-auto"
            />
          </span>
          <span className="hidden text-[0.62rem] font-medium uppercase leading-tight tracking-[0.2em] text-sage-300 sm:block">
            Tradomedical
            <br />
            Services
          </span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-ivory-100/90 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold-400 px-4 py-2 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-500 sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Chat with KAMBEST
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-ivory-50 hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-white/10 bg-forest-900 md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3.5 text-base font-medium text-ivory-100 hover:bg-white/10"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-gold-400 px-4 py-3.5 font-semibold text-forest-950"
            >
              <WhatsAppIcon className="size-5" />
              Chat with KAMBEST
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
