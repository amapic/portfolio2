"use client";

import { useRef } from "react";
import { ContainerHero } from "./ui/Container";
import Link from "next/link";
import Border from "./ui/Border";
import Cadre from "./ui/Cadre";
import { MdOutlineSecurity } from "react-icons/md";
export default function Hero() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const targetRef6 = useRef(null);
  const targetRef7 = useRef(null);
  return (
    <>
      <section id="projet1" className="md:h-screen w-full h-full px-2">
        <div className="bg-beige flex flex-col md:flex-row justify-center items-center w-full h-full">
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center gap-4 p-2">
            <div
              ref={ref}
              //   href="/search"
              className="relative mx-auto text-texteBlack bg-beige z-10 pb-4 pt-3 px-8 text-2xl font-bold hover:bg-yellow/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {/* <div className="relative"> */}
              <img
                src="/pictures/sunflower.jpg"
                alt="datas_picture"
                className="relative z-50 p-2 rotate-1 hover:rotate-0 transition-transform duration-300"
              />
              <Cadre ttype="bouton" rref={ref.current} />
              {/* </div> */}
            </div>
            <div
              ref={ref2}
              // href="/search"
              className="relative w-1/2 mx-auto text-texteBlack inline-flex items-center justify-center bg-beige   z-50 pb-4 pt-3 px-8 text-2xl font-bold hover:bg-yellow/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="z-20 text-center mx-auto">Visitez le site</span>
              <Border ttype="bouton" rref={ref2.current} />
            </div>
          </div>
          <div className=" w-full md:w-1/2 p-2">
            <div className="flex  h-[66vh] ">
              <div
                ref={ref3}
                // href="/search"
                className="relative w-full mx-auto text-texteBlack inline-flex items-left flex-col justify-left bg-beige   z-50 pb-4 pt-3 px-8 text-2xl font-bold hover:bg-yellow/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <span className="z-20 text-center mx-auto py-4">
                  Salut les copains, ce site il déchire
                </span>
                <h3 className="text-center mx-auto z-20 py-4 w-full">
                  Technologies utilisées
                </h3>
                <div
                  ref={targetRef6}
                  className="relative shadow-md w-full p-3 flex justify-left items-center z-20"
                >
                  <div className="md:text-xl flex items-start justify-left  text-blue z-50 ">
                    <img
                      src="/pictures/react2.png"
                      alt="react"
                      style={{ zIndex: 60 }}
                      className="w-10 h-10 "
                    />
                    <p className="px-4">
                      <span className="pl-4 flex-1 text-blue text-texteBlack ">
                        React
                      </span>
                    </p>
                  </div>
                  <Border ttype="bouton" rref={targetRef6.current} icone={true}  />
                </div>
                <div
                  ref={targetRef7}
                  className="relative shadow-md w-full p-3 my-3 flex justify-left items-center z-20"
                >
                  <div className="md:text-xl flex items-start justify-left  text-blue z-20">
                    <img
                      src="/pictures/react2.png"
                      alt="react"
                      className="w-10 h-10 z-50"
                    />
                    <p className="px-4 z-50">
                      <span className="pl-4 flex-1 text-blue text-texteBlack z-50">
                        React
                      </span>
                    </p>
                  </div>
                  <Border ttype="bouton"  rref={targetRef7.current} icone={true}   />
                </div>

                <Cadre ttype="bouton" rref={ref3.current}  />
              </div>
            </div>
          </div>
        </div>

        {/* <ContainerHero>
          <div className="bg-red-500 w-full h-full">
          
          </div>
        </ContainerHero> */}
      </section>
    </>
  );
}
