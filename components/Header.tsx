"use client";

import Link from "next/link";
// import Container from "./ui/Container";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Border from "./ui/Border";
import Image from "next/image";
import titre from "/public/titre.png";

export default function Header() {
  const targetRef = useRef<HTMLLIElement>(null);
  const targetRef2 = useRef<HTMLLIElement>(null);
  const targetRef3 = useRef<HTMLLIElement>(null);
  const targetRef4 = useRef<HTMLDivElement>(null);

  const [refsLoaded, setRefsLoaded] = useState<boolean>(false);


  useEffect(() => {
    setRefsLoaded(true);
  }, [targetRef, targetRef2, targetRef3, targetRef4]);

  return (
    <header className="bg-beige px-4 flex items-center h-[10vh] lg:h-[20vh] w-full py-3 max-w-6xl mx-auto ">
      <div className="w-full h-full relative flex flex-row items-stretch justify-between max-w-6xl mx-auto">
        
        <nav className=" min-h-[10vh] items-stretch  w-full  align-stretch h-full">
          <ul className="flex  items-center justify-center  h-[10vh] w-full">
            <li
              ref={targetRef}
              className="w-[33%] h-full relative text-center min-h-[10vh] flex items-center justify-center"
            >
              <Link
                href="/"
                className="flex w-full flex-col items-center justify-center text-gray-600 hover:text-red-500 transition-all duration-700"
              >
                <span 
                  className="z-10 md:text-2xl text-texteBlack inline-block whitespace-nowrap transform transition-transform duration-700 group-hover:scale-[0.8]"
                >
                  CV
                </span>
              </Link>
              <Border plat={true} rref={targetRef.current} />
            </li>

            <li
              ref={targetRef2}
              className="mx-2  w-[33%]  h-full relative text-center min-h-[10vh] flex items-center justify-center"
            >
              <div
                className="flex w-full flex-col items-center justify-center text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                <span className="md:text-2xl z-10 text-texteBlack">
                  Linkedin
                </span>
              </div>
              <Border plat={true} rref={targetRef2.current} />
            </li>

            <li
              ref={targetRef3}
              className="w-[33%] h-full relative text-center min-h-[10vh] flex items-center justify-center"
            >
              <Link
                href="/"
                className="flex w-full flex-col items-center justify-center text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                <span className="md:text-2xl z-10 text-texteBlack">
                  Github
                </span>
              </Link>
              <Border plat={true} rref={targetRef3.current} />
            </li>
          </ul>
        </nav>
        {/* carre rose */}
        <div className="hidden xl:block absolute right-0 top-0 translate-x-full ml-4 h-[15vh]">
          <div ref={targetRef4} className="w-[50px] h-full">
            <Border
              rref={targetRef4.current}
              rose={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
