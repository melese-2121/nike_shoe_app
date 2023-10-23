import { products } from "../constants";
import { star } from "../assets/icons";

import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-bold">
          Our <span className="text-green-600">Popular</span> Products
        </h1>
        <p className="text-zinc-500 font-serif my-2">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="sm:mt-5 mt-2 flex-1 grid  sm:gap-2 gap-1 gap-y-2  max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-4 justify-center items-center">
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} icon={star} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
