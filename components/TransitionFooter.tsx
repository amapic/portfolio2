export default function TransitionFooter() {
  return (
    <div className="flex flex-col items-center justify-center h-[40px] w-full z-10">
      <svg 
        width="100%" 
        height="40" 
        viewBox="0 0 300 40" 
        preserveAspectRatio="none"
        className="z-10"
      >
        {/* Trapèze gauche - le plus foncé */}
        
        <path 
          d="M 0 0 L 300 20 L 300 30 L 300 40 L 0 40 Z" 
          fill="#bba586"
        />
        <path 
          d="M 0 10 L 0 40 L 300 40 Z" 
          fill="#8f7f6c"
        />
        <path 
          d="M 0 25 L 0 40 L 300 40 Z" 
          fill="#635952"
        />
        
        
        {/* Trapèze central - couleur intermédiaire */}
        {/* <path 
          d="M 100 100 L 200 100 L 180 0 L 120 0 Z" 
          fill="#9c8f7b"
        />
        {/* Trapèze droit - le plus clair */}
        {/* <path 
          d="M 200 100 L 300 100 L 280 0 L 220 0 Z" 
          fill="#ffe5bd"
        />  */}
      </svg>
    </div>
  );
}
