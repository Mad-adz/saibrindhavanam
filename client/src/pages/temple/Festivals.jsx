import { festivalsBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const Festivals = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={festivalsBanner}
        title={"Festivals"}
        description={""}
      />
      <section className="bg-amber-50 mt-[30rem] py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-2xl font-bold mb-2 text-orange-500">Festivals</h2>

          <p className="mb-10 indent-10 font-normal !text-lg !text-zinc-500">
            Coming soon...
          </p>
        </div>
      </section>
    </div>
  );
};

export default Festivals;
