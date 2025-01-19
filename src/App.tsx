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

    tl.fromTo(".main-text", {
      opacity: 0,
      scale: 0.4,
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
    })
  }, []);

  return (
    <div className="w-screen h-screen text-lg bg-black text-white pt-16 px-6 md:px-12 capitalize font-bold overflow-hidden">
      <nav className="h-12 w-full flex flex-col md:flex-row md:justify-between items-center text-white sm:textsm">
        <div ref={headerRef} className="text-white text-center md:text-left">
          <h1>Muneeb Ahmed</h1>
        </div>
        <div className="flex gap-4 md:gap-8 cursor-pointer text-white">
          {navItems.map((item) => (
            <h3 className="text-white nav-items text-sm md:text-base">{item}</h3>
          ))}
        </div>
      </nav>
      <div className="w-full h-full flex items-center justify-center text-center">
        <h1 className="text-3xl md:text-6xl main-text px-4">welcome to "user" portfolio</h1>
      </div>
    </div>
  );
};

export default App;
