import PropTypes from "prop-types";

const PanoramicBanner = ({ bgImg, title, description, align, color }) => {
  return (
    <section className="h-[25rem] fixed left-0 right-0 top-[5rem] w-full z-[-1]">
      <div
        className="h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {/* <div className="container mx-auto h-full px-4 sm:px-6 md:px-16 lg:px-20 xl:px-24"> */}
          <div
            className={`flex items-center h-full ${
              align === "center" && "justify-center"
            }`}
          >
            <div
              className={`flex flex-col justify-center items-center gap-4 font-bold ${
                color === "orange" ? "text-orange-500" : "text-white"
              }`}
            >
              <h3 className={"w-full text-2xl"}>{title}</h3>
              <p className="w-full text-md">{description}</p>
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
  align: PropTypes.string,
  color: PropTypes.string,
};

export default PanoramicBanner;
