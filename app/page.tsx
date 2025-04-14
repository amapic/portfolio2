"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/Hero";

import Projet1 from "@/components/Projet1";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";
// import Transition2 from "@/components/Transition2";
import Background from "@/components/Background";
import TransitionFooter from "@/components/TransitionFooter";

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
          technos={["Reactjs", "API REST" ]}
          url="https://site-perso-exemple.vercel.app/"
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
          technos ={["Three.js", "API REST" ]}
          url="https://amaurypichat.fr/slide/index.html"
        />
        <Projet1
          titre="Site reactjs responsive"
          description="J'ai réalisé ce projet afin de valider mes compétences de base concernant React.js"
          id="projet2"
          order={1}
          img="/pictures/unclick.png"
          technos ={["Reactjs", "WebGL" ]}
          url="https://unclick-lac.vercel.app/"
        />
        <Projet1
          titre="Création d'un site entièrmement fait avec une animation de particule "
          description="Techniquement poussé, ce projet m'a permis de maitriser des
                    techniques ambitieuses comme Three.js et WebGl. Le site
                    surprend l'internaute en donnant une impression de
                    profondeur importante"
          id="projet2"
          order={2}
          img="/pictures/uconsulting.png"
          technos ={["Three.js", "WebGL" ]}
          url="https://amaurypichat.fr/slide/index.html"
        />

       <Projet1
          titre="Création d'un site entièremement fait avec une animation de particule"
          description="Techniquement poussé, ce projet m'a permis de maitriser des
                    techniques ambitieuses comme Three.js et WebGl. Le site
                    surprend l'internaute en donnant une impression de
                    profondeur importante"
          id="projet2"
          order={1}
          img="/pictures/groupeleonie.png"
          technos ={["Three.js", "Reactjs" ]}
        />

        <TransitionFooter />
        <Footer />
      </div>
    </>
  );
}
