import React, { useRef, useState } from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const upcomingVidIndex = (currentIndex + 1) % totalVideos;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  const getVideoSrc = (index) => `videos/jordan${index}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <div className="absolute-center absolute z-50 w-[900px] h-[900px] cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMiniVideoClick}
            className="origin-center flex w-full h-full cursor-pointer items-center justify-center rounded-lg scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              ref={nextVideoRef}
              src={getVideoSrc((currentIndex % totalVideos) + 1)}
              loop
              muted
              id="current-video"
              className="clipped-image w-full h-full origin-center object-cover object-center transition-transform duration-500 ease-in-out"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>

        <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          autoPlay
          id="next-video"
          className="absolute-center clipped-image invisible origin-center absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
        <video
          src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      </div>
      {/* <h1 className="special-font hero-heading absolute top-5 right-5 z-40 text-blue-75">
        AIR <span className="text-red-600">JORDAN</span>
      </h1> */}

      <div className="absolute top-5 right-5 z-40">
        <div className="m5-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-blue-100">
            AIR <span className="text-red-600">JORDAN</span>
          </h1>
          <p className="mb-5 text-lg font-semibold text-end text-blue-75 font-robert-regular">
            Born to <span className="text-red-500 ">Fly</span> . Built to{" "}
            <span className="text-red-500">Soar</span>.
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 z-40">
        <div className="m5-24 px-5 sm:px-10">
          <div className="flex items-center justify-between gap-x-2">
            <p className="mb-2 font-semibold text-lg text-blue-75 pl-5 font-robert-regular">
              <span className="text-red-500 ">Defy</span> Gravity.
              <br /> <span className="text-red-500 ">Define</span> Greatness.
              <br /> <span className="text-red-500 ">Defend</span> the Legacy.
            </p>
            <Button
              id="watch-trailer"
              title="Watch Video"
              leftIcon={<FaArrowRight />}
              containerClass="bg-blue-100 flex-center gap-2 w-1/2 font-robert-regular"
            />
          </div>

          <h1 className="special-font hero-heading text-blue-100">
            <span className="text-red-600">OUR</span> TURN.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
