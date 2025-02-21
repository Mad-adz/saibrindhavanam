import { AnimatePresence, motion } from "framer-motion";
import ReactPlayer from "react-player/youtube";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
const SpringModal = ({ isOpen, setIsOpen, videoUrl }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-2 md:p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-orange-600 to-amber-600 text-white p-1 rounded-lg w-full max-w-7xl shadow-xl cursor-default relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="absolute top-1 right-1 z-50 flex justify-end mb-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white hover:opacity-90 transition-opacity text-orange-600 font-semibold p-1 rounded-full cursor-pointer"
                  >
                    <MdClose size={20} />
                  </button>
                </div>
                <div
                  className="relative w-full rounded-md overflow-hidden"
                  style={{ paddingTop: "56.25%" }}
                >
                  <ReactPlayer
                    url={videoUrl}
                    width="100%"
                    height="100%"
                    controls={true}
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

SpringModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Boolean indicating modal visibility
  setIsOpen: PropTypes.func.isRequired, // Function to toggle modal state
  videoUrl: PropTypes.string.isRequired, // URL string of the video
};

export default SpringModal;
