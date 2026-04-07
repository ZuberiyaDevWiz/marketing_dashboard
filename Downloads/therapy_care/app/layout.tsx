// import "./globals.css";
import { Open_Sans, League_Spartan, Poppins } from "next/font/google";

// ✅ Add `display: "swap"` to prevent layout shift and improve loading
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  // metadataBase: new URL("https://therapycareoptions.vercel.app"), // ✅ Fix OG + Twitter image resolution
  // title: "Options Therapy | Baton Rouge, Louisiana",
  // description:
  //   "Your path to better physical wellness starts here. Providing expert physical therapy and recovery solutions in Baton Rouge.",

  // // ✅ Favicon setup (place favicon.ico in /public)
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.ico",
  //   apple: "/favicon.ico",
  // },

  // ✅ Open Graph metadata
  // openGraph: {
  //   title: "Options Therapy | Baton Rouge, Louisiana",
  //   description:
  //     "Your path to better physical wellness starts here. Providing expert physical therapy and recovery solutions in Baton Rouge.",
  //   url: "https://therapycareoptions.vercel.app",
  //   siteName: "Options Therapy",
  //   images: [
  //     {
  //       url: "/images/therapy_logo.png", // ✅ Your preview image in /public/images/
  //       width: 1200,
  //       height: 630,
  //       alt: "Options Therapy Clinic preview image",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },

  // // ✅ Twitter card setup
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Options Therapy | Baton Rouge, Louisiana",
  //   description:
  //     "Your path to better physical wellness starts here. Providing expert physical therapy and recovery solutions in Baton Rouge.",
  //   images: ["/images/therapy_logo.png"],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${leagueSpartan.variable} ${poppins.variable}`}
    >
      <head>
        {/* ✅ Fallback in case Google Fonts can’t be fetched by next/font */}
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Open+Sans:wght@300..800&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
