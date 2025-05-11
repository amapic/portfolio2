"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PolitiqueConfidentialite() {
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
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">1. Introduction</h2>
            <p className="mb-4">La présente politique de confidentialité définit la manière dont la société {'</dev >'} collecte, utilise et protège les informations que vous nous transmettez lorsque vous utilisez notre site internet.</p>
            <p>Dernière mise à jour : 04/05/2025</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">2. Collecte des informations</h2>
            <p className="mb-4">Nous collectons les informations suivantes :</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Informations démographiques</li>
              <li>Autres informations pertinentes pour les enquêtes client et/ou les offres</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">3. Utilisation des informations</h2>
            <p className="mb-4">Ces informations sont recueillies pour les finalités suivantes :</p>
            <ul className="list-disc ml-6 mb-4">
              <li>La gestion de votre compte</li>
              <li>L'amélioration de nos services</li>
              <li>L'envoi de communications marketing (avec votre consentement)</li>
              <li>L'analyse statistique</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">4. Protection des informations</h2>
            <p className="mb-4">Nous mettons en place une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">5. Cookies</h2>
            <p className="mb-4">Notre site utilise des cookies pour améliorer l'expérience utilisateur. Les cookies sont de petits fichiers stockés sur votre ordinateur. Nous utilisons à la fois des cookies de session et des cookies persistants.</p>
            <p className="mb-4">Types de cookies utilisés :</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Cookies nécessaires au fonctionnement du site</li>
              <li>Cookies analytiques</li>
              <li>Cookies de préférences</li>
              <li>Cookies publicitaires (le cas échéant)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">6. Vos droits RGPD</h2>
            <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">7. Partage des informations</h2>
            <p className="mb-4">Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles à des tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site web ou à mener nos activités, tant que ces parties conviennent de garder ces informations confidentielles.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">8. Conservation des données</h2>
            <p className="mb-4">Nous conservons vos données personnelles uniquement le temps nécessaire aux fins pour lesquelles nous les avons collectées, y compris pour satisfaire aux exigences légales, comptables ou de reporting.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-rouge underline-offset-4">9. Contact</h2>
            <p className="mb-4">Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits RGPD, vous pouvez nous contacter :</p>
            <p>Email : amaury.pichat@gmail.com</p>
            {/* <p>Adresse : [Adresse postale]</p> */}
            <p>Téléphone : 06 88 91 80 19</p>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
