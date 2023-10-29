import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <section>
      <h1 className="text-[28px] font-bold font-serif text-center">
        What Our <span className="text-green-600"> Customers</span> Say?
      </h1>
      <p className="text-zinc-400 font-serif text-center pt-2">
        Hear genuine stories from our satisfied customers about their
        exceptional experience with us.
      </p>
      <div className="flex flex-1 justify-evenly my-10">
        {reviews.map((review) => (
          <ReviewCard key={review.feedback} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
