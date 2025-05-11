"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
// import Background from "@/components/Background";
// import TransitionFooter from "@/components/TransitionFooter";
import { isMobile, isTablet, isBrowser } from "react-device-detect";
import Header from "@/components/Header";

export default function MentionsLegales() {
//   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      {/* <Background /> */}
      <div
        id="relative overflow-x-hidden overflow-y-auto w-full flex flex-col bg-beige"
        suppressHydrationWarning
      >
        {/* <Photo /> */}
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">1. Éditeur du site</h2>
            <p>Ce site est édité par : {'</dev >'}</p>
            <p>dev</p>
           
            <p>SIRET : 98330171400017</p>
            <p>Directeur de la publication : Amaury PICHAT</p>
            <p>Contact : amaurypichat@gmail.com</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">2. Hébergement</h2>
            <p>Ce site est hébergé par : </p>
            <p>DIGITAL OCEAN</p>
            <p>2 rue de la soie, 75010 PARIS</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">3. Propriété intellectuelle</h2>
            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">4. Protection des données personnelles</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.</p>
            <p>Ces droits peuvent être exercés en nous contactant à l'adresse suivante : amaurypichat@gmail.com</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">5. Cookies</h2>
            <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur ce site, vous acceptez leur utilisation.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">6. Limitation de responsabilité</h2>
            <p>La responsabilité de {'</dev >'} ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">7. Liens hypertextes</h2>
            <p>Le site peut contenir des liens hypertextes vers d'autres sites. {'</dev >'} n'a pas la possibilité de vérifier le contenu des sites ainsi visités et décline donc toute responsabilité de ce fait quant aux risques éventuels de contenus illicites.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">8. Droit applicable et juridiction compétente</h2>
            <p>Tout litige en relation avec l'utilisation du site est soumis au droit français. L'utilisateur reconnaît la compétence exclusive des tribunaux compétents de Lyon.</p>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
