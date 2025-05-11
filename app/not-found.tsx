"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Quatrecentquatre() {


  return (
    <div className="relative overflow-hidden w-full">
      {/* <Background /> */}
      <div
        id="relative overflow-x-hidden overflow-y-auto w-full flex flex-col bg-beige"
        suppressHydrationWarning
      >
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-4xl">
         
          <h1 className="text-6xl font-bold mb-4 underline decoration-rouge underline-offset-4">404</h1>
          <h2 className="text-2xl mb-8">Page non trouvée</h2>

          <div className="text-center mb-8">
            <p className="mb-4">
              Oups ! La page que vous recherchez n'existe pas.
            </p>
            <p>Elle a peut-être été déplacée ou supprimée.</p>
          </div>

          <Link
            href="/"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Retour à l'accueil
          </Link>
        </main>

        {/* <Footer /> */}
      </div>
    </div>
  );
}
