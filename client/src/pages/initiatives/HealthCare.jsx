import { healthcareBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const HealthCare = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={healthcareBanner}
        title={"Healthcare"}
        description={""}
      />
    </div>
  );
};

export default HealthCare;
