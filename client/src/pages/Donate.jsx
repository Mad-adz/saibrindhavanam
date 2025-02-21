import { donateBanner } from "../assets/images";
import { PanoramicBanner } from "../components";

const Donate = () => {
  return (
    <>
      <div className="relative">
        <PanoramicBanner
          bgImg={donateBanner}
          title={"Donate"}
          description={""}
        />
      </div>
      <section className="bg-amber-50 mt-[30rem] py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-2xl font-bold mb-2 text-orange-500">Donations</h2>
          <p className="mb-10 indent-10 font-normal !text-lg !text-zinc-500">
            <span className="text-zinc-500 font-semibold">
              SHRI SAI BRINDHAVANAM FOUNDATION
            </span>
            is the authorized body to control and manage the day to day
            activities for the temple. It also provide various other services
            like food donation, Feed to needy peoples, elderly care services &
            educational support for below poverty kids.
          </p>
          <p className="mb-4 font-normal !text-lg !text-zinc-500">
            You can contribute or donate via Bank Transfer using the following
            information.
          </p>
          <div className="text-zinc-600">
            <p>
              <span className="text-zinc-700 font-semibold">Name : </span>SHRI
              SAI BRINDHAVANAM FOUNDATION
            </p>
            <p>
              <span className="text-zinc-700 font-semibold">Acc No : </span>
              269705001079
            </p>
            <p>
              <span className="text-zinc-700 font-semibold">Bank : </span>
              ICICI Bank
            </p>
            <p>
              <span className="text-zinc-700 font-semibold">Branch : </span>
              Ramapuram
            </p>
            <p>
              <span className="text-zinc-700 font-semibold">IFSC Code : </span>
              ICIC0002697
            </p>
            <p>
              <span className="text-zinc-700 font-semibold">MICR Code : </span>
              600229105
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
