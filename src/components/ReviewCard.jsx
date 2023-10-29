import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="mt-5">
      <img
        src={imgURL}
        alt="reviewer"
        height={120}
        width={120}
        className="rounded-full mx-auto"
      />

      <p className="text-zinc-400 font-serif mt-5 text-center">{feedback}</p>
      <p className="font-mono font-bold text-[20px] text-center mt-3">
        {customerName}
      </p>
      <div className="mt-1">
        <img src={star} alt="star" className="mx-auto" />

        <p className="text-center mt-1"> ({rating})</p>
      </div>
    </div>
  );
};

export default ReviewCard;
