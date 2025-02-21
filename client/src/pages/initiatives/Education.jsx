import { education1, education2, educationBanner } from "../../assets/images";
import { DynamicSection, PanoramicBanner } from "../../components";
const Education = () => {
  const educationPageContent = [
    {
      id: 1,
      title: "Education Sponsorship by Shri Sai Brindhavanam Foundation",
      description:
        "At Shri Sai Brindhavanam Foundation, we firmly believe that education is the cornerstone of individual empowerment and societal progress. Our Education Sponsorship program is designed to support bright and deserving students from disadvantaged backgrounds, enabling them to access quality education and fulfill their potential.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 2,
      title: "Objective",
      description:
        "The primary objective of our Education Sponsorship initiative is to break the cycle of poverty by providing educational opportunities to talented students who lack the necessary resources. Through this program, we aim to:",
      list: [
        "Promote literacy and academic excellence among underprivileged children and youth.",
        "Empower deserving students to pursue higher education and career aspirations.",
        "Create a more equitable society by ensuring equal access to educational opportunities.",
        "Foster long-term socio-economic development by investing in human capital.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 3,
      hasImage: true,
      imgUrl: education1,
    },
    {
      id: 4,
      title: "Program Components",
      description:
        "Our Education Sponsorship program encompasses various components tailored to the specific needs of students at different educational stages:",
      list: [
        {
          label: "Scholarships",
          details:
            "We offer scholarships to cover tuition fees, textbooks, and other educational expenses for students pursuing primary, secondary, and higher education.",
        },
        {
          label: "Educational Materials",
          details:
            "In addition to financial support, we provide essential educational materials such as books, uniforms, stationery, and school supplies to ensure students have everything they need to succeed academically.",
        },
        {
          label: "Mentorship and Guidance",
          details:
            "We believe in holistic development. Therefore, we provide mentorship and guidance to sponsored students, offering career counselling, soft skills training, and personal development workshops.",
        },
        {
          label: "Skill Development",
          details:
            "For older students, we facilitate skill development workshops and vocational training programs to enhance employability and entrepreneurship skills.",
        },
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 5,
      title: "Selection Process",
      description:
        "Our Education Sponsorship program employs a rigorous selection process to identify deserving candidates based on academic merit, financial need, and potential for success. We collaborate with local schools, community leaders, and social workers to identify students who would benefit most from our support.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 6,
      title: "Impact",
      description:
        "The impact of our Education Sponsorship program extends beyond individual students. By investing in education, we contribute to:",
      list: [
        "Increased literacy rates within underserved communities.",
        "Enhanced employability and income generation opportunities.",
        "Reduction in socio-economic disparities.",
        "Long-term positive outcomes for families and communities.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 7,
      hasImage: true,
      imgUrl: education2,
    },
    {
      id: 8,

      title: "How You Can Help",
      description:
        "You can make a difference by supporting our Education Sponsorship program through:",
      list: [
        {
          label: "Financial Contributions",
          details:
            "Your donations directly fund educational expenses for sponsored students.",
        },
        {
          label: "Volunteering",
          details:
            "Share your skills and expertise by volunteering as a mentor or educator.",
        },
        {
          label: "Advocacy",
          details:
            "Spread awareness about the importance of education and encourage others to support our cause.",
        },
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 9,
      title: "Join Us",
      description: "",
      list: [
        "Together, we can empower the next generation of leaders and change-makers through the gift of education. Get involved today and help us transform lives one student at a time.",
        "For more information on our Education Sponsorship program or to contribute, please contact us.",
        "Thank you for supporting education and empowering dreams with Shri Sai Brindhavanam Foundation!",
      ],
      hasList: true,
      hasImage: false,
    },
  ];
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={educationBanner}
        title={"Education"}
        description={""}
      />
      <DynamicSection pageContent={educationPageContent} />
    </div>
  );
};

export default Education;
