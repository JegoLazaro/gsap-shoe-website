import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

// gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen bg-white">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-robert-regular font-semibold text-lg uppercase md:text-[14px] ">
          Fly Above the Rest.
        </h2>

        <div className="text-4xl uppercase font-general font-semibold leading-tight text-center px-2 md:text-[4rem]">
          <p className="max-w-[1200px]">
            From the <span className="text-red-600 font-light">streets</span> to
            the <span className="text-red-600 font-light">court</span>,{" "}
            <span className="text-red-600  font-bold">Jordan</span> stands for
            those who defy{" "}
            <span className="text-red-600 font-light">limits</span> and define{" "}
            <span className="text-red-600 font-light">eras</span>.
          </p>
        </div>
        <div className="about-subtext">
          <p>
            Jordan is not just a name — it’s a movement, a mindset, a legacy
            carried by those who dare to rise beyond limits.
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/image/jordan-img-1.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
