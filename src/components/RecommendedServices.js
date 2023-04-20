import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    name: "Service 1",
    description: "Description of service 1",
    imageUrl: "https://via.placeholder.com/500x300",
    price: "10",
  },
  {
    id: 2,
    name: "Service 2",
    description: "Description of service 2",
    imageUrl: "https://via.placeholder.com/500x300",
    price: "10",
  },
  {
    id: 3,
    name: "Service 3",
    description: "Description of service 3",
    imageUrl: "https://via.placeholder.com/500x300",
    price: "10",
  },
];

const RecommendedServicesSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Recommended Services</h2>
        <div className="flex flex-wrap -mx-2">
          {services.map((service) => (
            <div
              className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4"
              key={service.id}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedServicesSection;
