import React, { useRef, useState } from "react";
import BentoCard from "./BentoCard";

const CardTilt = ({children, className}) => {
  const [tilt, setTilt] = useState("");
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    if(!cardRef.current) return;
    const {left, top, width, height} = cardRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;

    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 3;

    const tiltY = (relativeX - 0.5) * -3;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.97, 0.97, 0.97)`

    setTilt(newTransform);
  };

  const handleMouseLeave = () => {
    setTilt("");
  };

  return (
    <div className={className} ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: tilt}}>
      {children}
    </div>
  )
};

const Featured = () => {
  return (
    <section className="pb-52 bg-[#82010D]">
      <div className='"container mx-auto px-3 md:px-10'>
        <div className="px-5 py-32">
          <h1 className="text-3xl font-circular-web font-bold text-center text-white">
            Rule the <span className="text-black font-semibold">Court.</span>{" "}
            Own the <span className="text-black font-semibold">Streets.</span>
          </h1>
          <p className="mt-8 text-xl text-white tracking-wide font-semibold font-general text-center">
            Streetwear with soul. Style with legacy. Jordan moves with the
            rhythm of the streets.
          </p>
        </div>

        <CardTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-3xl md:h-[65vh]">
          <BentoCard
            // source="https://www.youtube.com/embed/VnE7m8JI7MY?autoplay=1&mute=1&loop=1&playlist=VnE7m8JI7MY&controls=0&rel=0"
            source={"/videos/jordan7.mp4"}
            title={"Legacy"}
            description={
              "You don’t wear Jordan to follow a legacy. You wear it to create your own."
            }
            isComingSoon={false}
            isVideo
          />
        </CardTilt>
        <div className="grid h-[95vh] grid-cols-2 grid-rows-2 gap-7">
          <CardTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              source="https://images.unsplash.com/photo-1610897600804-c36e2336ad3a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9yZGFuJTIwNHxlbnwwfHwwfHx8MA%3D%3D"
              title={"Iconic"}
              description={
                "Worn by the legends. Made for the ones becoming them."
              }
              // isTop
            />
          </CardTilt>

          <CardTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              // source="https://c4.wallpaperflare.com/wallpaper/433/571/804/jordan-hd-1080p-high-quality-wallpaper-preview.jpg"

              source="https://e1.pxfuel.com/desktop-wallpaper/602/988/desktop-wallpaper-air-jordan-1-low-grade-school-jordan-bred.jpg"
              title={"Greatness"}
              isTop
              description={"Defining Flight. Defending Greatness."}
            />
          </CardTilt>
          <CardTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              // source="https://c4.wallpaperflare.com/wallpaper/433/571/804/jordan-hd-1080p-high-quality-wallpaper-preview.jpg"
              source="/videos/jordan8.mp4"
              title={"Streets"}
              description={
                "Where style meets substance and sneakers become symbols "
              }
              isVideo
            />
          </CardTilt>
        </div>
        <CardTilt className="border-hsla relative mt-7 mb-7 h-96 w-full overflow-hidden rounded-3xl md:h-[65vh]">
          <BentoCard
            // source="https://www.youtube.com/embed/VnE7m8JI7MY?autoplay=1&mute=1&loop=1&playlist=VnE7m8JI7MY&controls=0&rel=0"
            // source={"/videos/jordan7.mp4"}
            source={"/image/jordan-shoe4.jpg"}
            title={"Jordan"}
            description={
              "Born on the court. Raised in the streets. Jordan is where game meets culture."
            }
            isComingSoon={false}
            // isVideo
          />
        </CardTilt>
      </div>
    </section>
  );
};

export default Featured;
