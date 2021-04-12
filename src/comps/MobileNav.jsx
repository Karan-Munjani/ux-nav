import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function MobileNav() {
  const activatorRef = useRef();
  const navItemContainerRef = useRef();
  const navItemIconRefs = useRef([]);
  navItemIconRefs.current = [];

  const tl = useRef(null);

  const svgs = [
    {
      alt: "login",
      url: "https://s2.svgbox.net/hero-outline.svg?ic=login",
      id: "ewewe",
    },
    {
      alt: "music",
      url: "https://s2.svgbox.net/hero-outline.svg?ic=music-note",
      id: "ewewdsa",
    },
    {
      alt: "airplane",
      url: "https://s2.svgbox.net/hero-outline.svg?ic=paper-airplane",
      id: "7ew4",
    },
    {
      alt: "search",
      url: "https://s2.svgbox.net/hero-outline.svg?ic=search",
      id: "789ew",
    },
  ];

  const addToRefs = (el) => {
    if (el && !navItemIconRefs.current.includes(el)) {
      navItemIconRefs.current.push(el);
    }
  };

  const [isMenuOpen, ToggleMenu] = useState(false);

  useEffect(() => {
    console.log(tl.current);
    tl.current = gsap
      .timeline({ defaults: { ease: "power2.inOut" } })
      .to([activatorRef.current], {
        background: "#805ad5",
        borderRadius: "0 5em 5em 0",
      })
      .to(
        [navItemContainerRef.current],
        {
          clipPath: "ellipse(100% 100% at 50% 50%)",
        },
        "-=.5"
      )
      .to(
        [navItemIconRefs.current],
        {
          opacity: 1,
          transform: "translateX(0)",
          stagger: 0.5,
        },
        "-=.5"
      )
      .pause();
    console.log(tl);

    // Here tl.reverse() is not working
    // I checked ReactDev Tools and value of isMenuOpen is toggeling so no issue there
    // Cam anyone Help me please.
  }, []);

  useEffect(() => {
    isMenuOpen ? tl.current.play() : tl.current.reverse();
  }, [isMenuOpen]);

  return (
    <nav>
      <div className="logo">Diesel</div>
      <div className="mobile-nav">
        <div className="nav-item-container" ref={navItemContainerRef}>
          <ul>
            {svgs.map((s) => (
              <li key={s.id}>
                <a href="/3">
                  <img
                    className="nav-item-icon"
                    src={s.url}
                    alt={s.alt}
                    ref={addToRefs}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <img
          className="activator"
          ref={activatorRef}
          role="button"
          onClick={() => ToggleMenu(!isMenuOpen)}
          src="https://s2.svgbox.net/hero-outline.svg?ic=menu-alt-1"
          alt="menu"
        />
      </div>
    </nav>
  );
}

export default MobileNav;
