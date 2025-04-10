"use client";
import React, { forwardRef, useEffect, useState } from "react";

const rosepale: string = "#f9e8e0";

interface Props {
  rose?: boolean;
  icone?: boolean;
  rref: HTMLDivElement | HTMLLIElement | null;
  cookie?: boolean;
  ttype?: string;
  seed?: number;
  z?: number;
}
export default function BorderCarre({
  ttype = "",
  rose = false,
  icone = false,
  cookie = false,
  rref,
  seed = 42,
  z = 1,
}: Props) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  // seed=seed*Math.random()
  useEffect(() => {
    const updateDimensions = () => {
      if (rref) {
        setDimensions({
          width: (rref as HTMLElement).clientWidth,
          height: (rref as HTMLElement).clientHeight
        });
      }
    };

    // Initial measurement
    updateDimensions();

    // Add event listener
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, [rref]);

 

  if (!rref) {
    return null;
  }

 

  const { width, height } = dimensions;

  // if (cookie) {
  //   // console.log(width, height);
  // }

  // Fonction de pseudo-random basée sur une seed
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Génère les 4 points du quadrilatère
  // chacun a un angle et un rayon aléatoire autour d'une position centrale
  const angle1 = seededRandom(seed + 1) * 2 * Math.PI;
  const angle2 = seededRandom(seed + 2) * 2 * Math.PI;
  const angle3 = seededRandom(seed + 3) * 2 * Math.PI;
  const angle4 = seededRandom(seed + 4) * 2 * Math.PI;

  const rayon1 = seededRandom(seed + 5) * 10;
  const rayon2 = seededRandom(seed + 6) * 10;
  const rayon3 = seededRandom(seed + 7) * 10;
  const rayon4 = seededRandom(seed + 8) * 10;

  const decalageWidth = cookie ? -10 : 5;
  const decalageHeight = cookie ? -10 : 5;

  //angle forme est la longueur des cotés egaux que ferait le triangle isocèle dans chaque angle de la forme

  const angleForme = 15

  const p1inf = `${0  + rayon1 * Math.cos(angle1)},${
    0 + angleForme + rayon1 * Math.sin(angle1)
  }`;

  const p1sup = `${0  + angleForme + rayon1 * Math.cos(angle1)},${
    0  + rayon1 * Math.sin(angle1)
  }`;
  const p2sup = `${dimensions.width - decalageWidth - angleForme + rayon2 * Math.cos(angle2)},${
    0  + rayon2 * Math.sin(angle2)
  }`;
  const p2inf = `${dimensions.width - decalageWidth   + rayon2 * Math.cos(angle2)},${
    0 +angleForme + rayon2 * Math.sin(angle2)
  }`;

  const p3sup = `${dimensions.width - decalageHeight + rayon3 * Math.cos(angle3)},${
    dimensions.height - angleForme - 3 + rayon3 * Math.sin(angle3)
  }`;

  const p3inf = `${dimensions.width - decalageHeight - angleForme + rayon3 * Math.cos(angle3)},${
    dimensions.height - 3  + rayon3 * Math.sin(angle3)
  }`;
  const p4inf = `${0 + rayon4 + angleForme * Math.cos(angle4)},${
    dimensions.height - 3 + rayon4 * Math.sin(angle4)
  }`;

  const p4sup = `${0 + rayon4 * Math.cos(angle4)},${
    dimensions.height - angleForme - 3 + rayon4 * Math.sin(angle4)
  }`;



  const XPointHautGauche = p1sup.substring(0, p1sup.indexOf(","));
  const YPointHautGauche = p1sup.substring(p1sup.indexOf(",") + 1, p1sup.length);

  return (
    <svg
      width="100%"
      height="100%"
      className={`absolute inset-0 text-red-500/20 fill-current h-full z-${z} `}
    >
      <defs>
        <pattern
          id="diagonalLines"
          width="2"
          height="2"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-10)"
        >
          <line x1="0" y1="0" x2="0" y2="2" stroke="#FF7F50" strokeWidth="1" />
        </pattern>
        <pattern
            id="stripes"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="#d2402d"
              strokeWidth="4"
            />
          </pattern>
      </defs>
      {/* { ttype === "" && (
        <polygon
          points={`${p1inf} ${p1sup} ${p2sup} ${p2inf} ${p3sup} ${p3inf} ${p4sup} ${p4inf}`}  
          fill={rose ? rosepale : "#d2402d"}
          stroke={rose ? rosepale : "#d2402d"}
          strokeWidth="3"
        />
      )} */}

      {ttype === "bouton" && (
        <polygon
          points={`${p1inf} ${p1sup} ${p2sup} ${p2inf} ${p3sup} ${p3inf} ${p4inf} ${p4sup}`}
          fill={"#d2402d"}
          stroke={"#ffe5bd"}
          strokeWidth="3"
        />
      )}
      {/* {rose && ( */}
      <polygon
        points={`${p1inf} ${p1sup} ${p2sup} ${p2inf} ${p3sup} ${p3inf} ${p4inf} ${p4sup}`}
        fill="#ff634d"
        stroke="#ff634d"
        strokeWidth="3"
        transform="translate(4, 4)"
        opacity="0.3"
      />
      {/* )} */}
      {/* {!icone && !rose && (
        <rect
          width="30%"
          height="30%"
          transform="translate(10, 10)"
          fill="url(#diagonalLines)"
        />
      )} */}
      {/* //ajout pour image */}
      {icone && !rose && (
        <rect
          width="50px"
          height="50px"
          transform={`translate(${XPointHautGauche + 4}, ${
            YPointHautGauche + 4
          })`}
          fill="url(#diagonalLines)"
        />
      )}
    </svg>
  );
}

// export default Border;
