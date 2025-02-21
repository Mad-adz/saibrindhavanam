import { constructionBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { constructionImages } from "../../utils/data/construction";

const Construction = () => {
  return (
    <div className="relative">
      <PanoramicBanner
        bgImg={constructionBanner}
        title={"Construction"}
        description={""}
      />
      <section className="bg-amber-50 mt-[30rem] py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-2xl font-bold mb-2 text-orange-500">
            Construction
          </h2>

          <p className="mb-10 indent-10 font-normal !text-lg !text-zinc-500">
            Explore the construction journey of the Shri Sai Brindhavanam Temple
            through these images, capturing every step from its foundation to
            completion. Each photograph reflects the dedication, craftsmanship,
            and spiritual essence that shaped this sacred space.
          </p>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="container mx-auto h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <Gallery>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {constructionImages.map((img) => (
                <Item
                  original={img.src}
                  thumbnail={img.src}
                  width={img.width}
                  height={img.height}
                  key={img.id}
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={img.src} />
                  )}
                </Item>
              ))}
            </div>
          </Gallery>
        </div>
      </section>
    </div>
  );
};

export default Construction;
