import Footer from "@components/Footer";
import Header from "@components/Header";
import { LenisWrapper } from "@components/LenisWrapper";
import { Analytics } from "@vercel/analytics/react";
import "@styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mediumDesktop:w-[90vw] ultraDesktop:w-[70vw] ultraLargDesktop:w-[60vw] mx-auto flex min-h-screen w-full max-w-[1600px] flex-col items-start gap-10 px-4 pt-2 lg:px-14 lg:pt-8">
        <LenisWrapper />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
