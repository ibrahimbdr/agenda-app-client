import React from "react";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut massa eget est porttitor suscipit. Integer ut orci nisi. ",
    author: "John Doe",
    company: "Acme Inc.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote:
      "Aenean iaculis, metus eu aliquet blandit, augue sapien condimentum augue, a ultrices eros nunc non justo. ",
    author: "Jane Smith",
    company: "Widgets Inc.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const Testimonial = ({ quote, author, company, avatar }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <div className="max-w-3xl mx-auto lg:max-w-none">
        <div className="bg-white shadow-lg rounded-lg px-6 py-8 lg:flex lg:items-center lg:px-8 lg:py-12">
          <div className="lg:flex-shrink-0">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src={avatar}
              alt={author}
            />
          </div>
          <div className="mt-6 lg:mt-0 lg:ml-8">
            <blockquote>
              <div className="text-2xl leading-9 font-medium text-gray-900">
                {quote}
              </div>
            </blockquote>
            <div className="mt-8">
              <div className="text-base font-medium text-gray-900">
                {author}
              </div>
              <div className="text-base font-medium text-gray-500">
                {company}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardTestimonials = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl sm:leading-10">
            What our customers are saying
          </p>
        </div>
        <div className="mt-20">
          <div className="max-w-md mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardTestimonials;
