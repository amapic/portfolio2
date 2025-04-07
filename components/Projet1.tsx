"use client";

import { useRef } from "react";
import Border from "./ui/Border";
import Cadre from "./ui/Cadre";
export default function Hero({titre, description,id,order,img}: {titre: string, description: string,id: string,order: number,img: string}) {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const targetRef6 = useRef(null);
  const targetRef7 = useRef(null);
  let orderdivgauche = "order-2"
  let orderdivdroite = "order-1"
  if (order === 1) {
    orderdivgauche = "order-1"
    orderdivdroite = "order-2"
  }
  return (
    <>
      <section
        id={id}
        className="relative md:h-screen w-full h-full px-2 bg-beige z-0 bg-transparent"
      >
        <div className="relative bg-transparent flex flex-col md:flex-row justify-center items-center w-full h-full z-0">
          <div className={`z-0 order-2 bg-transparent md:${orderdivgauche} w-full md:w-1/2 h-full flex flex-col justify-center items-center gap-4 p-2`}>
            <div
              ref={ref}
              //   href="/search"
              className="relative mx-auto bg-transparent text-texteBlack  z-10 pb-4 pt-3 px-8 text-2xl font-bold hover:bg-yellow/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {/* <div className="relative"> */}
              <img
                src={img}
                alt="datas_picture"
                className="relative z-50 p-2 rotate-1 hover:rotate-0 transition-transform duration-300"
              />
              <Cadre ttype="bouton" rref={ref.current} />
              {/* </div> */}
            </div>
            <div
              ref={ref2}
              // href="/search"
              className="relative w-1/2 mx-auto text-texteBlack inline-flex items-center justify-center    z-50 pb-4 pt-3 px-8 text-2xl font-bold hover:bg-yellow/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="z-20 text-center mx-auto">Visitez le site</span>
              <Border ttype="bouton" rref={ref2.current} />
            </div>
          </div>
          <div className={`order-1 md:${orderdivdroite} w-full md:w-1/2 p-2 h-full flex items-center justify-center`}>
            <div className="flex flex-1 min-h-[66vh] items-center justify-around ">
              <div
                ref={ref3}
                // href="/search"
                className="relative h-full w-full mx-auto text-texteBlack flex flex-col  z-50 pb-4 pt-3 px-8 text-2xl font-bold hover:bg-yellow/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <div className="z-20 text-center mx-auto py-4">
                  <h3>
                    {titre}
                    
                  </h3>
                  <p>
                    {description}
                   
                  </p>
                </div>
                <h3 className="text-center mx-auto z-20 py-4 w-full">
                  Technologies utilisées
                </h3>
                <div
                  ref={targetRef6}
                  className="relative  shadow-md w-full p-3 flex justify-left items-center z-20"
                >
                  <div className="md:text-xl flex items-start justify-left   z-50 ">
                    <img
                      src="/pictures/react2.png"
                      alt="react"
                      style={{ zIndex: 60 }}
                      className="w-10 h-10 "
                    />
                    <p className="px-4">
                      <span className="pl-4 flex-1 text-texteBlack ">
                        React
                      </span>
                    </p>
                  </div>
                  <Border
                    ttype="bouton"
                    rref={targetRef6.current}
                    icone={true}
                  />
                </div>
                <div
                  ref={targetRef7}
                  className="relative shadow-md w-full p-3 my-3 flex justify-left items-center z-20"
                >
                  <div className="md:text-xl flex items-start justify-left   z-20">
                    <img
                      src="/pictures/react2.png"
                      alt="react"
                      className="w-10 h-10 z-50"
                    />
                    <p className="px-4 z-50">
                      <span className="pl-4 flex-1  text-texteBlack z-50">
                        React
                      </span>
                    </p>
                  </div>
                  <Border
                    ttype="bouton"
                    rref={targetRef7.current}
                    icone={true}
                  />
                </div>

                <Cadre ttype="bouton" rref={ref3.current} />
              </div>
            </div>
          </div>
          {/* <div id="" className="absolute top-0 left-0 w-full h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 800 800"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                strokeWidth="10"
                stroke="hsl(39, 100%, 89%)"
                fill="none"
                strokeLinecap="square"
                strokeDasharray="32.5 44"
              >
                <path
                  d="M50 50Q400 200 400 400Q200 600 750 750"
                  markerEnd="url(#SvgjsMarker1196)"
                />
              </g>
              <defs>
                <marker
                  markerWidth="1"
                  markerHeight="1"
                  refX="0.5"
                  refY="0.5"
                  viewBox="0 0 1 1"
                  orient="auto"
                  id="SvgjsMarker1196"
                >
                  <polygon
                    points="0,1 0.3333333333333333,0.5 0,0 1,0.5"
                    fill="hsl(39, 100%, 89%)"
                  />
                </marker>
              </defs>
            </svg>
          </div> */}

          
        </div>
        {/* <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <div className="absolute z-0 left-0 top-0 h-full">
              <svg
                id="ca roule"
                width="1880px"
                height="830px"
                viewBox="0 415 1880 830"
                //   preserveAspectRatio="xMinYMin meet"
                className="overflow-hidden z-0"
              >
                <path
                  d="M 0 0 C 152.4 154 203.2 92.4 152.4 277.2 C 101.6 554.4 304.8 462 101.6 646.8 A 50.8 30.8 0 0 0 355.6 739.2 A 50.8 30.8 0 0 0 203.2 677.6 Q 152.4 708.4 152.4 831.6 Q 152.4 924 457.2 893.2 Q 812.8 831.6 1270 862.4 Q 1524 924 1320.8 1139.6"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeDasharray="10 10"
                  fill="none"
                />
              </svg>
            </div>
          </div> */}

        {/* <ContainerHero>
          <div className="bg-red-500 w-full h-full">
          
          </div>
        </ContainerHero> */}
      </section>
    </>
  );
}
