import React from "react";

const AnimatedTitle = () => {
  return (
    <div>
      <div className="text-4xl uppercase font-general font-semibold leading-tight text-center px-2 md:text-[4rem]">
        <p className="max-w-[1200px]">
          From the <span className="text-red-600 font-light">streets</span> to
          the <span className="text-red-600 font-light">court</span>,{" "}
          <span className="text-red-600  font-bold">Jordan</span> stands for
          those who defy <span className="text-red-600 font-light">limits</span>{" "}
          and define <span className="text-red-600 font-light">eras</span>.
        </p>
      </div>
    </div>
  );
};

export default AnimatedTitle;
