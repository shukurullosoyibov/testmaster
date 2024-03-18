import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/layouts";
import { Analytics, Phone } from "@/components";
import { keywords } from "@/meta";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

import { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: "Almuda Company - Reliable, honest and high quality accounting services",
    template: "%s - Almuda Company - Reliable, honest and high quality accounting services, Audit Services, Start Business, Small Business Accounting, accounting website, Business in the Uzbekistan  ",
  },
  description:
    "Quality, reliable and honest accounting services for your business. 👌 Our team consists of professionals. 👩‍💻 Accounting services for small business,Audit Services,  business registration, advertising business and accounting problems.  Accounting services in Tashkent, accounting website",
  generator: "Next.js",
  abstract:
  "Quality, reliable and honest accounting services for your business. 👌 Our team consists of professionals. 👩‍💻 Accounting services for small business,Audit Services,  business registration, advertising business and accounting problems.  Accounting services in Tashkent, accounting website",
  applicationName: "Almuda Company",
  creator: "Millenium Company",
  manifest: `${baseUrl}/manifest.webmanifest`,
  publisher: "Hostinger",
  keywords: keywords,
  metadataBase: new URL(`${baseUrl}`),
  alternates: {
    canonical: `${baseUrl}`,
    languages: {
      en: `${baseUrl}`,
    },
  },
  authors: [
    {
      name: "Millenium Company",
      url: "https://milleniumcompany.tech",
    },
  ],
  verification: {
    google: `${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}`,
    yandex: `${process.env.NEXT_PUBLIC_YANDEX_VERIFICATION}`,
    me: `${baseUrl}`,
  },
  referrer: "origin",
  openGraph: {
    type: "website",
    title: "Almuda Company - Reliable, honest and high quality accounting services, Audit Services, Start Business, Small Business Accounting, accounting website, Business in the Uzbekistan  ",
    countryName: "Uzbekistan",
    description:
    "Quality, reliable and honest accounting services for your business. 👌 Our team consists of professionals. 👩‍💻 Accounting services for small business,Audit Services,  business registration, advertising business and accounting problems.  Accounting services in Tashkent, accounting website",
    siteName: "almudacompany.com",
    url: `${baseUrl}`,
    emails: [
      "info@almudacompany.com",
      "xasanof17@gmail.com",
      "oisha.151115@gmail.com",
      "info@almuda.uz",
    ],
    phoneNumbers: ["+998900198505", "+998900186644"],
    images: [
      {
        url: `/og.png`,
        width: 1920,
        height: 400,
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    shortcut: `/icon.svg`,
    icon: `/favicon.ico`,
    apple: `/apple-icon.svg`,
  },
  assets: `${baseUrl}/assets`,
  twitter: {
    card: "summary_large_image",
    description:
      "Quality, reliable and honest accounting services for your business. 👌 Start your own business in Uzbekistan. 👩‍💻 Contact Almuda Company for this",
    site: `${baseUrl}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" prefix="og:https://ogp.me/ns#" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            style={{ display: "none", visibility: "hidden" }}
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <Phone />
        <Footer />
        <Toaster position="top-right" reverseOrder gutter={1.5} />
        <Analytics />
      </body>
    </html>
  );
}
