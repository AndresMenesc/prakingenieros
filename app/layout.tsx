import type { Metadata } from "next";
import { Toaster } from "@/app/components/ui/toaster";
import { Toaster as Sonner } from "@/app/components/ui/sonner";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import { QueryProvider } from "@/app/providers/query-provider";
import "./globals.css";

// Force all routes to be dynamically rendered
export const dynamic = "force-dynamic";
export const dynamicParams = true;

export const metadata: Metadata = {
  title: "PRAK Ingenieros - Consultoría Ambiental y Marketing Digital",

  description:
    "Especialistas en consultoría ambiental, sostenibilidad y marketing digital en Colombia. Ofrecemos planes de gestión RCD, certificaciones ambientales y estrategias publicitarias digitales.",

  keywords:
    "consultoría ambiental, sostenibilidad, marketing digital, Colombia, RCD, ISO 14001, Google Ads, Meta Ads",

  authors: [{ name: "PRAK Ingenieros S.A.S" }],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "PRAK Ingenieros - Consultoría Ambiental y Marketing Digital",

    description:
      "Especialistas en consultoría ambiental, sostenibilidad y planes de gestión RCD para constructoras y empresas en Colombia.",

    type: "website",

    url: "https://prakingenieros.com",

    siteName: "PRAK Ingenieros",

    locale: "es_CO",

    images: [
      {
        url: "https://prakingenieros.com/logomain.png",
        width: 1200,
        height: 630,
        alt: "PRAK Ingenieros",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "PRAK Ingenieros",

    description:
      "Consultoría ambiental, sostenibilidad y marketing digital.",

    images: ["https://prakingenieros.com/logomain.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N988HW77');
            `,
          }}
        />
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N988HW77"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <QueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
