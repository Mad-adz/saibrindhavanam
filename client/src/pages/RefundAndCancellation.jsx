import { lordGaneshBannerSvg } from "../assets/images";
import { PanoramicBanner } from "../components";
import { rcContent } from "../utils/data/refund_and_cancellation";
const RefundAndCancellation = () => {
  return (
    <>
      <div className="relative">
        <PanoramicBanner
          bgImg={lordGaneshBannerSvg}
          title={"Refund and Cancellation Policy"}
          description={""}
          align={"center"}
          color={"orange"}
        />
      </div>
      <section className="bg-amber-50 mt-[30rem] py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-orange-500">
              {rcContent.refund_and_cancellation.title}:
            </h2>
            <h3 className="text-lg font-semibold text-zinc-600 mb-2">
              {rcContent.refund_and_cancellation.label}
            </h3>
            <ol className="list-decimal list-inside">
              {rcContent.refund_and_cancellation.details.map((item, index) => (
                <li
                  key={index}
                  className="text-md text-zinc-700 leading-loose mb-4"
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

export default RefundAndCancellation;
