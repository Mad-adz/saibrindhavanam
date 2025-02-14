import { contactBanner } from "../assets/images";
import { PanoramicBanner } from "../components";
const Contact = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={contactBanner}
        title={"Connect"}
        description={""}
      />
    </div>
  );
};

export default Contact;
