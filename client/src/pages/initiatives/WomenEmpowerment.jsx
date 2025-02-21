import {
  womenEmpowerment1,
  womenEmpowerment2,
  womenEmpowermentBanner,
} from "../../assets/images";
import { DynamicSection, PanoramicBanner } from "../../components";

const WomenEmpowerment = () => {
  const womenEmpowermentPageContent = [
    {
      id: 1,
      title:
        "Women's Empowerment Sponsorship by Shri Sai Brindhavanam Foundation",
      description:
        "Shri Sai Brindhavanam Foundation is committed to promoting gender equality and empowering women to reach their full potential. Our Women's Empowerment Sponsorship program is dedicated to providing support and resources to women and girls from marginalized backgrounds, enabling them to overcome obstacles, pursue their aspirations, and become agents of change in their communities.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 2,
      title: "Objective",
      description:
        "The primary objectives of our Women's Empowerment Sponsorship program are:",
      list: [
        "To promote gender equality and women's rights by addressing systemic barriers and social inequalities.",
        "To provide educational opportunities, skill-building programs, and vocational training to enhance women's economic independence and livelihood opportunities.",
        "To support women's health and well-being through access to healthcare services, reproductive health education, and maternal care initiatives.",
        "To foster leadership development, self-confidence, and empowerment among women and girls, enabling them to advocate for their rights and participate in decision-making processes.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 3,
      hasImage: true,
      imgUrl: womenEmpowerment1,
    },
    {
      id: 4,
      title: "Program Components",
      description:
        "Our Women's Empowerment Sponsorship program comprises various components aimed at addressing the multifaceted needs of women and girls:",
      list: [
        {
          label: "Education Scholarships",
          details:
            "We provide scholarships and financial assistance to support girls' education at all levels, from primary school to higher education, ensuring they have equal access to learning opportunities.",
        },
        {
          label: "Skill Development Workshops",
          details:
            "We organize workshops and training programs focused on enhancing women's skills in areas such as entrepreneurship, financial literacy, vocational training, and leadership development.",
        },
        {
          label: "Health and Wellness Initiatives",
          details:
            "We offer healthcare services, including medical check-ups, reproductive health education, and maternal care support, to improve women's health outcomes and well-being.",
        },
        {
          label: "Microfinance and Livelihood Support",
          details:
            "We facilitate access to microfinance initiatives, self-help groups, and income-generating activities to empower women economically and promote financial independence.",
        },
        {
          label: "Legal Aid and Advocacy",
          details:
            "We provide legal aid services, counseling, and support to women facing gender-based violence, discrimination, and other forms of injustice. Additionally, we advocate for policy changes and social reforms to advance women's rights and gender equality.",
        },
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 5,
      title: "Selection Process",
      description:
        "Our Women's Empowerment Sponsorship program identifies beneficiaries through a participatory and inclusive process, considering factors such as socio-economic status, educational background, family circumstances, and specific needs. We collaborate with local communities, women's groups, and grassroots organizations to ensure targeted support reaches those who need it most.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 6,
      title: "Impact",
      description:
        "Through our Women's Empowerment Sponsorship program, we aim to achieve the following impact:",
      list: [
        "Increased access to education and skill-building opportunities for women and girls.",
        "Enhanced economic empowerment and livelihood prospects for women, leading to poverty reduction and sustainable development.",
        "Improved health outcomes and well-being for women and their families through access to healthcare and reproductive health services.",
        "Strengthened social cohesion, community resilience, and women's leadership roles in decision-making processes.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 7,
      hasImage: true,
      imgUrl: womenEmpowerment2,
    },
    {
      id: 8,

      title: "How You Can Help",
      description:
        "You can support our Women's Empowerment Sponsorship program and contribute to positive change by:",
      list: [
        "Making financial contributions to fund education scholarships, skill development workshops, and healthcare initiatives for women and girls.",
        "Volunteering your time and expertise to mentor, train, or advocate for women's empowerment.",
        "Donating resources or sponsoring specific projects that empower women and advance gender equality.",
        "Advocating for women's rights and gender equality in your community and beyond.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 9,
      title: "Join Us",
      description: "",
      list: [
        "Together, we can break down barriers, challenge stereotypes, and build a more inclusive and equitable society where every woman and girl can thrive. Your support can make a lasting difference in the lives of women and their communities.",
        "For more information on our Women's Empowerment Sponsorship program or to contribute, please contact us.",
        "Thank you for standing with Shri Sai Brindhavanam Foundation in empowering women and transforming lives!",
      ],
      hasList: true,
      hasImage: false,
    },
  ];
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={womenEmpowermentBanner}
        title={"Women's Empowerment"}
        description={""}
      />
      <DynamicSection pageContent={womenEmpowermentPageContent} />
    </div>
  );
};

export default WomenEmpowerment;
