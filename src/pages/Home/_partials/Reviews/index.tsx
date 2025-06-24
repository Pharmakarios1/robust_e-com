import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = () => {
  const reviews = [
    {
      name: "Jane Smith",
      review:
        "Loved the experience! The team was very professional and attentive.",
      img: "/png/hero.png",
    },
    {
      name: "Peter Johnson",
      review: "An amazing service! They exceeded my expectations in every way.",
      img: "/png/hero.png",
    },
    {
      name: "Alice Brown",
      review: "Fantastic quality and quick turnaround. Highly recommend! ",
      img: "/png/hero.png",
    },
    {
      name: "John Doe",
      review: "Great service! The team was very responsive and helpful.",
      img: "/png/hero.png",
    },
    {
      name: "Emily Davis",
      review: "Absolutely loved it! The attention to detail was impressive.",
      img: "/png/hero.png",
    },
  ];
  return (
    <div className="customer-review flex flex-col my-5">
      <h2 className="font-extrabold text-center text-[#277] text-xl mb-8">
        What our customers say
      </h2>
      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={"auto"}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          className=""
        >
          {reviews.map((project, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto !pl-[calc(100vw-100%)] "
            >
              <div className="flex h-44 gap-2 items-center p-4 inset-0 rounded-lg shadow-lg bg-emerald-50/20">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-8 h-8 rounded-full mx-auto mb-4"
                />
                <div className="w-60">
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-gray-600">{project.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
