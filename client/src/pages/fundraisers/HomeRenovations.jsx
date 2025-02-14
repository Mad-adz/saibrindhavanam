import { homeRenovationBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const HomeRenovations = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={homeRenovationBanner}
        title={"Home Renovations"}
        description={""}
      />
    </div>
  );
};

export default HomeRenovations;
