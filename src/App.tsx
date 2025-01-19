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
    <div className="w-screen h-screen text-lg bg-black text-white pt-16 px-12 capitalize font-bold overflow-hidden">
      <nav className="h-12 w-full flex justify-between items-center text-white">
        <div ref={headerRef} className="text-white">
          <h1>Muneeb Ahmed</h1>
        </div>
        <div className="flex gap-8 cursor-pointer text-white">
          {navItems.map((item) => (
            <h3 className="text-white nav-items">{item}</h3>
          ))}
        </div>
      </nav>
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-6xl main-text">welcome to "user" portfolio</h1>
      </div>
    </div>
  );
};

export default App;
