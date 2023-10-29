const Subscribe = () => {
  return (
    <section id="contact-us" className="flex-col justify-center items-center">
      <div>
        <h1 className="text-[28px] font-bold font-serif text-center">
          Sign Up For <span className="text-green-600"> Updates </span> And
          Newsletter
        </h1>
      </div>
      <div className=" flex lg:max-w-[80%] mx-auto  rounded-full border-2 p-1 border-zinc-300 mt-5 ">
        <div className="w-full flex flex-1 justify-between">
          <input
            type="text"
            className="rounded-lg  md:px-10 max-md:px-2 py-2 w-full text-zinc-600 font-bold focus:outline-none"
            placeholder="Enter your email address"
          />
          <button className=" bg-green-600 whitespace-nowrap hover:bg-green-500  text-white font-bold font-serif rounded-full md:px-16 max-md:px-8 py-0.5  p text-center ">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
