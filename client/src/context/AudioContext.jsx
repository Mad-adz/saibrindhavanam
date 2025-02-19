import { createContext, useContext, useRef, useState, useEffect } from "react";
import { backgroundMusic } from "../assets/audio";
import PropTypes from "prop-types";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(backgroundMusic);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    const audio = audioRef.current;

    const playAudio = () => {
      if (audio.paused) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error("Autoplay failed:", err));
      }
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ audioRef, isPlaying, togglePlay }}>
      {children}
    </AudioContext.Provider>
  );
};

AudioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAudio = () => useContext(AudioContext);
