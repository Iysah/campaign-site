import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConsentBanner from "./components/ConsentBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NATAT2027 – No Alternative: APC's Path to Victory 2027",
  description:
    "A unified, empowering digital hub for the APC's Presidential and Gubernatorial campaigns in Benue State, Nigeria. Join the movement for 2027 victory!",
  icons: {
    icon: "/natat.png",
  },
  openGraph: {
    title: "NATAT2027 – No Alternative",
    description:
      "APC's vision for Benue & beyond. Unite for progress and prosperity.",
    url: "https://natat2027.example", // placeholder
    siteName: "NATAT2027",
    images: [{ url: "/natat.png", width: 512, height: 512, alt: "NATAT2027" }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NATAT2027 – No Alternative",
    description:
      "APC's vision for Benue & beyond. Unite for progress and prosperity.",
    images: ["/natat.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "APC NATAT2027",
    url: "https://natat2027.example",
    logo: "/natat.png",
    sameAs: [
      "https://twitter.com/apc_natat2027",
      "https://facebook.com/apc_natat2027",
      "https://instagram.com/apc_natat2027",
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${openSans.variable} antialiased bg-primary-contrast text-gray-900`}> 
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + '${process.env.NEXT_PUBLIC_GTM_ID || ''}' + dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || ''}');
          `}
        </Script>
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || ''}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          {/* GDPR Cookie Consent */}
          <ConsentBanner />
        </div>
      </body>
    </html>
  );
}
