import { useEffect, useState } from "react";
import { HeroSlider, SpringModal } from "../components";
import { youtubeLogo } from "../assets/images";
import { useAudio } from "../context/AudioContext";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/NW2CW-xX9vE?si=PtqEduWjbdGOyW0K"
  );

  //
  const { isPlaying, togglePlay } = useAudio();
  const [wasPlayingBeforeModal, setWasPlayingBeforeModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (isPlaying) {
        setWasPlayingBeforeModal(true);
        togglePlay();
      }
    } else {
      if (wasPlayingBeforeModal) {
        togglePlay();
        setWasPlayingBeforeModal(false);
      }
    }
  }, [isOpen, isPlaying, togglePlay, wasPlayingBeforeModal]);
  //
  return (
    <main className="h-[calc(100vh-5rem)] bg-amber-50 mt-[5rem] relative">
      <HeroSlider />
      <div className="w-full grid place-content-center absolute bottom-20 z-40">
        <h3 className="text-white font-bold text-md md:text-2xl mb-4">
          Shri Sai Brindhavanam Foundation
        </h3>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium px-2 py-1 rounded hover:opacity-95 transition-opacity cursor-pointer flex items-center gap-2 max-w-fit mx-auto"
        >
          <img src={youtubeLogo} alt="YouTube" className="size-8" />
          <span>YouTube</span>
        </button>
        {/* <SpringModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          videoUrl={videoUrl}
        /> */}
      </div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} videoUrl={videoUrl} />
    </main>
  );
};

export default Home;
