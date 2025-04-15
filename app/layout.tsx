// "use client";

import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "sites webs Amaury PICHAT",
  description: "TODO",
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
        <link rel="icon" href="/caca.ico" />
        
        {/* Pour iOS */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Pour Android/Chrome */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest pour PWA */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      {/* [#fff1e6 */}
      <body className={`bg-beige `}>
        {/* <Suspense fallback={<div>Loading...</div>}> <Nav /></Suspense> */}
       
        <main
          role="main"
          // id="contenu-principal"
          // className={"flex flex-col mt-20"}
        >
          {children}
        </main>
      
      </body>
    </html>
  );
}
