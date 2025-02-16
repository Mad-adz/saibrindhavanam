import { contactBanner } from "../assets/images";
import { ContactCard, PanoramicBanner } from "../components";
const Contact = () => {
  const contactInformations = [
    {
      id: 1,
      title: "Corporate Address :",
      address: {
        line1: "Shri Sai Brindhavanam Foundation,",
        line2: "Flat 1A, Block 1, 2A,",
        line3: "Radha Krishnan Saalai",
        city: "Valasaravakkam,",
        district: "Chennai",
        state: "Tamil Nadu",
        country: "India.",
        pin: "600087,",
      },
      contact: null,
    },
    {
      id: 2,
      title: "Temple Address :",
      address: {
        line1: "Shri Sai Brindhavanam Temple,",
        line2: "East Sannanallur, Sannanallur PO,",
        line3: "Near Nannilam Railway Station",
        city: "",
        district: "Nagappattinam",
        state: "Tamil Nadu",
        country: "India.",
        pin: "609504,",
      },
      contact: null,
    },
    {
      id: 3,
      title: "Contact Us :",
      address: null,
      contact: {
        mobile: "+91 9876543210",
        email: "contact@saibrindhavanam.com",
      },
    },
  ];
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={contactBanner}
        title={"Connect"}
        description={""}
      />

      <section className="bg-amber-50 mt-[30rem] py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-2xl font-bold mb-2 text-orange-500">
            Contact Us
          </h2>

          <p className="mb-10 indent-10 font-normal !text-lg !text-zinc-500">
            Whether you have questions about our mission, need assistance with
            temple services, or have suggestions for improvement, we welcome
            your inquiries with open hearts.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-16 h-full min-h-full">
            {contactInformations.map((value) => (
              <div key={value.id} className="h-full">
                <ContactCard value={value} />
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-2 text-orange-500">Direction</h2>
          <p className="mb-10 indent-10 font-normal !text-lg !text-zinc-500">
            This Temple can be reached by road & railway station at Nannilam
            (Between Mayliaduthurai to Thiruvarur) and Sannanallur Bus stop is
            near the station. Its 100 meters away from the Nannilam Railway
            station.
          </p>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3764.9880529096085!2d79.65109025384741!3d10.884839994635295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDUzJzA1LjQiTiA3OcKwMzknMTAuNSJF!5e1!3m2!1sen!2sin!4v1718012348060!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowfullscreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
              ></iframe>
            </div>
            <div className="col-span-1 lg:col-span-5">
              <form className="flex flex-col gap-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 text-left font-medium !text-zinc-900">
                      First Name
                    </label>
                    <input
                      placeholder="First Name"
                      name="first-name"
                      className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-left font-medium !text-zinc-900">
                      Last Name
                    </label>
                    <input
                      placeholder="Last Name"
                      name="last-name"
                      className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 text-left font-medium !text-zinc-900">
                    Your Email
                  </label>
                  <input
                    placeholder="name@email.com"
                    name="email"
                    className="block w-full px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 text-left font-medium !text-zinc-900">
                    Your Message
                  </label>
                  <textarea
                    className="block w-full h-24 px-5 py-2.5 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-zinc-200 rounded-lg md:h-36 focus:border-orange-300 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  />
                </div>
                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
