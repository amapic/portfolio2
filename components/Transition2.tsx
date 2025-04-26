import React, { useEffect, useRef, ReactDOM, useState } from "react";
import Image from "next/image";
import Container, { ContainerColumn } from "@/components/ui/Container";
// import Title from "@/components/ui/Title";
import Border from "@/components/ui/Border";
// import Container2 from "@/components/ui/Container2";
export default function Transition2() {
  // Dimensions du viewBox
  const width = 800;
  const height = 400;

  // Calcul de l'angle pour aller du coin supérieur gauche au coin inférieur droit
  const angle = Math.atan2(height, width) * (180 / Math.PI);

  return (
    <section id="transition2" className="h-[100px] w-full relative">
      <svg
        width="1880"
        height="100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        
        {/* <line className="stroke-black-2" stroke-dasharray="150, 50" x1="-2" y1="20" x2="1880" y2="68" style={{strokeWidth: "40px"}}></line> */}
        <line className="stroke-black" stroke-dasharray="150, 50" x1="0" y1="20" x2="1880" y2="70" style={{strokeWidth: "40px"}}></line>
      </svg>
    </section>
  );
}
