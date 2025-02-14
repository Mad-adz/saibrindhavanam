import { womenEmpowermentBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const WomenEmpowerment = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={womenEmpowermentBanner}
        title={"Womens Empowerment"}
        description={""}
      />
    </div>
  );
};

export default WomenEmpowerment;
