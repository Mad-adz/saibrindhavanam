import { lordGaneshBannerSvg } from "../assets/images";
import { PanoramicBanner } from "../components";
import { tcContent } from "../utils/data/terms_and_conditions";

const TermsAndConditions = () => {
  return (
    <>
      <div className="relative">
        <PanoramicBanner
          bgImg={lordGaneshBannerSvg}
          title={"Terms And Conditions"}
          description={""}
        />
      </div>
      <section className="bg-amber-50 mt-[30rem] py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-2xl font-bold mb-2 text-orange-500">
            Terms And Conditions - Shri Sai Brindhavanam Foundation.
          </h2>
          <div>
            <h3 className="text-lg font-semibold text-zinc-500 mb-2">
              {tcContent.introduction.label}
            </h3>
            <ol className="list-decimal list-inside">
              {tcContent.introduction.details.map((item, index) => (
                <li
                  key={index}
                  className="text-md text-zinc-600 leading-loose mb-4"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-500 mb-2">
              {tcContent.terms_of_use.label}
            </h3>
            <ol className="list-decimal list-inside">
              {tcContent.terms_of_use.details.map((item, index) => (
                <li
                  key={index}
                  className="text-md text-zinc-600 leading-loose mb-4"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
