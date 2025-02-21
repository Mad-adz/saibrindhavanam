import { aboutBanner } from "../assets/images";
import { DynamicSection, PanoramicBanner } from "../components";
import { aboutPageContent } from "../utils/data/about";
const About = () => {
  
  return (
    <main className="relative">
      <PanoramicBanner bgImg={aboutBanner} title={"About"} description={""} />
      <DynamicSection pageContent={aboutPageContent} />
    </main>
  );
};

export default About;
