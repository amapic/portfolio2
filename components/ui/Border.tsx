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
  plat?:boolean
}
export default function Border({
  ttype = "",
  rose = false,
  icone = false,
  cookie = false,
  rref,
  seed = 42,
  z = 1,
  plat=false
}: Props) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [points, setPoints] = useState({
    p1: "0,0",
    p2: "0,0",
    p3: "0,0",
    p4: "0,0",
    XPointHautGauche: "0",
    YPointHautGauche: "0"
  });

  useEffect(() => {
    const updateDimensionsAndPoints = () => {
      if (rref) {
        const newDimensions = {
          width: (rref as HTMLElement).clientWidth,
          height: (rref as HTMLElement).clientHeight
        };
        
        const seededRandom = (seed: number) => {
          const x = Math.sin(seed) * 10000;
          return x - Math.floor(x);
        };

        let angle1, angle2, angle3, angle4, rayon1, rayon2, rayon3, rayon4;

        if (!plat) {
          angle1 = seededRandom(seed + 1) * 2 * Math.PI;
          angle2 = seededRandom(seed + 2) * 2 * Math.PI;
          angle3 = seededRandom(seed + 3) * 2 * Math.PI;
          angle4 = seededRandom(seed + 4) * 2 * Math.PI;

          rayon1 = seededRandom(seed + 5) * 10;
          rayon2 = seededRandom(seed + 6) * 10;
          rayon3 = seededRandom(seed + 7) * 10;
          rayon4 = seededRandom(seed + 8) * 10;
        } else {
          angle1 = angle2 = angle3 = angle4 = 0;
          rayon1 = rayon2 = rayon3 = rayon4 = 0;
        }

        const decalageWidth = cookie ? -10 : 5;
        const decalageHeight = cookie ? -10 : 5;

        const p1 = `${0 + rayon1 * Math.cos(angle1)},${0 + rayon1 * Math.sin(angle1)}`;
        const p2 = `${newDimensions.width - decalageWidth + rayon2 * Math.cos(angle2)},${0 + rayon2 * Math.sin(angle2)}`;
        const p3 = `${newDimensions.width - decalageHeight + rayon3 * Math.cos(angle3)},${newDimensions.height - 3 + rayon3 * Math.sin(angle3)}`;
        const p4 = `${0 + rayon4 * Math.cos(angle4)},${newDimensions.height - 3 + rayon4 * Math.sin(angle4)}`;

        const XPointHautGauche = p1.substring(0, p1.indexOf(","));
        const YPointHautGauche = p1.substring(p1.indexOf(",") + 1, p1.length);

        setDimensions(newDimensions);
        setPoints({
          p1,
          p2,
          p3,
          p4,
          XPointHautGauche,
          YPointHautGauche
        });
      }
    };

    updateDimensionsAndPoints();
    window.addEventListener('resize', updateDimensionsAndPoints);
    return () => window.removeEventListener('resize', updateDimensionsAndPoints);
  }, [rref, seed, plat, cookie]);

  if (!rref) {
    return null;
  }

  const { width, height } = dimensions;

  if (cookie) {
    // console.log(width, height);
  }

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
      </defs>
      {( ttype === "" || ttype === "projet") && (
        <polygon
          points={`${points.p1} ${points.p2} ${points.p3} ${points.p4}`}
          fill={rose ? rosepale : "#d2402d"}
          stroke={rose ? rosepale : "#d2402d"}
          strokeWidth="3"
        />
      )}

      {(ttype === "bouton" || ttype === "projet") && (
        <polygon
          points={`${points.p1} ${points.p2} ${points.p3} ${points.p4}`}
          fill={"#d2402d"}
          stroke={"#ffe5bd"}
          strokeWidth="3"
        />
      )}
      {/* {rose && ( */}
      <polygon
        points={`${points.p1} ${points.p2} ${points.p3} ${points.p4}`}
        fill="#ff634d"
        stroke="#ff634d"
        strokeWidth="3"
        transform="translate(4, 4)"
        opacity="0.3"
      />
      {/* )} */}
      {!icone && !rose && ttype === "projet" && (
        <rect
          width="30%"
          height="15%"
          transform="translate(10, 10)"
          fill="url(#diagonalLines)"
        />
      )}

      {!icone && !rose  && ttype !== "projet" && (
        <rect
          width="30%"
          height="30%"
          transform="translate(10, 10)"
          fill="url(#diagonalLines)"
        />
      )}
      {/* //ajout pour image */}
      {icone && !rose && (
        <rect
          width="70px"
          height="70px"
          transform={`translate(${points.XPointHautGauche + 4}, ${points.YPointHautGauche + 4})`}
          fill="url(#diagonalLines)"
        />
      )}
    </svg>
  );
}

// export default Border;
