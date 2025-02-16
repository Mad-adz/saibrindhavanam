import { gowshala1, gowshala2, gowshalaBanner } from "../../assets/images";
import { DynamicSection, PanoramicBanner } from "../../components";

const Gowshala = () => {
  const gowshalaPageContent = [
    {
      id: 1,
      title: "Gowshala Sponsorship by Shri Sai Brindhavanam Foundation",
      description:
        "Shri Sai Brindhavanam Foundation is dedicated to the welfare and protection of cows through our Gowshala Sponsorship program. We recognize the sacred significance of cows in our culture and the importance of preserving and caring for these gentle creatures. Our Gowshala Sponsorship program aims to support and sustain cow shelters (Gowshalas) where cows are provided with proper care, shelter, and medical attention.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 2,
      title: "Objective",
      description:
        "The primary objectives of our Gowshala Sponsorship program are:",
      list: [
        "To promote the welfare and protection of cows, which are considered sacred in our tradition.",
        "To provide a safe and nurturing environment for rescued, abandoned, or aged cows.",
        "To raise awareness about the importance of cow conservation and ethical treatment of animals.",
        "To support sustainable and humane practices in cow care and management.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 3,
      hasImage: true,
      imgUrl: gowshala1,
    },
    {
      id: 4,
      title: "Program Components",
      description:
        "Our Gowshala Sponsorship program encompasses the following components to achieve our objectives:",
      list: [
        {
          label: "Cow Care and Nutrition",
          details:
            "We ensure that cows in Gowshalas receive proper nutrition, including fodder, grains, and supplements, to maintain their health and well-being.",
        },
        {
          label: "Medical Treatment and Veterinary Care",
          details:
            "We fund medical treatments, vaccinations, and veterinary care for sick or injured cows to ensure they receive timely and appropriate healthcare.",
        },
        {
          label: "Shelter Maintenance and Infrastructure Development",
          details:
            "We support the maintenance and improvement of Gowshala facilities, including building repairs, fencing, and water supply systems.",
        },
        {
          label: "Educational Outreach",
          details:
            "We conduct educational programs and workshops to raise awareness about the significance of cows and promote compassionate treatment towards all animals.",
        },
      ],
      hasList: true,
      hasImage: false,
    },
    // {
    //   id: 5,
    //   title: "Selection Process",
    //   description:
    //     "Our Healthcare Sponsorship program identifies beneficiaries based on financial need, medical urgency, and potential impact on health outcomes. We work closely with healthcare providers, social workers, and community leaders to identify individuals who would benefit most from our support.",
    //   hasList: false,
    //   hasImage: false,
    // },
    {
      id: 5,
      title: "Impact",
      description:
        "Through our Gowshala Sponsorship program, we aim to achieve the following impact:",
      list: [
        "Improved quality of life for cows by providing them with a safe and caring environment.",
        "Preservation of traditional values and cultural heritage associated with cow protection.",
        "Education and awareness among communities about the importance of animal welfare and ethical farming practices.",
        "Contribution to sustainable agriculture and environmental conservation through responsible cow care.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 6,
      hasImage: true,
      imgUrl: gowshala2,
    },
    {
      id: 7,

      title: "How You Can Help",
      description:
        "You can support our Gowshala Sponsorship program and contribute to the well-being of cows by:",
      list: [
        "Making financial contributions to fund cow care, medical treatments, and shelter improvements.",
        "Donating fodder, feed, or other essential supplies for cows in Gowshalas.",
        "Volunteering your time and skills to assist in Gowshala maintenance and management.",
        "Advocating for ethical treatment of animals and supporting sustainable farming practices.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 8,
      title: "Join Us",
      description: "",
      list: [
        "Together, we can uphold the values of compassion and respect for all living beings, including cows. Your support can make a meaningful difference in the lives of these gentle creatures and promote harmonious coexistence between humans and animals.",
        "For more information on our Gowshala Sponsorship program or to contribute, please contact us.",
        "Thank you for joining Shri Sai Brindhavanam Foundation in our commitment to cow welfare and ethical stewardship of our natural resources!",
      ],
      hasList: true,
      hasImage: false,
    },
  ];
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={gowshalaBanner}
        title={"Gowshala"}
        description={""}
      />
      <DynamicSection pageContent={gowshalaPageContent} />
      {/* <section className="mt-[30rem] bg-amber-50 py-10">
        <div className="container mx-auto h-full px-4 sm:px-6 md:px-16 lg:px-20 xl:px-24">
          {gowshalaPageContent.map((value) => (
            <div key={value.id}>
              {value.hasImage ? (
                <>
                  <div className="flex justify-center items-center my-4">
                    <img
                      src={value.imgUrl}
                      alt=""
                      className="w-full md:w-1/2"
                    />
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-orange-500">
                    {value.title}
                  </h2>
                  <p
                    className={`text-md indent-8 text-zinc-600 leading-loose mb-4 ${
                      value.hasList && "font-semibold"
                    }`}
                  >
                    {value.description}
                  </p>
                  {value.list && (
                    <ul className="list-disc ml-8 text-md leading-loose mb-4">
                      {value.list.map((item, index) => (
                        <li key={index}>
                          {item.label ? (
                            <>
                              <p className="text-zinc-600">
                                <span className="text-orange-500 font-semibold">
                                  {item.label} :{" "}
                                </span>
                                {item.details}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="text-zinc-600">{item}</p>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Gowshala;
