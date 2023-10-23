const Statistics = ({ statistics }) => {
  return (
    <ul className="flex mt-20 gap-8 max-sm:pl-5 pl-10">
      {statistics.map((item) => (
        <li key={item.label}>
          <p className="font-bold font-palanquin text-[25px]">{item.value}</p>
          <p className="text-zinc-400">{item.label}</p>
        </li>
      ))}
    </ul>
  );
};

export default Statistics;
