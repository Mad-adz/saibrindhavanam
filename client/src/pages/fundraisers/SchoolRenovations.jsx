import {
  schoolRenovation1,
  schoolRenovation2,
  schoolRenovationBanner,
} from "../../assets/images";
import { DynamicSection, PanoramicBanner } from "../../components";

const SchoolRenovations = () => {
  const schoolRenovationsPageContent = [
    {
      id: 1,
      title:
        "School Renovation Sponsorship by Shri Sai Brindhavanam Foundation",
      description:
        "Shri Sai Brindhavanam Foundation is dedicated to improving educational facilities and creating conducive learning environments for students through our School Renovation Sponsorship program. We recognize the importance of providing quality infrastructure for schools to enhance the educational experience and opportunities for children. Our program focuses on renovating and upgrading schools in underserved communities to ensure a safe, inspiring, and enriching educational space for students.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 2,
      title: "Objective",
      description:
        "The primary objectives of our School Renovation Sponsorship program are:",
      list: [
        "To enhance the quality of education by improving school infrastructure and facilities.",
        "To create safe and comfortable learning environments that promote student well-being and academic success.",
        "To support schools in underserved areas by addressing infrastructure gaps and renovation needs.",
        "To inspire and motivate students by providing them with modern and functional school facilities.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 3,
      hasImage: true,
      imgUrl: schoolRenovation1,
    },
    {
      id: 4,
      title: "Program Components",
      description:
        "Our School Renovation Sponsorship program encompasses the following components to achieve our objectives:",
      list: [
        {
          label: "Infrastructure Upgrades",
          details:
            "We undertake renovations and repairs to school buildings, classrooms, libraries, laboratories, and other educational facilities to improve functionality and aesthetics.",
        },
        {
          label: "Safety and Accessibility Improvements",
          details:
            "We prioritize safety measures such as repairing roofs, floors, and electrical systems, as well as making schools accessible for students with disabilities.",
        },
        {
          label: "Learning Environment Enhancement",
          details:
            "We provide furniture, equipment, and resources to create a stimulating and conducive learning environment for students and teachers.",
        },
        {
          label: "Water, Sanitation, and Hygiene (WASH) Facilities",
          details:
            "We support the installation of clean water sources, sanitation facilities, and hygiene programs in schools to promote health and well-being.",
        },
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 5,
      title: "Impact",
      description:
        "Through our School Renovation Sponsorship program, we aim to achieve the following impact:",
      list: [
        "Improved academic performance and student engagement due to upgraded facilities.",
        "Enhanced pride and morale among students, teachers, and the community.",
        "Increased school attendance and retention rates.",
        "Strengthened community partnerships and collaboration for sustainable educational development.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 6,
      hasImage: true,
      imgUrl: schoolRenovation2,
    },
    {
      id: 7,

      title: "How You Can Help",
      description:
        "You can support our School Renovation Sponsorship program and contribute to transforming schools by:",
      list: [
        "Making financial contributions to fund renovation projects, infrastructure upgrades, and facility improvements.",
        "Donating materials, equipment, or supplies needed for school renovations.",
        "Volunteering your time and skills to assist in renovation work, painting, or landscaping.",
        "Advocating for quality education and improved school infrastructure in underserved communities.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 8,
      title: "Join Us",
      description: "",
      list: [
        "Together, we can create brighter futures for children and empower communities through education. Your support can make a lasting impact on the lives of students and contribute to building a stronger educational foundation for generations to come.",
        "For more information on our School Renovation Sponsorship program or to contribute, please contact us.",
        "Thank you for partnering with Shri Sai Brindhavanam Foundation in our mission to transform schools and empower young minds!",
      ],
      hasList: true,
      hasImage: false,
    },
  ];
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={schoolRenovationBanner}
        title={"School Renovations"}
        description={""}
      />
      <DynamicSection pageContent={schoolRenovationsPageContent} />
      {/* <section className="mt-[30rem] bg-amber-50 py-10">
        <div className="container mx-auto h-full px-4 sm:px-6 md:px-16 lg:px-20 xl:px-24">
          {schoolRenovationsPageContent.map((value) => (
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

export default SchoolRenovations;
