import { tourismBanner } from "../assets/images";
import { PanoramicBanner } from "../components";
const Tourism = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={tourismBanner}
        title={"Tourism"}
        description={""}
      />
    </div>
  );
};

export default Tourism;
