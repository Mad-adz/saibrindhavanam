import { oldAgeHomeBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const OldAgeHome = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={oldAgeHomeBanner}
        title={"Old Age Home"}
        description={""}
      />
    </div>
  );
};

export default OldAgeHome;
