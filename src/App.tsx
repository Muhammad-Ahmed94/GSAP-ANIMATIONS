import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const App = () => {
  const headerRef = useRef(null);

  const navItems = ['portfolio', 'about', 'contact', 'blog post'];

  useEffect(() => {
  const tl = gsap.timeline();

    tl.fromTo(headerRef.current, { 
      y: -15,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1
    });

    tl.fromTo(".nav-items", {
      y: -15,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2
    });

  }, []);

  return (
    <div className="w-screen h-screen text-lg bg-black text-white pt-16 px-12 uppercase font-bold">
      <div className="h-12 w-full flex justify-between items-center text-white">
        <div ref={headerRef} className="text-white">
          <h1>Muneeb Ahmed</h1>
        </div>
        <div className="flex gap-8 cursor-pointer text-white">
          {navItems.map((item) => (
            <h3 className="text-white nav-items">{item}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
