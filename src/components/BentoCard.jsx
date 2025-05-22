import React from "react";

const BentoCard = ({
  source,
  title,
  description,
  isComingSoon,
  isVideo,
  isTop,
}) => {
  return (
    <div className="relative size-full ">
      {/* {title}     */}
      {isVideo ? (
      //   <iframe
      //   width="560"
      //   height="315"
      //   src={source}
      //   title="YouTube video player"
      //   frameBorder="0"
      //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //   referrerPolicy="strict-origin-when-cross-origin"
      //   allowFullScreen
      //   className="absolute left-0 top-0 size-full object-cover object-center"
      // />
      <video
      src={source}
      loop
      muted
      autoPlay
      className="absolute left-0 top-0 size-full object-cover object-center"
      />
      ) : (
        <img
          src={source}
          alt="JORDAN"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}

      <div
        className={`relative ${
          isVideo ? "" : "items-end"
        }  z-10 flex size-full ${
          isTop ? "flex-col" : "flex-row"
        }  justify-between p-5 text-blue-50`}
      >
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
