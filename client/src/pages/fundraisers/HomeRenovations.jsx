import {
  homeRenovation1,
  homeRenovation2,
  homeRenovationBanner,
} from "../../assets/images";
import { DynamicSection, PanoramicBanner } from "../../components";

const HomeRenovations = () => {
  const homeRenovationsPageContent = [
    {
      id: 1,
      title: "Home Renovation Sponsorship by Shri Sai Brindhavanam Foundation",
      description:
        "Shri Sai Brindhavanam Foundation is committed to improving living conditions and enhancing the quality of life for families in need through our Home Renovation Sponsorship program. We understand the importance of safe and comfortable housing in fostering well-being and stability for individuals and communities. Our program focuses on renovating and upgrading homes for disadvantaged families, ensuring they have dignified and secure living spaces.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 2,
      title: "Objective",
      description:
        "The primary objectives of our Home Renovation Sponsorship program are:",
      list: [
        "To provide safe, functional, and improved housing for families facing housing challenges.",
        "To enhance living conditions and address housing deficiencies to promote health and well-being.",
        "To restore dignity and pride to families by transforming their living spaces into comfortable homes.",
        "To strengthen community bonds and foster a sense of solidarity through collective support.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 3,
      hasImage: true,
      imgUrl: homeRenovation1,
    },
    {
      id: 4,
      title: "Program Components",
      description:
        "Our Home Renovation Sponsorship program encompasses the following components to achieve our objectives:",
      list: [
        {
          label: "Structural Repairs and Upgrades",
          details:
            "We undertake renovations to address structural issues, including roofing, flooring, walls, and foundation repairs, to ensure the safety and stability of homes.",
        },
        {
          label: "Improvement of Living Spaces",
          details:
            "We focus on improving interior spaces by upgrading kitchens, bathrooms, bedrooms, and common areas to enhance functionality and comfort.",
        },
        {
          label: "Accessibility Modifications",
          details:
            "We make homes more accessible for individuals with disabilities by installing ramps, handrails, and other accessibility features.",
        },
        {
          label: "Basic Amenities Installation",
          details:
            "We ensure access to essential amenities such as clean water, electricity, and sanitation facilities for improved quality of life.",
        },
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 5,
      title: "Impact",
      description:
        "Through our Home Renovation Sponsorship program, we aim to achieve the following impact:",
      list: [
        "Improved living conditions and enhanced quality of life for families in need.",
        "Increased safety, comfort, and functionality of homes for vulnerable populations.",
        "Preservation of dignity and restoration of hope for families facing housing challenges.",
        "Strengthened community resilience and social cohesion through collective action.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 6,
      hasImage: true,
      imgUrl: homeRenovation2,
    },
    {
      id: 7,

      title: "How You Can Help",
      description:
        "You can support our Home Renovation Sponsorship program and make a meaningful difference in the lives of families by:",
      list: [
        "Making financial contributions to fund home renovation projects and improvement initiatives.",
        "Donating building materials, supplies, or equipment needed for home renovations.",
        "Volunteering your time, skills, or expertise to assist in renovation work or project management.",
        "Advocating for affordable housing and community development to address housing needs.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 8,
      title: "Join Us",
      description: "",
      list: [
        "Together, we can transform living spaces and empower families to thrive in safe and dignified homes. Your support can create lasting positive change and inspire hope for a better future.",
        "For more information on our Home Renovation Sponsorship program or to contribute, please contact us.",
        "Thank you for partnering with Shri Sai Brindhavanam Foundation in our mission to renovate homes and improve lives!",
      ],
      hasList: true,
      hasImage: false,
    },
  ];
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={homeRenovationBanner}
        title={"Home Renovations"}
        description={""}
      />
      <DynamicSection pageContent={homeRenovationsPageContent} />
    </div>
  );
};

export default HomeRenovations;
