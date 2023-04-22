import React from "react";

const PhotoAndTextSectionReversed = ({
  image = "https://via.placeholder.com/600x400",
  title = "Lorem Ipsum",
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lorem id congue dignissim. Sed vitae diam euismod, bibendum tortor eu, ultrices velit. Nullam in eros sit amet nisi luctus laoreet. Curabitur varius pharetra ex, ac mattis nibh commodo et. Integer laoreet mauris at convallis lacinia. Donec posuere augue a lacinia faucibus. Suspendisse potenti. Aenean semper velit velit, nec fringilla ex interdum eu. Proin ullamcorper, enim ac egestas euismod, augue justo tristique justo, non posuere libero enim non orci. Sed ut magna aliquam, volutpat tellus id, rhoncus tellus. In vulputate quis elit ut dapibus. Cras mollis erat vel justo auctor, vel interdum tellus dignissim. In at turpis pharetra, malesuada diam vel, elementum elit. Integer sollicitudin augue nec sapien luctus, eget vestibulum sem dictum. Fusce rutrum nisl id turpis maximus congue. Sed vel augue vitae nibh gravida lobortis vel at ipsum.",
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
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{text}</p>
      </div>
      <div className={`w-full md:w-1/2 ${getImageAlignmentClass()}`}>
        <img src={image} alt={title} className="w-full" />
      </div>
    </div>
  );
};

export default PhotoAndTextSectionReversed;
