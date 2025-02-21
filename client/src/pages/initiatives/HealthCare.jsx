import {
  healthcare1,
  healthcare2,
  healthcareBanner,
} from "../../assets/images";
import { DynamicSection, PanoramicBanner } from "../../components";

const HealthCare = () => {
  const healthcarePageContent = [
    {
      id: 1,
      title: "Healthcare Sponsorship by Shri Sai Brindhavanam Foundation",
      description:
        "At Shri Sai Brindhavanam Foundation, we recognize that access to quality healthcare is essential for the well-being and prosperity of individuals and communities. Our Healthcare Sponsorship program is dedicated to improving healthcare outcomes for underprivileged individuals by providing financial support and resources for medical treatments and services.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 2,
      title: "Objective",
      description:
        "The primary objectives of our Healthcare Sponsorship program are:",
      list: [
        "To ensure equitable access to healthcare services for economically disadvantaged individuals and families.",
        "To alleviate financial barriers that prevent individuals from receiving necessary medical treatments.",
        "To promote preventive healthcare measures and improve overall health outcomes in underserved communities.",
        "To empower individuals to lead healthier and more productive lives.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 3,
      hasImage: true,
      imgUrl: healthcare1,
    },
    {
      id: 4,
      title: "Program Components",
      description:
        "Our Healthcare Sponsorship program encompasses the following components to address various healthcare needs:",
      list: [
        {
          label: "Medical Treatment Sponsorship",
          details:
            "We sponsor medical treatments, surgeries, and procedures for individuals who cannot afford the associated costs, enabling them to receive timely and necessary healthcare interventions.",
        },
        {
          label: "Medicine and Medical Supplies Support",
          details:
            "We provide financial assistance for essential medicines, medical supplies, and equipment needed for ongoing treatments and care.",
        },
        {
          label: "Health Camps and Screenings",
          details:
            "We organize health camps and screenings in collaboration with healthcare professionals to promote early detection and prevention of diseases among vulnerable populations.",
        },
        {
          label: "Health Education and Awareness",
          details:
            "We conduct health education sessions and awareness campaigns on topics such as hygiene, nutrition, maternal and child health, and disease prevention.",
        },
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 5,
      title: "Selection Process",
      description:
        "Our Healthcare Sponsorship program identifies beneficiaries based on financial need, medical urgency, and potential impact on health outcomes. We work closely with healthcare providers, social workers, and community leaders to identify individuals who would benefit most from our support.",
      hasList: false,
      hasImage: false,
    },
    {
      id: 6,
      title: "Impact",
      description:
        "Through our Healthcare Sponsorship program, we aim to achieve the following impact:",
      list: [
        "Improved access to life-saving medical treatments and interventions.",
        "Reduction in preventable diseases through early detection and preventive measures.",
        "Enhanced quality of life and well-being for sponsored individuals and their families.",
        "Strengthened healthcare infrastructure and services in underserved areas.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 7,
      hasImage: true,
      imgUrl: healthcare2,
    },
    {
      id: 8,

      title: "How You Can Help",
      description:
        "You can support our Healthcare Sponsorship program and make a difference in the lives of those in need by:",
      list: [
        "Making financial contributions to fund medical treatments and healthcare services.",
        "Donating medical supplies or equipment to support ongoing healthcare initiatives.",
        "Volunteering your time and expertise to assist in organizing health camps and educational sessions.",
        "Advocating for better healthcare policies and resources for underserved communities.",
      ],
      hasList: true,
      hasImage: false,
    },
    {
      id: 9,
      title: "Join Us",
      description: "",
      list: [
        "Together, we can make healthcare a basic human right and ensure that no one is left behind due to lack of resources. Your support can transform lives and bring hope to individuals facing health challenges.",
        "For more information on our Healthcare Sponsorship program or to contribute, please contact us.",
        "Thank you for partnering with Shri Sai Brindhavanam Foundation in promoting health and well-being for all!",
      ],
      hasList: true,
      hasImage: false,
    },
  ];

  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={healthcareBanner}
        title={"Healthcare"}
        description={""}
      />
      <DynamicSection pageContent={healthcarePageContent} />
    </div>
  );
};

export default HealthCare;
