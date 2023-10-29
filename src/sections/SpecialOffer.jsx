import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col-reverse gap-5">
      <div className="flex-1">
        <img src={offer} width={507} height={460} alt="Offere image" />
      </div>
      <div className="flex-1">
        <h1 className="text-[28px] font-bold font-serif text-center">
          Special<span className="text-green-600"> Offer</span>{" "}
        </h1>
        <p className="py-3 text-zinc-400 font-serif">
          Step up your game with the latest Nike footwear that combines style,
          comfort, and performance like never before. Don't miss out on this
          limited-time special offer - your chance to upgrade your sneaker
          collection while saving big.
        </p>
        <p className="pt-1 text-zinc-400 font-serif">
          Our didication to detail and excellence ensures your satisfaction Join
          the Nike family and step into the future of footwear. Hurry - this
          special offer won't last long! 💨
        </p>
        <div className="flex justify-around items-center mb-10">
          <Button className="flex-1" label="Shop now" />
          <Button
            className="flex-1"
            label="Learn more"
            styles="bg-white text-black border-2 border-gray-300 hover:bg-zinc-300"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
