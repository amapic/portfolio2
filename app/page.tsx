"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import CookiesExplain from "@/components/CookiesExplain";
import Hero from "@/components/Hero";
// import News from "@/components/News";

import QuelquesChiffres from "@/components/QuelquesChiffres";
import Transition1 from "@/components/Transition1";
import Projet1 from "@/components/Projet1";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";
import Transition2 from "@/components/Transition2";
import Background from "@/components/Background";
import TransitionFooter from "@/components/TransitionFooter";
// import News from "@/components/News";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      <Background />
      <div
        id="relative overflow-x-none overflow-y-auto w-full flex flex-col bg-beige"
        suppressHydrationWarning
      >
        <Nav />
        <Hero />

        <Projet1
          titre="Site Reactjs et Nextjs utilisant une API REST"
          description="Ce projet montre mes compétences en terme de construction d'API REST côté serveur et client
Côté serveur l'API est construit avec node.js"
          order={1}
          id="projet3"
          img="/pictures/sitePersoAutomatique.png"
        />

        <Projet1
          titre="Création d'un effet de profondeur sur une surface en 3D :"
          description="Techniquement poussé, ce projet m'a permis de maitriser des
                    techniques ambitieuses comme Three.js et WebGl. Le site
                    surprend l'internaute en donnant une impression de
                    profondeur importante"
          id="projet1"
          img="/pictures/sunflower.jpg"
          order={2}
        />
        <Projet1
          titre="Création d'un effet de profondeur sur une surface en 3D :"
          description="Techniquement poussé, ce projet m'a permis de maitriser des
                    techniques ambitieuses comme Three.js et WebGl. Le site
                    surprend l'internaute en donnant une impression de
                    profondeur importante"
          id="projet2"
          order={2}
          img="/pictures/unclick.png"
        />
        <Projet1
          titre="Création d'un effet de profondeur sur une surface en 3D :"
          description="Techniquement poussé, ce projet m'a permis de maitriser des
                    techniques ambitieuses comme Three.js et WebGl. Le site
                    surprend l'internaute en donnant une impression de
                    profondeur importante"
          id="projet2"
          order={2}
          img="/pictures/unclick.png"
        />
        {/* <News /> */}
        {/* <QuelquesChiffres /> */}
        {/* <CookiesExplain /> */}
        {/* <Accroche/> */}
        {/* <Stats /> */}
        {/*   <Concept/>*/}
        {/* <Features/> */}
        {/* <Score/>  */}
        {/* <FAQ/>  */}
        <TransitionFooter />
        <Footer />
      </div>
      {/* // </div> */}
    </>
  );
}
