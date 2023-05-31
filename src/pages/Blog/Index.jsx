import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ParallaxScrollSnap = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.defaults({ markers: true });

    const sections = sectionsRef.current;

    function goToSection(i) {
      gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: true, ease: "power3.inOut" },
        duration: 0.85
      });
    }

    sections.forEach((eachPanel, i) => {
      ScrollTrigger.create({
        trigger: eachPanel,
        onEnter: () => {
          goToSection(i);
        }
      });

      gsap.to(eachPanel, {
        // yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: eachPanel,
          start: "top top",
          end: "top bottom",
          scrub: true,
          snap: 1 / (sections.length - 1),
          pin: true,
          repeat: -1
        }
      });
    });
  }, []);

  return (
    <>
      <section className="panel bg-black h-screen" ref={(el) => (sectionsRef.current[0] = el)}>
        <p>This is page 1</p>
      </section>
      <section className="panel bg-green h-screen" ref={(el) => (sectionsRef.current[1] = el)}>
        <p>This is page 2</p>
      </section>
      <section className="panel h-screen bg-dark-green" ref={(el) => (sectionsRef.current[2] = el)}>
        <p>This is page 3</p>
      </section>
      <section className="panel h-screen bg-black" ref={(el) => (sectionsRef.current[3] = el)}>
        <p>This is page 4</p>
      </section>
    </>
  );
};

export default ParallaxScrollSnap;
