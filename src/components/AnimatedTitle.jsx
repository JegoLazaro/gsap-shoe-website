import React, { useEffect } from "react";

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = React.useRef(null);

  
  useEffect(() => {

  },[])

  return (
      <div ref={containerRef} className={`animated-title ${containerClass}`}>
        <p className="max-w-[1200px]">
          {title.split("<br />").map((line, index) => (
            <div
              key={index}
              className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
            >
              {line.split(" ").map((word, index) => (
                <span
                  key={index}
                  className="animated-word"
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              ))}
            </div>
          ))}
        </p>
      </div>
  );
};

export default AnimatedTitle;
