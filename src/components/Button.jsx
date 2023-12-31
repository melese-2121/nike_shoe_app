const Button = ({ label, iconURL, styles }) => {
  return (
    <button
      className={`flex max-sm:justify-center max-sm:ml-5 mt-10 ml-10 px-5 py-2 text-center rounded-full ${
        styles ? styles : "bg-green-600 text-white"
      }`}
    >
      {label}
      {iconURL ? (
        <img
          src={iconURL}
          alt="next"
          className="object-cover rounded-lg ml-5 mt-0.5 text-center "
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
