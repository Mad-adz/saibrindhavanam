import { orphanageBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const Orphanage = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={orphanageBanner}
        title={"Orphanage"}
        description={""}
      />
    </div>
  );
};

export default Orphanage;
