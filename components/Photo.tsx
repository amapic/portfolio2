import Border from "@/components/ui/Border";
// import BorderFooter from "@/components/ui/BorderFooter";
import { useRef } from "react";

export default function Photo() {
  const ref = useRef(null);
  return (
    <div className=" z-[100] fixed top-0 left-0 w-[150px] h-[150px]">
      {/* <div className="absolute top-0 left-0 flex-col items-center justify-center w-full h-full"> */}
        <div ref={ref} className="  z-[100]  relative flex-col items-center justify-center w-full h-full">
          <span className=" z-[100] text-white text-2xl font-bold w-full h-full">
            Nouveau, On vient chez vous prendre des photos
          </span>
          <Border ttype="bouton" rref={ref.current} />
        </div>
      {/* </div> */}
    </div>
  );
}
