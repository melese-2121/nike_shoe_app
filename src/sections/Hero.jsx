import { useState } from "react";

import { statistics, shoes } from "../constants";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";

import HeroTitle from "../components/HeroTitle";
import Button from "../components/Button";
import Statistics from "../components/Statistics";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);
  return (
    <section className="w-full flex-1 sm:flex  justify-center items-center max-sm:mt-5 mt-8">
      <div className="flex-1 justify-center items-center">
        <HeroTitle />
        <Button label="Shop now" iconURL={arrowRight} />
        <Statistics statistics={statistics} />
      </div>
      <div>
        <div className="max-sm:my-10 max-sm:mx-10 relative  xl:min-h-screen bg- bg-hero bg-cover bg-center pt-20 pb-40 rounded-lg px-5 mx-2">
          <img
            className=" object-contain"
            src={bigShoe}
            alt="Shoe Image"
            width={500}
            height={400}
          />
          <div className="flex-1 flex justify-center items-center gap-4 mr-7  absolute pt-20 -bottom-[8%]">
            {shoes.map((shoe) => (
              <div key={shoe.bigShoe}>
                <ShoeCard
                  imgURLs={shoe}
                  changeBigShoeImage={(bigShoeImage) => {
                    setBigShoe(bigShoeImage);
                  }}
                  bigShoeImage={bigShoe}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
