"use client";
import Image from "next/image";
import Link from "next/link";
import datas_picture from "/public/pictures/datas_picture.png";
import { ContainerHero } from "@/components/ui/Container";
import Border from "@/components/ui/Border";
import { useRef } from "react";
export default function Hero() {
  const ref = useRef(null);
  return (
    <>
      <section id="hero" className="px-4 h-sm:mt-4">
        <ContainerHero>
          <div
            id="blacn"
            className="lg:absolute rotate-1 lg:top-[2rem] lg:bottom-[80px]  lg:mt-0 lg:ml-[50%] lg:w-[calc(50%+50px)] bg-white   z-[50] relative inset-x-0 right-6 mx-auto ml-auto mt-12  "
          >
            {/* <div> */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Définition du pattern */}
                <defs>
                  <pattern 
                    id="stripes" 
                    width="10" 
                    height="10" 
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(45)"
                  >
                    <line 
                      x1="0" 
                      y1="0" 
                      x2="0" 
                      y2="10" 
                      stroke="#f9e8e0" 
                      strokeWidth="10"
                    />
                  </pattern>
                </defs>

                {/* Rectangle avec le pattern */}
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill="url(#stripes)"
                />
                {/* Cercle extérieur */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="#d2402d"
                  stroke="#d2402d"
                  strokeWidth="2"
                />

                {/* Cercle du milieu */}
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="2"
                />

                {/* Cercle intérieur */}
                <circle
                  cx="50"
                  cy="50"
                  r="15"
                  fill="#d2402d"
                  stroke="#d2402d"
                  // strokeWidth="2"
                />
              </svg>
            {/* </div> */}
          </div>
          <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <h2
              className={`text-texteBlack mt-10 text-balance text-5xl font-bold md:text-6xl xl:text-6xl`}
            >
              Amaury PICHAT
            </h2>
            <p className="text-texteBlack text-body mt-8">
              Développeur front-end React et Next.js
              <br />
              Vous avez accès à différentes informations, comme une note
              d'accessibilité de vos données allant de 1 à 5. 5 étant la
              meilleure note. Ou les adresses mail et page du site pour accéder
              à vos données: les récupérer ou faire une demande de suppression.
              <br />
              <br />
              Pour quelles raisons ?
              <br />
              Les données sont les nouvelles pépites d'or. Elles permettent
              d'apprendre énormément de choses sur vous&nbsp;:
            </p>
          </div>
          <Link
            ref={ref}
            href="/search"
            className="mt-4 relative w-1/2 mx-auto text-texteBlack inline-flex items-center justify-center bg-beige   z-50 pb-4 pt-3 px-8 text-2xl font-bold hover:bg-yellow/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="z-20 text-center">
              Atteignez plus efficacement votre clientèle
            </span>
            <Border ttype="bouton" rref={ref.current} />
          </Link>
        </ContainerHero>
      </section>
    </>
  );
}
