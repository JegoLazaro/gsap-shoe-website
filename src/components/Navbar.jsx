import React, { useEffect, useRef, useState } from "react";
import JordanLogo from "../assets/jordan_logo.png";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const navContainerRef = useRef(null);
  const midNavs = ["Home", "About", "Featured", "Contact"];

  const { y: scrollY } = useWindowScroll();

  useEffect(() => {
    if (!navContainerRef.current) {
        console.warn("navContainerRef is null");
        return;
      }
    if (scrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    }
    else if (scrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (scrollY < lastScrollY) {
        setIsNavVisible(true);
        navContainerRef.current.classList.remove('floating-nav');
    }

    setLastScrollY(scrollY);
  }, [scrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.1,
    })
  },[isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 floating-nav top-14 h-18 z-50 border-none transition-all duration-500  sm:inset-x-14"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* LEFT SIDE NAV BAR */}
          <div className="flex items-center gap-7">
            <div className="relative flex items-center gap-7 group w-14 h-14 nav-hover-btn">
              <a href="#home">
                <img
                  src={JordanLogo}
                  alt="Jordan Logo"
                  className="w-full h-full object-contain z-10 transform transition-transform duration-300 group-hover:scale-125"
                />
                <img
                  src={JordanLogo}
                  alt="Outline"
                  className="w-full h-full object-contain absolute top-0 left-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 outline-mask"
                />
              </a>
            </div>
          </div>
          {/* MIDDLE NAV BAR */}
          <div className="flex h-full items-center ">
            <div className="hidden md:block">
              {midNavs.map((nav) => (
                <a
                  href={`#${nav.toLowerCase()}`}
                  key={nav}
                  className="nav-hover-btn animate-pulse font-semibold text-gray-500"
                >
                  {nav}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE NAV BAR */}
          <div className="flex h-full items-center ">
            <div className="hidden md:block">
              <Button
                id="product-button"
                title="Products"
                rightIcon={<TiLocationArrow />}
                containerClass={
                  "bg-gray-300 w-32 md:flex hidden items-center justify-center gap-1"
                }
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
