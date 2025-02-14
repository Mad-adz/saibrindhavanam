import { schoolRenovationBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const SchoolRenovations = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={schoolRenovationBanner}
        title={"School Renovations"}
        description={""}
      />
    </div>
  );
};

export default SchoolRenovations;
