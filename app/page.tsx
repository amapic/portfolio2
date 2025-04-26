"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Hero from "@/components/Hero";

import Projet from "@/components/Projet";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import TransitionFooter from "@/components/TransitionFooter";

function FootPrint({ className, oula }: { className: string; oula?: any }) {
  return (
    <div className={className} ref={oula}>
      <svg
        width="256.000000pt"
        height="256.000000pt"
        viewBox="0 0 256.000000 256.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
          fill="hsl(39, 100%, 89%)"
          stroke="none"
        >
          <path
            d="M1142 2533 c-56 -19 -157 -114 -201 -187 -44 -73 -96 -226 -118 -346
-26 -146 -24 -398 5 -515 38 -153 103 -345 127 -373 l22 -26 90 12 c116 15
293 15 408 0 50 -7 115 -13 145 -13 49 0 56 3 67 26 16 33 49 227 63 368 44
451 -63 824 -285 993 -97 74 -221 97 -323 61z"
          />
          <path
            d="M931 743 c-28 -106 -41 -216 -41 -339 0 -161 18 -221 87 -295 63 -67
125 -92 246 -97 90 -4 101 -2 152 22 95 47 169 153 199 288 18 77 36 237 36
316 l0 58 -327 42 c-181 23 -331 42 -335 42 -4 0 -12 -17 -17 -37z"
          />
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation une seule fois
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref7, inView: inView7 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref8, inView: inView8 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref9, inView: inView9 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref10, inView: inView10 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref11, inView: inView11 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref12, inView: inView12 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref13, inView: inView13 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref14, inView: inView14 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref15, inView: inView15 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  const { ref: ref16, inView: inView16 } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Déclenche quand 10% est visible
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="relative overflow-hidden w-full">
      <Background />
      <div
        id="relative overflow-x-hidden overflow-y-auto w-full flex flex-col bg-beige"
        suppressHydrationWarning
      >
        <Nav />
        <Hero />

        <FootPrint
          oula={ref}
          className={`absolute hidden xl:block h-sm-hidden top-[168vh] left-[-50px] z-[100] scale-[0.25] rotate-90 transition-opacity delay-[700ms] duration-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        />
        <FootPrint
          oula={ref2}
          className={` absolute hidden xl:block h-sm-hidden top-[calc(168vh-30px)] left-[75px] z-[100] scale-x-[0.25] -rotate-90 scale-y-[-0.25] transition-opacity delay-[1200ms] duration-100 ${
            inView2 ? "opacity-100" : "opacity-0"
          }`}
        />

        <FootPrint
          oula={ref3}
          className={`absolute hidden xl:block h-sm-hidden top-[169vh] left-[200px] z-[200] scale-[0.25] rotate-90 transition-opacity delay-[1700ms] duration-100 ${
            inView3 ? "opacity-100" : "opacity-0"
          }`}
        />
        <FootPrint
          oula={ref4}
          className={`absolute hidden xl:block h-sm-hidden top-[calc(169vh-30px)] left-[325px] z-[100] scale-x-[0.25] -rotate-[80deg] scale-y-[-0.25] transition-opacity delay-[2200ms] duration-100 ${
            inView4 ? "opacity-100" : "opacity-0"
          }`}
        />

        <FootPrint
          oula={ref5}
          className={` absolute hidden xl:block h-sm-hidden top-[171vh] left-[450px] z-[100] scale-[0.25] rotate-[105deg] transition-opacity delay-[2700ms] duration-100 ${
            inView5 ? "opacity-100" : "opacity-0"
          }`}
        />
        <FootPrint
          oula={ref6}
          className={` absolute hidden xl:block h-sm-hidden  top-[calc(171vh-30px)] left-[575px] z-[100] scale-x-[0.25] -rotate-[77deg] scale-y-[-0.25] transition-opacity delay-[3200ms] duration-100 ${
            inView6 ? "opacity-100" : "opacity-0"
          }`}
        />

        <FootPrint
          oula={ref7}
          className={`absolute hidden xl:block h-sm-hidden  top-[175vh] left-[700px] z-[100] scale-[0.25] rotate-[100deg] transition-opacity delay-[3700ms] duration-100 ${
            inView7 ? "opacity-100" : "opacity-0"
          }`}
        />
        <FootPrint
          oula={ref8}
          className={`absolute hidden xl:block h-sm-hidden  top-[calc(175vh-30px)] left-[825px] z-[100] scale-x-[0.25] -rotate-[77deg] scale-y-[-0.25] transition-opacity delay-[4200ms] duration-100 ${
            inView8 ? "opacity-100" : "opacity-0"
          }`}
        />

        <FootPrint
          oula={ref9}
          className={`absolute hidden xl:block h-sm-hidden top-[179vh] left-[950px] z-[100] scale-[0.25] rotate-[100deg] transition-opacity delay-[4700ms] duration-100 ${
            inView9 ? "opacity-100" : "opacity-0"
          }`}
        />
        <FootPrint
          oula={ref10}
          className={`absolute hidden xl:block h-sm-hidden top-[calc(179vh-30px)] left-[1075px] z-[100] scale-x-[0.25] -rotate-[77deg] scale-y-[-0.25] transition-opacity delay-[5200ms] duration-100 ${
            inView10 ? "opacity-100" : "opacity-0"
          }`}
        />

        <FootPrint
          oula={ref11}
          className={`absolute hidden xl:block h-sm-hidden top-[183vh] left-[1200px] z-[100] scale-[0.25] rotate-[95deg] transition-opacity delay-[5700ms] duration-100 ${
            inView11 ? "opacity-100" : "opacity-0"
          }`}
        />
        <FootPrint
          oula={ref12}
          className={`absolute hidden xl:block h-sm-hidden top-[calc(183vh-30px)] left-[1325px] z-[100] scale-x-[0.25] -rotate-[82deg] scale-y-[-0.25] transition-opacity delay-[6200ms] duration-100 ${
            inView12 ? "opacity-100" : "opacity-0"
          }`}
        />

        <FootPrint
          oula={ref13}
          className={`absolute hidden xl:block h-sm-hidden top-[186vh] left-[1450px] z-[100] scale-[0.25] rotate-[92deg] transition-opacity delay-[6700ms] duration-100 ${
            inView13 ? "opacity-100" : "opacity-0"
          }`}
        />
        <FootPrint
          oula={ref14}
          className={`absolute hidden xl:block h-sm-hidden top-[calc(186vh-30px)] left-[1575px] z-[100] scale-x-[0.25] -rotate-[84deg] scale-y-[-0.25] transition-opacity delay-[7200ms] duration-100 ${
            inView14 ? "opacity-100" : "opacity-0"
          }`}
        />

        <FootPrint
          oula={ref15}
          className={`absolute hidden xl:block h-sm-hidden top-[189vh] left-[1700px] z-[100] scale-[0.25] rotate-[92deg] transition-opacity delay-[7700ms] duration-100 ${
            inView15 ? "opacity-100" : "opacity-0"
          }`}
        />
        <FootPrint oula={ref16} className={`absolute hidden xl:block h-sm-hidden top-[calc(189vh-30px)] left-[1825px] z-[100] scale-x-[0.25] -rotate-[84deg] scale-y-[-0.25] transition-opacity delay-[8200ms] duration-100 ${inView16 ? 'opacity-100' : 'opacity-0'}`} />

        <Projet
          titre="Mise en mouvement d'une surface en 3D"
          description="Création d'un effet de profondeur original"
          id="projet1"
          img="/pictures/sunflower.jpg"
          order={2}
          technos={["Three.js", "API REST"]}
          url="https://amaurypichat.fr/slide/index.html"
        />

        <Projet
          titre="Animation de particules"
          description="Des particules s'animent au fur et à mesure que l'utilisateur parcoure le site"
          id="projet2"
          order={2}
          img="/pictures/uconsulting.png"
          technos={["Three.js", "WebGL"]}
          url="https://u-consulting.vercel.app/"
        />

        <Projet
          titre="Création d'un site corporate"
          description="Des couleurs douces illustrent le site du groupe  Leonie"
          id="projet2"
          order={1}
          img="/pictures/groupeleonie.png"
          technos={["Three.js", "Reactjs"]}
          url="https://groupeleonie.vercel.app/"
        />

        <Projet
          titre="Site utilisant une API REST"
          description="Canevas de site personnalisable"
          order={2}
          id="projet3"
          img="/pictures/sitePersoAutomatique.png"
          technos={["Reactjs", "API REST"]}
          url="https://site-perso-exemple.vercel.app/"
        />
        <Projet
          titre="Site reactjs responsive"
          description="Projet simple avec un design axé tech"
          id="projet2"
          order={1}
          img="/pictures/unclick.png"
          technos={["Reactjs", "WebGL"]}
          url="https://unclick-lac.vercel.app/"
          separateur={false}
        />

        <TransitionFooter />
        <Footer />
      </div>
    </div>
  );
}
