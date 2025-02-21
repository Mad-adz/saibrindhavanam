import { tourismBanner } from "../assets/images";
import { PanoramicBanner } from "../components";
import { nearestTemples, templeDetails } from "../utils/data";
const Tourism = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={tourismBanner}
        title={"Tourism"}
        description={""}
      />
      <section className="bg-amber-50 mt-[30rem] py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-2xl font-bold mb-2 text-orange-500">
            Spiritual Tourism
          </h2>
          <p className="mb-8 indent-10 font-normal !text-lg !text-zinc-500">
            The Navagraha Temples of Tamil Nadu, dedicated to the nine planetary
            deities, are located around Kumbakonam and Mayiladuthurai. Along
            with three other historic temples, these sacred sites are easily
            accessible from Shri Sai Brindhavanam, offering a divine spiritual
            journey.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">
            Nearest Historic Temples
          </h2>
          <div className="relative flex flex-col w-full h-full overflow-scroll scrollbar-hidden text-zinc-800 shadow-orange-100 shadow-md rounded-lg bg-clip-border bg-orange-100/50">
            <table className="w-full text-left table-auto min-w-max">
              <thead className="bg-orange-200/50">
                <tr>
                  {nearestTemples &&
                    nearestTemples.headings.map((item, index) => (
                      <th
                        key={index}
                        className="p-4 border-b border-orange-100"
                      >
                        <span className="block text-md font-semibold leading-none text-orange-500">
                          {item}
                        </span>
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {nearestTemples &&
                  nearestTemples.temples.map((temple) => (
                    <tr
                      key={temple.id}
                      className="hover:bg-orange-50 cursor-pointer"
                    >
                      <td className="p-4 border-b border-slate-200">
                        <span className="block text-md text-slate-800">
                          {temple.id}
                        </span>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <span className="block text-md text-slate-800">
                          {temple.title}
                        </span>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <span className="block text-md text-slate-800">
                          {temple.deity}
                        </span>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <span className="block text-md text-slate-800">
                          {temple.location}
                        </span>
                      </td>
                      <td className="p-4 border-b border-slate-200">
                        <span className="block text-md text-slate-800">
                          {temple.distance}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="bg-amber-50 py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="grid grid-cols-1 gap-12">
            {templeDetails.map((temple, index) => (
              <div
                key={temple.id}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 h-full"
              >
                <div className="w-full">
                  <img
                    src={temple.image}
                    alt={temple.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div
                  className={`p-6 rounded-lg shadow-lg h-full ${
                    index % 2 === 0 ? "lg:order-first" : ""
                  }`}
                >
                  <h2 className="text-xl lg:text-3xl font-bold text-orange-600 mb-3">
                    {temple.id}. {temple.title}
                  </h2>
                  <p className="text-zinc-500 mb-2">
                    <span className="text-zinc-900">Deity : </span>
                    {temple.deity}
                  </p>
                  <p className="text-zinc-500 mb-4">
                    <span className="text-zinc-900">Location : </span>
                    {temple.location}
                  </p>
                  <p className="text-zinc-700 indent-10 mb-2">
                    {temple.description.para1}
                  </p>
                  <p className="text-zinc-700 indent-10 mb-4">
                    {temple.description.para2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tourism;
