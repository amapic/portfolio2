import { isMobile } from "react-device-detect";

export default function Background() {
  // 480vh pour 4492 de haut c'est ok
  return (
    <>
      {!isMobile && (
        <div
          id="background3"
          className={`${isMobile ? "h-[609vh]" : "h-[609vh]"} flex absolute justify-center inset-0 overflow-hidden z-0 pointer-events-none`}
        >
        <div
          className=" overflow-hidden relative w-full flex justify-center inset-0 w-[1880px] left-0 top-0 h-full z-0"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1880 5615"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M 0 0 C 152.4 154 203.2 92.4 152.4 277.2 C 101.6 554.4 304.8 462 101.6 646.8 A 50.8 30.8 0 0 0 355.6 739.2 A 50.8 30.8 0 0 0 203.2 677.6 Q 152.4 708.4 152.4 831.6 Q 152.4 924 502 887 Q 907 857 1258 928 Q 1524 924 1320.8 1139.6 Q 1272 1284 1381 1514 T 748 1637 Q 283 1557 373 1889 Q 369.5 2000 373 2000 T 385 2270 Q 426 2657 948 2469 Q 1528 2364 1516 2815 Q 1598 3519 1030 3425 C 798 3395 528 3286 569 3729 Q 560 4245 751 4429 C 1079 4653 1650 4354 1341 5206 L 1105 5775"
              stroke="hsl(39, 100%, 89%)"
              strokeWidth="20"
              strokeDasharray="70 15"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          
        </div>
      </div>
      )}
    </>
  );
}



