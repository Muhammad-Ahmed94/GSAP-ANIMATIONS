import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const App = () => {
  const boxRef1 = useRef(null);

  useEffect(() => {
    gsap.to(boxRef1.current, {
      duration: 2,
      delay: 1,
      rotate: -360,
      backgroundColor: "crimson",
    });

  }, []);

  return (
    <div className="h-screen w-screen uppercase flex flex-col justify-center items-center gap-6">
      <div ref={boxRef1} className="w-24 h-24 rounded-md bg-slate-600 text-center"></div>
    </div>
  );
};

export default App;
