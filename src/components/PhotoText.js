const PhotoAndTextSection = ({
  image,
  title,
  text,
  imagePosition = "left",
}) => {
  const getImageAlignmentClass = () => {
    if (imagePosition === "left") {
      return "md:mr-8";
    } else {
      return "md:ml-8";
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row">
      <div className={`w-full md:w-1/2 ${getImageAlignmentClass()}`}>
        <img src={image} alt={title} className="w-full" />
      </div>
      <div className={`w-full md:w-1/2 ${getImageAlignmentClass()}`}>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default PhotoAndTextSection;
