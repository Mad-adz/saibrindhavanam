import { aboutBanner } from "../assets/images";
import { PanoramicBanner } from "../components";
const About = () => {
  const aboutPageContent = [
    {
      id: 1,
      title: "Shri Sai Brindhavanam Foundation",
      description:
        "Shri Sai Brindhavanam Foundation is a distinguished Section 8 Company registered under the Companies Act, dedicated to fostering philanthropic initiatives and serving the community through various charitable activities. Established with a profound commitment to humanitarian causes, the Foundation operates with the vision of uplifting lives and fostering spiritual wellness.",
    },
    {
      id: 2,
      title: "Mission and Vision",
      description:
        "Our mission is to empower communities, promote education, alleviate poverty, and preserve cultural heritage. We aim to achieve this by undertaking diverse charitable projects and initiatives that have a meaningful and lasting impact on society. Our vision is to create a more equitable and compassionate world where every individual has access to basic necessities and opportunities for growth.",
    },
    {
      id: 3,
      title: "Legal Status and Approvals",
      description:
        "Shri Sai Brindhavanam Foundation operates as a Section 8 Company, which allows us to focus exclusively on our charitable objectives without the primary goal of profit. We are proud recipients of 80G and 12A certifications, enabling our donors to avail tax benefits on their contributions. Additionally, we have received approval for Corporate Social Responsibility (CSR) activities, encouraging partnerships with corporations keen on making a positive difference in society.",
    },
    {
      id: 4,
      title: "Charitable Activities",
      description:
        "The Foundation is actively engaged in a range of charitable activities aimed at uplifting the underprivileged and fostering spiritual well-being. Our initiatives include:",
      list: [
        {
          label: "Temple Construction",
          details:
            "We are currently undertaking a noble project to build a sacred temple, dedicated to promoting spirituality and providing a place for communal worship and reflection.",
        },
        {
          label: "Education Initiatives",
          details:
            "We believe in the transformative power of education. Through scholarships, school support programs, and vocational training, we strive to empower youth and promote literacy.",
        },
        {
          label: "Healthcare Services",
          details:
            "Access to healthcare is a fundamental right. We organize medical camps, provide essential medical supplies, and support healthcare facilities to ensure better health outcomes for communities.",
        },
        {
          label: "Livelihood Support",
          details:
            "We assist marginalized groups by providing livelihood support through skill development programs, micro-enterprise initiatives, and employment opportunities.",
        },
        {
          label: "Community Development",
          details:
            "Our efforts extend to community development projects, such as sanitation drives, environmental sustainability programs, and infrastructure development in underserved areas.",
        },
      ],
    },
    {
      id: 5,
      title: "Donations and Support",
      description:
        "As a non-profit organization, we rely on the generosity of donors and supporters to fund our initiatives. Your donations play a crucial role in making a tangible difference in the lives of those in need and contribute towards the realization of our charitable projects, including the construction of the temple.",
    },
  ];
  return (
    <main className="relative">
      <PanoramicBanner bgImg={aboutBanner} title={"About"} description={""} />
      <section className="mt-[30rem] bg-amber-50 py-10">
        <div className="container mx-auto h-full px-4 sm:px-6 md:px-16 lg:px-20 xl:px-24">
          {aboutPageContent.map((value) => (
            <div key={value.id}>
              <h2 className="text-2xl font-bold mb-2 text-orange-500">
                {value.title}
              </h2>
              <p className="text-md indent-8 text-zinc-600 leading-relaxed mb-4">
                {value.description}
              </p>
              {value.list && (
                <ul className="list-disc ml-8 text-md leading-relaxed mb-4">
                  {value.list.map((item) => (
                    <li key={item.label}>
                      <p className="text-zinc-600">
                        <span className="text-orange-500 font-semibold">
                          {item.label} :{" "}
                        </span>
                        {item.details}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h2 className="text-2xl font-bold mb-2 text-orange-500">
              Get Involved
            </h2>
            <p className="text-md text-zinc-700 leading-relaxed mb-4">
              We invite individuals, businesses, and organizations who share our
              passion for philanthropy to join hands with us. Whether through
              financial contributions, volunteering, or collaborative
              partnerships, your support can help us create a brighter future
              for communities in need.
            </p>
            <p className="text-md text-zinc-700 leading-relaxed mb-4">
              Shri Sai Brindhavanam Foundation is committed to transparency,
              accountability, and impact. We ensure that every rupee donated is
              utilized efficiently to maximize the benefit for our beneficiaries
            </p>
            <p className="text-md text-zinc-700 leading-relaxed mb-4">
              Together, let us make a meaningful difference and sow the seeds of
              hope and transformation in society.
            </p>
            <p className="text-md text-zinc-700 leading-relaxed mb-4">
              For further inquiries, donations, or collaboration opportunities,
              please contact us. Your support is invaluable in enabling us to
              continue our mission of serving humanity and nurturing a culture
              of giving.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
