const ShoeCard = ({ imgURLs, changeBigShoeImage, bigShoeImage }) => {
  // Change Big Shoe
  const handleChange = () => {
    if (bigShoeImage !== imgURLs.bigShoe) {
      changeBigShoeImage(imgURLs.bigShoe);
    }
  };

  return (
    <div
      className={`cursor-pointer max-sm:p-4 p-6 rounded-xl bg-card bg-cover bg-center flex-1 flex justify-center items-cent border-b-8 hover:w-32  ${
        bigShoeImage === imgURLs.bigShoe
          ? "border-green-600"
          : "border-transparent"
      } `}
      onClick={handleChange}
    >
      <img src={imgURLs.thumbnail} alt="Shoe Image" width={127} height={103} />
    </div>
  );
};

export default ShoeCard;
