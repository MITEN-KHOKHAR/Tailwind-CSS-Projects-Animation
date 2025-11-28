import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";
import "../index.css";

const images = [
  "/assets/image/1.webp",
  "/assets/image/2(1).webp",
  "/assets/image/3.webp",
  "/assets/image/4.webp",
  "/assets/image/5.webp",
];

const DrinkGallery = () => {
  return (
    <section className="flex justify-between relative z-60 border-0">
      <Swiper
        // modules={[Autoplay]}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1220: { slidesPerView: 5 },
        }}
        className="w-full"
      >
        {images.concat(images).map((src, index) => (
          <SwiperSlide key={index}>
            <HoverImage src={src} alt={`drink ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DrinkGallery;

const HoverImage = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  const openMs = 300;
  const closeMs = 600;

  // Open only the clicked image in a new tab
  const handleOpenImage = () => {
    const newWindow = window.open(src, "_blank");
    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500"
      />

      {/* Overlay */}
      <div
        className="absolute top-0 left-0 h-full w-full bg-gray-200/70"
        style={{
          transform: isHovered ? "translateX(0%)" : "translateX(100%)",
          transition: `transform ${isHovered ? openMs : closeMs}ms ${
            isHovered ? "ease-out" : "ease-in-out"
          }`,
          zIndex: 10,
        }}
      >
        {/* Button wrapper */}
        <div
          className="flex items-center justify-center h-full w-full"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: `opacity ${openMs}ms ease`,
          }}
        >
          <button
            onClick={handleOpenImage}
            className="bg-green-500 pt-2 pb-2 px-4 text-2xl text-white"
            style={{ pointerEvents: "auto" }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
