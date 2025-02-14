import { annadhaanamBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";
const Annadhaanam = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={annadhaanamBanner}
        title={"Annadhaanam"}
        description={""}
      />
    </div>
  );
};

export default Annadhaanam;
