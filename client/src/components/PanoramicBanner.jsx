import PropTypes from "prop-types";

const PanoramicBanner = ({ bgImg, title, description }) => {
  return (
    // <section className="h-[480px] absolute left-0 right-0 top-[5rem]">
    <section className="h-[25rem] fixed left-0 right-0 top-[5rem] w-full z-[-1]">
      <div
        className="h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container mx-auto h-full px-4 sm:px-6 md:px-16 lg:px-20 xl:px-24">
          <div className="flex items-center h-full">
            <div className="flex flex-col justify-center gap-4 text-white  font-bold">
              <span className="w-full text-2xl">{title}</span>
              <span className="w-full text-md">{description}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PanoramicBanner.propTypes = {
  bgImg: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PanoramicBanner;
