import React, { useRef, useState } from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const totalVideos = 4;
    const nextVideoRef = useRef(null);
    const upcomingVidIndex = (currentIndex + 1) % totalVideos;

    const handleMiniVideoClick = () => {
      setHasClicked(true);
      setCurrentIndex(upcomingVidIndex);
    }

    const getVideoSrc = (index) => `videos/jordan${index}.mp4`;
    

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => (prev + 1));
    }

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
          <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg'>
            <div className='mask-clip-path absolute-center absolute z-50 w-[900px] h-[900px] cursor-pointer overflow-hidden rounded-lg'>
              <div onClick={handleMiniVideoClick} className='origin-center flex w-full h-full cursor-pointer items-center justify-center rounded-lg bg-blue-75 scale-25 opacity-0 transition-all duration-500 ease-in hover:scale-50 hover:opacity-100'>
                <video
                  ref={nextVideoRef}
                  src={getVideoSrc(currentIndex + 1)}
                  loop
                  muted
                  id='current-video'
                  className='clipped-image w-full h-full object-cover object-center transition-transform duration-500 ease-in-out'
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
            />
          </div>
        </div>
      )
}

export default Hero