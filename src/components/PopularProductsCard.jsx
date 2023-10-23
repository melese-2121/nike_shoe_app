const PopularProductsCard = ({ imgURL, name, price, rating, icon }) => {
  console.log(imgURL);

  return (
    <div className="border-2 border-gray-300 p-1 rounded-lg">
      <img
        src={imgURL}
        alt="Shoe Image"
        width={200}
        height={200}
        className="bg-card bg-cover bg-center w-full max-sm:mb-2 mb-4"
      />
      <div className="grid justify-center items-center gap-y-2">
        <div className="flex">
          <img src={icon} alt="Stare Icon" /> <p className="pl-2">({rating})</p>
        </div>
        <p className="text-md font-bold">{name}</p>
        <p className="text-coral-red font-serif">{price}</p>
      </div>
    </div>
  );
};

export default PopularProductsCard;
