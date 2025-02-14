import { festivalsBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const Festivals = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={festivalsBanner}
        title={"Festivals"}
        description={""}
      />
    </div>
  );
};

export default Festivals;
