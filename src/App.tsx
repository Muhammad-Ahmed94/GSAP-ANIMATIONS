import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const App = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 500,
      duration: 2,
      delay: 1,
      rotate: 360,
      backgroundColor: "crimson",
    });
  }, []);

  return (
    <div ref={boxRef} className="text-xl h-64 w-64 bg-orange-400 text-white">
      App
    </div>
  );
};

export default App;
