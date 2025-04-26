import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.webp";
// import Border from "./ui/Border";
import BorderFooter from "./ui/BorderFooter";
import { useLayoutEffect, useRef, useState, useEffect } from "react";

export default function Footer() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [leftPosition, setLeftPosition] = useState(0);
  const scissorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fonction pour mettre à jour les dimensions
    const updateDimensions = () => {
      if (targetRef.current) {
        setDimensions({
          width: targetRef.current.offsetWidth,
          height: targetRef.current.offsetHeight,
        });
      }
    };

    // Fonction debounce pour limiter les appels
    let timeoutId: NodeJS.Timeout;
    const debouncedUpdateDimensions = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 200);
    };

    // Mesure initiale
    updateDimensions();

    // Ajout de l'écouteur d'événement
    window.addEventListener("resize", debouncedUpdateDimensions);

    // Nettoyage
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedUpdateDimensions);
    };
  }, []);

  return (
    <footer
      className="flex justify-center bg-marron h-[400px] md:h-[200px] z-[100]"
    >
      <div
        ref={targetRef}
        className="top-0  left-0 relative w-full  mx-auto h-full md:h-full z-[100] "
      >
        <div className="absolute flex justify-center w-full mx-auto h-full">
          <div
            id="anchorciseau"
            className=" w-[1000px] h-full py-3  mx-auto flex flex-col md:flex-row items-center justify-center pb-2"
          >
            <div className="relative w-full h-[48%] md:w-[48%] flex text-beige md:h-full  flex-col md:items-center justify-center  z-30 border-2 border-beige border-dashed">
              {" "}
              <span className="text-beige inline-block text-center   transition-transform duration-300 text-xl  underline">
                Développement web
              </span>
              <span className="text-beige  w-full pl-12 md:pl-0 md:text-center inline-block  transition-transform duration-300 ">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  className="inline-block align-middle mx-2"
                >
                  <circle 
                    cx="3" 
                    cy="3" 
                    r="2.5" 
                    fill="currentColor" 
                  />
                </svg>
                <span className="inline-flex items-center mr-1">
                  Hébergement{" "}
                  {/* <span className="inline-block w-2 h-2 bg-beige rounded-full mx-2" /> */}
                </span>
                <span className="relative ">
                  {/* automatisé */}
                  
                </span>
              </span>
              <span className="text-beige pl-12 md:pl-0 md:text-center inline-block  transition-transform duration-300 ">
              <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  className="inline-block align-middle mx-2"
                >
                  <circle 
                    cx="3" 
                    cy="3" 
                    r="2.5" 
                    fill="currentColor" 
                  />
                </svg>
                <span className="inline-flex items-center mr-1">
                  Animation 3D{" "}
                  {/* <span className="inline-block w-2 h-2 bg-beige rounded-full mx-2" /> */}
                </span>
              </span>
              <span className="text-beige pl-12 md:pl-0 md:text-center inline-block  transition-transform duration-300 ">
              <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  className="inline-block align-middle mx-2"
                >
                  <circle 
                    cx="3" 
                    cy="3" 
                    r="2.5" 
                    fill="currentColor" 
                  />
                </svg>
                <span className="inline-flex items-center mr-1">
                  Suivi et maintenance
                  {/* <span className="inline-block w-2 h-2 bg-beige rounded-full mx-2" /> */}
                </span>
              </span>
              <div className="absolute top-[25px] left-[-16px] w-[30px] h-[30px] flex justify-center items-center">
                {/* <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffe5bd"
                  stroke="#ffe5bd"
                  strokeWidth="0.00024"
                  transform="rotate(270)"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M9.879 12L7.562 9.683a4 4 0 1 1 2.121-2.121L12 9.88l6.374-6.375a2 2 0 0 1 2.829 0l.707.707L9.683 16.438a4 4 0 1 1-2.121-2.121L9.88 12zM6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm9.535-6.587l6.375 6.376-.707.707a2 2 0 0 1-2.829 0l-4.96-4.961 2.12-2.122z" />
                  </g>
                </svg> */}
              </div>
            </div>
            <div className="h-[2%] md:w-[1%]"></div>
            <div className="h-[48%] w-full md:w-[48%] md:h-full text-beige flex flex-col  justify-center z-30 md:pb-2 border-2 border-beige border-dashed">
              <div className="flex items-center pl-12 gap-2 md:pl-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
                <div>06 88 91 80 19</div>
              </div>
              <div className="flex items-center  pl-12 gap-2 md:pl-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
                <div>Lyon 6</div>
              </div>
              <div className="flex items-center pl-12 gap-2 md:pl-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
                <div>amaury.pichat@gmail.com</div>
              </div>
            </div>
          </div>
          {/* <BorderFooter rref={targetRef.current} rose={true} /> */}
        </div>
      </div>
    </footer>
  );
}
