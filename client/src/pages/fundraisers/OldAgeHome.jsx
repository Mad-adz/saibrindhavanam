import {
  oldAgeHome1,
  oldAgeHome2,
  oldAgeHomeBanner,
} from "../../assets/images";
import { DynamicSection, PanoramicBanner } from "../../components";

const OldAgeHome = () => {
  const oldAgeHomePageContent = [
    {
      id: 1,
      title: "Old Age Homes Sponsorship by Shri Sai Brindhavanam Foundation:",
      description:
        "Shri Sai Brindhavanam Foundation is committed to providing compassionate care and support to senior citizens through our Old Age Homes Sponsorship program. We recognize the importance of ensuring dignified and comfortable living conditions for the elderly who may be without family support or facing social isolation. Our program aims to improve the quality of life for seniors by sponsoring and enhancing services at old age homes, fostering a nurturing and caring environment where they can age with dignity and respect.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 2,
      title: "Objective",
      description:
        "The primary objectives of our Old Age Homes Sponsorship program are:",
      list: [
        "To provide holistic care and support services for elderly residents in old age homes.",
        "To promote social inclusion and alleviate loneliness among seniors through community engagement and activities.",
        "To enhance the physical, emotional, and mental well-being of elderly individuals.",
        "To advocate for the rights and dignity of senior citizens and raise awareness about issues affecting the aging population.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 3,
      hasImage: true,
      imgUrl: oldAgeHome1,
    },
    {
      id: 4,
      title: "Program Components",
      description:
        "Our Old Age Homes Sponsorship program encompasses the following components to achieve our objectives:",
      list: [
        {
          label: "Basic Amenities and Infrastructure Support",
          details:
            "We sponsor improvements to old age home facilities, including renovations, repairs, and upgrades to ensure safety, comfort, and accessibility for residents.",
        },
        {
          label: "Healthcare Services",
          details:
            "We support medical care, wellness programs, and access to healthcare services for elderly residents, including regular health check-ups and medication support.",
        },
        {
          label: "Recreational and Social Activities",
          details:
            "We organize recreational activities, cultural events, and social gatherings to promote interaction, companionship, and emotional well-being among seniors.",
        },
        {
          label: "Nutrition and Meal Sponsorship",
          details:
            "We provide nutritious meals and dietary support to ensure proper nutrition and health for elderly residents.",
        },
        {
          label: "Skill Development and Education",
          details:
            "We offer skill development workshops, educational programs, and vocational training opportunities to empower seniors and enhance their sense of purpose and fulfillment.",
        },
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 5,
      title: "Impact",
      description:
        "Through our Old Age Homes Sponsorship program, we aim to achieve the following impact:",
      list: [
        "Improved quality of life and happiness among elderly residents in old age homes.",
        "Enhanced physical and mental health outcomes through personalized care and support.",
        "Reduced social isolation and loneliness through community engagement and meaningful activities.",
        "Advocacy for senior rights and the importance of dignified aging.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 6,
      hasImage: true,
      imgUrl: oldAgeHome2,
    },
    {
      id: 7,

      title: "How You Can Help",
      description:
        "You can support our Old Age Homes Sponsorship program and make a difference in the lives of senior citizens by:",
      list: [
        "Making financial contributions to fund old age home sponsorships, services, and programs.",
        "Donating essential items, clothing, or supplies needed for elderly residents.",
        "Volunteering your time and skills to assist in organizing activities or providing companionship to seniors.",
        "Advocating for policies and initiatives that prioritize the well-being and rights of senior citizens.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 8,
      title: "Join Us",
      description: "",
      list: [
        "Together, we can create a supportive and caring environment for senior citizens and ensure they receive the respect, dignity, and care they deserve in their golden years. Your support can make a profound impact on the lives of elderly individuals and contribute to building a compassionate society.",
        "For more information on our Old Age Homes Sponsorship program or to contribute, please contact us.",
        "Thank you for partnering with Shri Sai Brindhavanam Foundation in our mission to support and uplift senior citizens in need!",
      ],
      hasList: true,
      hasImage: false,
    },
  ];
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={oldAgeHomeBanner}
        title={"Old Age Home"}
        description={""}
      />
      <DynamicSection pageContent={oldAgeHomePageContent} />
    </div>
  );
};

export default OldAgeHome;
