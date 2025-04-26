import Contour from "@/components/ui/Contour";
import { useRef } from "react";
export default function Container({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
      <div className="overflow-hidden h-full">
        <div className="relative mx-auto max-w-6xl px-6 py-28 lg:py-20 h-full">
          <div className="lg:flex lg:items-center lg:gap-12 h-full">{children}</div>
        </div>
      </div>
    );
  }

  export function ContainerColumn({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
      <div className="overflow-hidden h-full">
        <div className="relative mx-auto max-w-6xl px-6 py-28 lg:py-20 h-full">
          <div className="flex-col lg:flex lg:items-center lg:gap-12 h-full">{children}</div>
        </div>
      </div>
    );
  }
  


  export function ContainerHero({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    const ref = useRef(null);
    return (
      <div className="overflow-hidden h-full">
        <div ref={ref} id="oupsie"  className="bg-red h-[70vh] relative mx-auto max-w-[1500px] px-6 py-4 lg:py-16 h-full">
          <div className="flex-col flex lg:items-stretch justify-between lg:gap-12 h-full">{children}</div>
          {/* <div */}
          <Contour ttype="bouton" rref={ref.current}  />
        </div>
      </div>
    );
  }
  