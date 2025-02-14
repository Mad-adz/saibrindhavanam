import { gowshalaBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const Gowshala = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={gowshalaBanner}
        title={"Gowshala"}
        description={""}
      />
    </div>
  );
};

export default Gowshala;
