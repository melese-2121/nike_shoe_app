import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <div className="sm:flex-1 sm:flex justify-between items-center gap-3 h-auto md:my-16 md:mb-4 max-md:my-14 ">
      {services.map((service) => (
        <ServiceCard key={service.imgURL} {...service} />
      ))}
    </div>
  );
};

export default Services;
