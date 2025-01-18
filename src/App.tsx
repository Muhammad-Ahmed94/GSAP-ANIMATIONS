import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const App = () => {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);

  useEffect(() => {
    gsap.to(boxRef1.current, {
      duration: 2,
      delay: 1,
      rotate: -360,
      backgroundColor: "crimson",
    });

    gsap.to(boxRef2.current, {
      x: 400,
      duration: 2,
      delay: 1,
      backgroundColor: "yellow",
      borderColor: "red"
    });
  }, []);

  return (
    <div className="h-screen w-screen uppercase flex flex-col justify-center items-center gap-6">
      <div ref={boxRef1} className="w-12 h-12 rounded-md bg-slate-600 text-center"></div>
    </div>
  );
};

export default App;
