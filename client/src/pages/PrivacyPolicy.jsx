import { lordGaneshBannerSvg } from "../assets/images";
import { PanoramicBanner } from "../components";
import { ppContent } from "../utils/data/privacy_policy";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="relative">
        <PanoramicBanner
          bgImg={lordGaneshBannerSvg}
          title={"Privacy Policy"}
          description={""}
          align={"center"}
          color={"orange"}
        />
      </div>
      <section className="bg-amber-50 mt-[30rem] py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-2xl font-bold mb-2 text-orange-500">
            Privacy Policy - Shri Sai Brindhavanam Foundation.
          </h2>
          <div className="mb-4">
            {ppContent.privacyPolicy.map((item) => (
              <div key={item.id}>
                <h3 className="text-lg font-semibold text-orange-500 mb-2">
                  {item.title}:
                </h3>
                <p className="text-md indent-10 text-zinc-700 leading-loose mb-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <address className="mb-4">
            <h2 className="text-2xl font-bold mb-2 text-orange-500">
              {ppContent.grievanceOfficeData.title}:
            </h2>
            <div>
              {ppContent.grievanceOfficeData.details.map((item) => (
                <p key={item.id}>
                  <span>{item.label} : </span>
                  {item.value}
                </p>
              ))}
            </div>
          </address>
          {/* <div>
            <h2 className="text-2xl font-bold mb-2 text-orange-500">
              {ppContent.refund_and_cancellation.title}:
            </h2>
            <h3 className="text-lg font-semibold text-zinc-600 mb-2">
              {ppContent.refund_and_cancellation.label}
            </h3>
            <ol className="list-decimal list-inside">
              {ppContent.refund_and_cancellation.details.map((item, index) => (
                <li
                  key={index}
                  className="text-md text-zinc-700 leading-loose mb-4"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
