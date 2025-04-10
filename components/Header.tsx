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
    <header className="bg-beige  h-[20vh] w-full py-3 max-w-6xl mx-auto ">
      <div className=" relative flex flex-row items-stretch justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 w-1/2">
          <Image
            src={titre}
            unoptimized={true}
            alt={"logo Unlock My Data"}
          />
        </Link>

        <nav className=" min-h-[10vh] items-stretch hidden md:block w-full pl-6 align-stretch h-full">
          <ul className="flex  items-center  h-[10vh] w-full">
            <li
              ref={targetRef}
              className="w-1/2 h-full relative text-center min-h-[10vh] flex items-center justify-center transform transition-transform duration-700 ease-in-out hover:scale-125 hover:duration-300"
            >
              <Link
                href="/"
                className="flex w-full flex-col items-center justify-center text-gray-600 hover:text-red-500 transition-all duration-700"
              >
                <span 
                  className="z-10 text-texteBlack inline-block whitespace-nowrap transform transition-transform duration-700 group-hover:scale-[0.8]"
                >
                  CV
                </span>
              </Link>
              <Border rref={targetRef.current} />
            </li>

            <li
              ref={targetRef2}
              className="w-1/2 h-full relative text-center min-h-[10vh] flex items-center justify-center"
            >
              <div
                className="flex w-full flex-col items-center justify-center text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                <span className="z-10 text-texteBlack">
                  Linkedin
                </span>
              </div>
              <Border rref={targetRef2.current} />
            </li>

            <li
              ref={targetRef3}
              className="w-1/2 h-full relative text-center min-h-[10vh] flex items-center justify-center"
            >
              <Link
                href="/"
                className="flex w-full flex-col items-center justify-center text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                <span className="z-10 text-texteBlack">
                  Github
                </span>
              </Link>
              <Border rref={targetRef3.current} />
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
