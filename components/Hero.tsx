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
      <section id="hero" className="h-[80vh] md:h-[70vh] px-4 mt-4 ">
        <ContainerHero>
          <div
            id="blacn"
            className="hidden lg:block lg:absolute rotate-1 lg:top-[2rem] lg:bottom-[80px]  lg:mt-0 lg:ml-[50%] lg:w-[calc(50%+50px)] bg-white   z-[50] relative inset-x-0 right-6 mx-auto ml-auto h-sm:mt-0 mt-12  "
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
              <rect x="0" y="0" width="100" height="100" fill="url(#stripes)" />
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
          <div className="w-[75%] h-[80%] lg:w-auto justify-around flex flex-col relative z-10  mx-auto  md:max-w-4xl text-center lg:ml-0  lg:text-left">
            <div className="flex h-[100px] md:h-auto  items-center justify-center lg:items-start">
              <div className=" top-0 bg-red left-0 lg:hidden h-[100px] w-[100px] bg-white w-1/4">
                <svg
                  width="100px"
                  height="100px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Définition du pattern */}
                  <defs>
                    <pattern
                      id="stripes2"
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
                    fill="url(#stripes2)"
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
              </div>
              <h2
                className={`ml-4 md:ml-4 w-full text-center top-0 left-0 text-texteBlack mt-10 lg:mt-0 text-balance text-4xl font-bold md:text-5xl xl:text-6xl`}
              >
                Amaury PICHAT
              </h2>
            </div>
            <div className="relative m-4">
              <svg 
                className="absolute inset-0 w-full h-full -z-10"
                width="100%" 
                height="100%"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="diagonalLinesHero"  // Nouveau ID pour éviter les conflits
                    width="2"
                    height="2"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(-10)"
                  >
                    <line 
                      x1="0" 
                      y1="0" 
                      x2="0" 
                      y2="2" 
                      stroke="#FF7F50" 
                      strokeWidth="1" 
                    />
                  </pattern>
                </defs>
                <rect 
                  width="100%" 
                  height="100%" 
                  fill="url(#diagonalLinesHero)"
                />
              </svg>
              <p className="relative underline decoration-2 underline-offset-4 p-4 md:p-0 md:ml-4  flex items-center justify-center gap-2 md:text-2xl  text-texteBlack md:my-8 font-bold relative z-10">
                Développement de sites web
                {/* <img src="/pictures/soulignage.png" alt="puce" className="absolute -bottom-4 w-full h-2 " /> */}
              </p>
            </div>
            <div className="text-texteBlack text-body mt-8 mx-auto ">
              <div className="flex flex-col gap-2 justify-center ">
                
                <div className="flex items-center gap-2 md:text-2xl font-bold ">
                <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 100 100"
                    className="w-4 h-4"
                  >
                    {/* Premier quart (haut-droit) - Blanc */}
                    <path
                      d="M 50 50 L 100 50 A 50 50 0 0 0 50 0 Z"
                      fill="white"
                    />
                    
                    {/* Deuxième quart (bas-droit) - Noir */}
                    <path
                      d="M 50 50 L 50 100 A 50 50 0 0 0 100 50 Z"
                      fill="black"
                    />
                    
                    {/* Troisième quart (bas-gauche) - Blanc */}
                    <path
                      d="M 50 50 L 0 50 A 50 50 0 0 0 50 100 Z"
                      fill="white"
                    />
                    
                    {/* Quatrième quart (haut-gauche) - Noir */}
                    <path
                      d="M 50 50 L 50 0 A 50 50 0 0 0 0 50 Z"
                      fill="black"
                    />
                  </svg>
                  Conception
                </div>
                <div className="flex items-center gap-2 md:text-2xl font-bold ">
                <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 100 100"
                    className="w-4 h-4"
                  >
                    {/* Premier quart (haut-droit) - Blanc */}
                    <path
                      d="M 50 50 L 100 50 A 50 50 0 0 0 50 0 Z"
                      fill="white"
                    />
                    
                    {/* Deuxième quart (bas-droit) - Noir */}
                    <path
                      d="M 50 50 L 50 100 A 50 50 0 0 0 100 50 Z"
                      fill="black"
                    />
                    
                    {/* Troisième quart (bas-gauche) - Blanc */}
                    <path
                      d="M 50 50 L 0 50 A 50 50 0 0 0 50 100 Z"
                      fill="white"
                    />
                    
                    {/* Quatrième quart (haut-gauche) - Noir */}
                    <path
                      d="M 50 50 L 50 0 A 50 50 0 0 0 0 50 Z"
                      fill="black"
                    />
                  </svg>
                  Réalisation
                </div>
                <div className="flex items-center gap-2 md:text-2xl font-bold ">
                <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 100 100"
                    className="w-4 h-4"
                  >
                    {/* Premier quart (haut-droit) - Blanc */}
                    <path
                      d="M 50 50 L 100 50 A 50 50 0 0 0 50 0 Z"
                      fill="white"
                    />
                    
                    {/* Deuxième quart (bas-droit) - Noir */}
                    <path
                      d="M 50 50 L 50 100 A 50 50 0 0 0 100 50 Z"
                      fill="black"
                    />
                    
                    {/* Troisième quart (bas-gauche) - Blanc */}
                    <path
                      d="M 50 50 L 0 50 A 50 50 0 0 0 50 100 Z"
                      fill="white"
                    />
                    
                    {/* Quatrième quart (haut-gauche) - Noir */}
                    <path
                      d="M 50 50 L 50 0 A 50 50 0 0 0 0 50 Z"
                      fill="black"
                    />
                  </svg>
                  Hébergement
                </div>
                <div className="flex items-center gap-2 md:text-2xl font-bold ">
                <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 100 100"
                    className="w-4 h-4"
                  >
                    {/* Premier quart (haut-droit) - Blanc */}
                    <path
                      d="M 50 50 L 100 50 A 50 50 0 0 0 50 0 Z"
                      fill="white"
                    />
                    
                    {/* Deuxième quart (bas-droit) - Noir */}
                    <path
                      d="M 50 50 L 50 100 A 50 50 0 0 0 100 50 Z"
                      fill="black"
                    />
                    
                    {/* Troisième quart (bas-gauche) - Blanc */}
                    <path
                      d="M 50 50 L 0 50 A 50 50 0 0 0 50 100 Z"
                      fill="white"
                    />
                    
                    {/* Quatrième quart (haut-gauche) - Noir */}
                    <path
                      d="M 50 50 L 50 0 A 50 50 0 0 0 0 50 Z"
                      fill="black"
                    />
                  </svg>
                  Maintenance
                </div>
              </div>
            </div>
            
          </div>
          <Link
            ref={ref}
            href="/search"
            className="md:text-2xl mt-4 relative lg:w-1/2 mx-auto text-texteBlack inline-flex items-center justify-center bg-beige   z-50 pb-4 pt-3 px-8 text-2xl font-bold hover:bg-yellow/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="z-20 text-center md:text-xl">
              Atteignez plus efficacement votre clientèle
            </span>
            <Border ttype="bouton" rref={ref.current} />
          </Link>
          
        </ContainerHero>
      </section>
    </>
  );
}
