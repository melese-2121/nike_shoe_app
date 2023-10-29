import Button from "../components/Button";
import SuperQualityImage from "../components/SuperQualityImage";

const SuperQuality = () => {
  return (
    <section className="flex-1  flex justify-between items-center max-sm:my-10 my-12 mt-20">
      <div className="w-3/4">
        <h1 className="text-[28px] font-bold font-serif">
          We Provide You <span className="text-green-600">Super Quality</span>{" "}
          Shoes
        </h1>
        <p className="py-3 text-zinc-400 font-serif">
          Ensuring premium comfort and style, Our meticulously crafted footwear
          is designed elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance
        </p>
        <p className="pt-1 text-zinc-400 font-serif">
          Our didication to detail and excellence ensures your satisfaction
        </p>
        <div className="flex-1 flex justify-center items-center">
          <Button label="View Detail" />
        </div>
      </div>
      <div className="max-sm:hidden  sm:ml-5">
        <SuperQualityImage />
      </div>
    </section>
  );
};

export default SuperQuality;
