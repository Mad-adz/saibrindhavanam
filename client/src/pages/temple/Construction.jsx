import { constructionBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const Construction = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={constructionBanner}
        title={"Construction"}
        description={""}
      />
    </div>
  );
};

export default Construction;
