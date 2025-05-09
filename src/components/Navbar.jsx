import React, { useRef } from "react";
import JordanLogo from "../assets/jordan_logo.png";

const Navbar = () => {

    const navContainerRef = useRef(null);

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-6 h-18 z-50 border-none transition-all duration-500  sm:inset-x-14">
        <header className="absolute top-1/2 w-full -translate-y-1/2">
            <nav className="flex size-full items-center justify-between p-4">
                <div className="flex items-center gap-7">
                    <img
                        src={JordanLogo}
                        alt="Jordan Logo"
                        className="w-10 object-cover"  
                    />
                    <nav>
                        test
                    </nav>
                </div>
            </nav>

        </header>
    </div>
  );
};

export default Navbar;
