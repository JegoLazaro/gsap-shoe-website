import React, { useEffect } from "react";
import gsap from "gsap";

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = React.useRef(null);

  
  useEffect(() => {
    const context = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease: "power2.inOut",
        stagger: 0.14,
        // y: 0,
        // stagger: {
        //   amount: 0.5,
        //   from: "start",
        // },
      });

    }, containerRef);

    return () => {
      context.revert();
    }
  },[])
  
  const parseHTMLWords = (rawHtml) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div>${rawHtml}</div>`, "text/html");
    const container = doc.body.firstChild;

    const lines = [];
    let currentLine = [];

    container.childNodes.forEach((node) => {
      if (node.nodeName === "BR") {
        if (currentLine.length) lines.push(currentLine);
        currentLine = [];
      } else if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent.split(/\s+/).filter(Boolean);
        words.forEach((word) => currentLine.push({ html: word }));
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        currentLine.push({ html: node.outerHTML });
      }
    });

    if (currentLine.length) lines.push(currentLine);
    return lines;
  };

  const parsedLines = parseHTMLWords(title);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {parsedLines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.map((wordObj, wordIndex) => (
            <span
              key={wordIndex}
              className="animated-word opacity-0"
              dangerouslySetInnerHTML={{ __html: wordObj.html }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
