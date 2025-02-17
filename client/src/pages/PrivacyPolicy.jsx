import { lordGaneshBannerSvg } from "../assets/images";
import { PanoramicBanner } from "../components";

const PrivacyPolicy = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={lordGaneshBannerSvg}
        title={"Privacy Policy"}
        description={""}
      />
    </div>
  );
};

export default PrivacyPolicy;
