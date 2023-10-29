const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="shadow-lg px-5 py-12 w-[300px] rounded-lg mx-auto h-auto">
      <div className="p-3  rounded-full w-10 h-10 flex justify-center items-center bg-green-600">
        <img src={imgURL} alt="icon" width={40} height={40} />
      </div>
      <h1 className="text-[24px] font-bold font-serif mt-3">{label}</h1>
      <p className="font-serif text-gray-400 mt-1">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
