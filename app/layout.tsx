import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.mainWebsite }],
  publisher: site.name,
  category: "health",
  keywords: [
    "KAMBEST",
    "KAMBEST Tradomedical Services",
    "traditional wellness",
    "herbal health information",
    "Port Harcourt",
    "Lekki",
    "Ajah",
    "Lagos",
    "Nigeria",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "fDOJsJOD8ZPgJSRLgSlH1X_X_PrIKW2JlBpKExOu-VA",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#123526",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NG"
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18455895695"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18455895695');
          `}
        </Script>
        {/* Google Ads conversion: fired on every WhatsApp and phone link click.
            No URL is passed, so links keep their normal behaviour (new tab /
            dialer) instead of being redirected from the event callback. */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-18455895695/bIyvCJS6nLEdEI-9uuBE',
                'value': 1.0,
                'currency': 'USD',
                'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
            document.addEventListener('click', function (e) {
              var link = e.target.closest && e.target.closest('a[href^="https://wa.me/"], a[href^="tel:"]');
              if (link) gtag_report_conversion();
            });
          `}
        </Script>
      </body>
    </html>
  );
}
