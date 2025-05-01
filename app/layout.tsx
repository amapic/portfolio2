// "use client";

import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Amaury PICHAT",
  description: "développeur de site web",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr"
    style={{
    }}
    >
      <head>
        {/* Favicon de base */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Pour iOS */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.webp" />
        
        {/* Pour Android/Chrome */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.webp" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.webp" />
        
        {/* Manifest pour PWA 
        <link rel="manifest" href="/site.webmanifest" />*/}
      </head>
      {/* [#fff1e6 */}
      <body className={`bg-beige `}>
        {/* <Suspense fallback={<div>Loading...</div>}> <Nav /></Suspense> */}
       
        <main
          role="main"

        >
          {children}
        </main>
      
      </body>
    </html>
  );
}
