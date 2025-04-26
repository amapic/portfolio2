"use client";

import { useRef, createRef } from "react";
import BorderCarre from "./ui/BorderCarre";
import Border from "./ui/Border";
import Cadre from "./ui/Cadre";
export default function Hero({
  titre,
  description,
  id,
  order,
  img,
  technos,
  url,
  separateur = true,
}: {
  titre: string;
  description: string;
  id: string;
  order: number;
  img: string;
  technos: string[];
  url: string;
  separateur?: boolean;
}) {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const technoRefs = useRef<React.RefObject<HTMLDivElement>[]>(
    technos.map(() => createRef<HTMLDivElement>())
  );
  let orderdivgauche = "order-2";
  let orderdivdroite = "order-1";
  if (order === 1) {
    orderdivgauche = "order-1";
    orderdivdroite = "order-2";
  }
  // Fonction de normalisation
  const normalizeString = (str: string) => {
    return str.toLowerCase().replace(/\./g, "");
  };

  // Map avec clés normalisées
  const technoToIcon = new Map([
    ["reactjs", "react.png"],
    ["threejs", "threejs.png"],
    ["webgl", "webgl4.png"],
    ["api rest", "restapi.png"],
    // ... autres mappings
  ]);
  return (
    <>
      <section
        id={id}
        className={`relative md:h-[90vh]  w-full h-full px-2 z-0 ${
          order === 1 ? "bg-beige" : "bg-[#e5cca4]"
        } bg-transparent md:bg-transparent h-sm:mt-4`}
      >
        <div className="relative bg-transparent flex flex-col md:flex-row justify-center items-center w-full h-full z-0">
          <div
            className={`z-0 order-2 bg-transparent md:${orderdivgauche} w-full md:w-1/2 h-full flex flex-col justify-center items-center gap-4 p-2`}
          >
            <div
              ref={ref}
              className="relative mx-auto bg-transparent text-texteBlack  z-10 pb-4 pt-3 px-8 text-2xl font-bold hover:bg-yellow/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <img
                src={img}
                alt="datas_picture"
                className="relative z-50 p-2 rotate-1 hover:rotate-0 transition-transform duration-300"
              />
              <Cadre ttype="bouton" rref={ref.current} />
            </div>
            <div
              ref={ref2}
              className="cursor-pointer relative w-1/2 mx-auto text-texteBlack inline-flex items-center justify-center    z-50 pb-4 pt-3 px-8 text-2xl font-bold hover:bg-yellow/90 transition-colors duration-200 shadow-lg "
            >
              <a
                className="z-20 text-center mx-auto "
                href={url}
                target="_blank"
              >
                Visiter le site
              </a>
              <Border ttype="bouton" rref={ref2.current} />
            </div>
          </div>
          <div
            className={`order-1 md:${orderdivdroite} w-full md:w-1/2 p-2 h-full flex items-center justify-center`}
          >
            <div className="flex flex-1 md:pb-12  items-center justify-around pb-10 ">
              <div
                ref={ref3}
                className="relative  h-full min-h-[450px] h-[70vh] md:h-[80vh] lg:py-12 xl:py-24  lg:h-[60vh]  w-full mx-auto text-texteBlack flex flex-col  z-50   pt-3 px-8 text-2xl font-bold transition-colors duration-200 shadow-lg "
              >
                <div className="z-20 text-center mx-auto py-4 ">
                  <h3 className="pb-4 text-2xl lg:text-4xl ">{titre}</h3>
                  <p className="lg:text-2xl ">{description}</p>
                </div>
                <h3 className="text-xl lg:text-3xl text-center mx-auto z-20 py-8 w-full ">
                  Technologies utilisées
                </h3>
                <div className="w-full h-full flex flex-col justify-center items-center">
                  {technos.map((techno, index) => {
                    const normalizedTechno = normalizeString(techno);
                    const icon = technoToIcon.get(normalizedTechno);
                    const technoRef = technoRefs.current[index];
                    return (
                      <div
                        key={techno}
                        ref={technoRef}
                        className="relative shadow-md lg:w-1/2 p-3  flex justify-left items-center z-20"
                      >
                        <div className="md:text-xl flex items-start justify-left z-50 ">
                          <img
                            src={`/pictures/${icon}`}
                            alt={techno}
                            style={{ zIndex: 60 }}
                            className="w-10 h-10 ml-2"
                          />
                          <p className="px-4 mt-2">
                            <span className="pl-4 flex-1 text-texteBlack text-xl">
                              {techno}
                            </span>
                          </p>
                        </div>
                        <BorderCarre
                          ttype="bouton"
                          rref={technoRef.current}
                          icone={true}
                        />
                      </div>
                    );
                  })}
                </div>
                <Border ttype="projet" rref={ref3.current} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {separateur && (
        <div className="h-[50px] my-8">
          <div className="md:hidden absolute w-full  h-[50px] z-[60]">
            <div className="relative w-full h-full ">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="#d2402d"
              /> */}
                <path
                  d="M 0 5 L 100 0 L 100 100 L 0 100 Z"
                  fill="#e5cca4"
                  width="100%"
                  height="100%"
                />
                {/* {/* <path 
                  d="M 0 5 L 100 8 L 100 90 L 0 85 Z" 
                  fill="#c2b9a3"
                  width="100%"
                  height="100%"
                /> */}
                <path
                  d="M 0 20L 100 25 L 100 80 L 0 75 Z"
                  fill="hsl(39, 100%, 89%)"
                  width="100%"
                  height="100%"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
      {!separateur && <div className="h-[50px] my-8"></div>}
    </>
  );
}
