import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const App = () => {
  const boxRef1 = useRef(null);
  const boxRef2= useRef(null);
  const boxRef3 = useRef(null);

  useEffect(() => {
    gsap.to(boxRef1.current, {
      duration: 2,
      delay: 1,
      rotate: -360,
      backgroundColor: "crimson",
    });

    gsap.to(boxRef2.current, {
      x: -200,
      duration: 1.5,
      delay: 1,
      backgroundColor: "yellow"
    });

    gsap.to(boxRef3.current, {
      x: 300,
      duration: 3,
      delay: 1,
      backgroundColor: "gray",
    });

  }, []);

  return (
    <div className="h-screen w-screen uppercase flex flex-col justify-center items-center gap-6">
      <div ref={boxRef1} className="w-24 h-24 rounded-md bg-slate-600 text-center"></div>
      <div ref={boxRef2} className="w-24 h-24 rounded-md bg-slate-600 text-center"></div>
      <div ref={boxRef3} className="w-24 h-24 rounded-md bg-slate-600 text-center"></div>
    </div>
  );
};

export default App;
