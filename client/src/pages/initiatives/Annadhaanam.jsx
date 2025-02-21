import {
  annadhaanam1,
  annadhaanam2,
  annadhaanamBanner,
} from "../../assets/images";
import { DynamicSection, PanoramicBanner } from "../../components";
const Annadhaanam = () => {
  const annadhaanamPageContent = [
    {
      id: 1,
      title: "Annadanam Sponsorship by Shri Sai Brindhavanam Foundation",
      description:
        "At Shri Sai Brindhavanam Foundation, we believe in the sacred tradition of Annadanam (food donation) as a means of serving humanity and nurturing the spirit of compassion. Our Annadanam Sponsorship program is dedicated to providing nourishing meals to the needy and underserved, ensuring that no one goes hungry in our communities.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 2,
      title: "Objective",
      description:
        "The primary objectives of our Annadanam Sponsorship program are:",
      list: [
        "To alleviate hunger and food insecurity among disadvantaged individuals and families.",
        "To promote the value of selfless service (seva) and compassion towards those in need.",
        "To foster a sense of community and solidarity through the sharing of food.",
        "To uphold the dignity and well-being of every individual by meeting their basic nutritional needs.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 3,
      hasImage: true,
      imgUrl: annadhaanam1,
    },
    {
      id: 4,
      title: "Program Components",
      description:
        "Our Annadanam Sponsorship program encompasses the following components to fulfill our objectives:",
      list: [
        {
          label: "Daily Meal Distribution",
          details:
            "We organize regular distributions of nutritious meals to homeless individuals, elderly people, orphanages, and economically disadvantaged communities.",
        },
        {
          label: "Feeding Programs",
          details:
            "We conduct special feeding programs during festivals, religious occasions, and community gatherings to celebrate the spirit of giving and unity.",
        },
        {
          label: "Community Kitchens",
          details:
            "We support community kitchens (Anna Chhatras) that provide free meals to those in need on a daily basis.",
        },
        {
          label: "Food Relief during Emergencies",
          details:
            "During natural disasters or emergencies, we provide emergency food relief to affected communities to ensure immediate access to meals.",
        },
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 5,
      title: "Selection Process",
      description:
        "Our Annadanam Sponsorship program identifies beneficiaries based on need, vulnerability, and socio-economic factors. We collaborate with local community organizations, shelters, and social workers to reach those who are most in need of food assistance.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 6,
      title: "Impact",
      description:
        "Through our Annadhaanam Sponsorship program, we aim to achieve the following impact:",
      list: [
        "Reduced hunger and malnutrition within marginalized communities.",
        "Improved health outcomes and well-being through regular access to nutritious meals.",
        "Strengthened social bonds and a sense of belonging within communities.",
        "Enhanced awareness and engagement in charitable activities among volunteers and supporters.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 7,
      hasImage: true,
      imgUrl: annadhaanam2,
    },
    {
      id: 8,

      title: "How You Can Help",
      description:
        "You can support our Annadhaanam Sponsorship program and make a meaningful impact by:",
      list: [
        "Making financial contributions to sponsor meals and food distribution initiatives.",
        "Donating food items or resources to support our feeding programs.",
        "Volunteering your time and efforts to assist in meal preparation, distribution, or organizing feeding events.",
        "Spreading awareness about the importance of food security and the role of Annadanam in serving the needy.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 9,
      title: "Join Us",
      description: "",
      list: [
        "Together, we can combat hunger and uphold the principle of Annadanam as a noble act of selfless service. Your support can make a lasting difference in the lives of those struggling with food insecurity.",
        "For more information on our Annadanam Sponsorship program or to contribute, please contact us.",
        "Thank you for joining hands with Shri Sai Brindhavanam Foundation in feeding the hungry and nourishing the soul!",
      ],
      hasList: true,
      hasImage: false,
    },
  ];
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={annadhaanamBanner}
        title={"Annadhaanam"}
        description={""}
      />
      <DynamicSection pageContent={annadhaanamPageContent} />
    </div>
  );
};

export default Annadhaanam;
