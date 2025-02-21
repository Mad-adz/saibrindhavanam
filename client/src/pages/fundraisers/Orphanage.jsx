import { orphanage1, orphanage2, orphanageBanner } from "../../assets/images";
import { DynamicSection, PanoramicBanner } from "../../components";

const Orphanage = () => {
  const orphanagePageContent = [
    {
      id: 1,
      title: "Orphanage Sponsorship by Shri Sai Brindhavanam Foundation",
      description:
        "Shri Sai Brindhavanam Foundation is dedicated to supporting orphaned and vulnerable children through our Orphanage Sponsorship program. We believe that every child deserves a nurturing and stable environment where they can thrive and reach their full potential. Our program aims to provide holistic care, education, and opportunities for orphaned children by sponsoring orphanages and enhancing their quality of life.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 2,
      title: "Objective",
      description:
        "The primary objectives of our Orphanage Sponsorship program are:",
      list: [
        "To provide essential care and support for orphaned and vulnerable children.",
        "To ensure access to education, healthcare, nutrition, and recreational activities for children in orphanages.",
        "To promote emotional well-being, social inclusion, and personal development among orphaned children.",
        "To advocate for the rights and welfare of orphaned children and raise awareness about issues affecting them.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 3,
      hasImage: true,
      imgUrl: orphanage1,
    },
    {
      id: 4,
      title: "Program Components",
      description:
        "Our Orphanage Sponsorship program encompasses the following components to achieve our objectives:",
      list: [
        {
          label: "Education Support",
          details:
            "We sponsor educational expenses, including school fees, uniforms, books, and supplies, to ensure orphaned children have access to quality education.",
        },
        {
          label: "Healthcare Services",
          details:
            "We support medical care, vaccinations, and regular health check-ups for children in orphanages to promote their overall well-being.",
        },
        {
          label: "Nutrition and Meal Sponsorship",
          details:
            "We provide nutritious meals and dietary support to ensure proper nutrition for growing children.",
        },
        {
          label: "Infrastructure and Facility Upgrades",
          details:
            "We fund improvements to orphanage facilities, including repairs, renovations, and upgrades to create a safe and comfortable living environment.",
        },
        {
          label: "Recreational and Extracurricular Activities",
          details:
            "We organize recreational activities, sports, arts and crafts, and cultural events to foster creativity, social skills, and personal growth among children.",
        },
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 5,
      title: "Impact",
      description:
        "Through our Orphanage Sponsorship program, we aim to achieve the following impact:",
      list: [
        "Improved quality of life and well-being for orphaned children through comprehensive care and support.",
        "Enhanced educational outcomes and future opportunities for children through access to education and skill development.",
        "Promotion of emotional resilience, self-esteem, and social integration among orphaned children.",
        "Advocacy for child rights and the importance of providing a loving and stable environment for vulnerable children.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 6,
      hasImage: true,
      imgUrl: orphanage2,
    },
    {
      id: 7,
      title: "How You Can Help",
      description:
        "You can support our Orphanage Sponsorship program and make a difference in the lives of senior citizens by:",
      list: [
        "Making financial contributions to fund orphanage sponsorships, educational support, and essential services.",
        "Donating essential items such as clothing, bedding, toiletries, and school supplies for orphaned children.",
        "Volunteering your time and skills to organize activities, mentor children, or provide emotional support.",
        "Advocating for policies and programs that prioritize the welfare and rights of orphaned children.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 8,
      title: "Join Us",
      description: "",
      list: [
        "Together, we can provide hope, love, and opportunity to orphaned children and ensure they have a bright future ahead. Your support can make a profound impact on the lives of vulnerable children and contribute to building a compassionate and inclusive society.",
        "For more information on our Orphanage Sponsorship program or to contribute, please contact us.",
        "Thank you for partnering with Shri Sai Brindhavanam Foundation in our mission to support orphaned and vulnerable children in need!",
      ],
      hasList: true,
      hasImage: false,
    },
  ];
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={orphanageBanner}
        title={"Orphanage"}
        description={""}
      />
      <DynamicSection pageContent={orphanagePageContent} />
    </div>
  );
};

export default Orphanage;
