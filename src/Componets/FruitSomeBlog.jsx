import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FruitSomeBlog = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200, // smoother, slower animation
      easing: "ease-in-out-sine", // soft easing
      once: false, // smooth reappear on scroll back
      mirror: true, // animate both scroll up & down
    });

    // ✅ Fix for mobile: smaller side movement + centered original state
    const handleMobileAOS = () => {
      const existingStyle = document.getElementById("mobile-aos-fix");
      if (existingStyle) existingStyle.remove();

      const style = document.createElement("style");
      style.id = "mobile-aos-fix";

      if (window.innerWidth <= 639) {
        style.innerHTML = `
          /* Before animation trigger (original centered) */
          [data-aos="fade-left"],
          [data-aos="fade-right"] {
            transform: translate3d(0, 0, 0) !important;
          }

          /* During animation (smaller move) */
          [data-aos].aos-animate[data-aos="fade-left"] {
            transform: translate3d(0, 0, 0) !important;
          }
          [data-aos][data-aos="fade-left"]:not(.aos-animate) {
            transform: translate3d(0, 0, 0) !important;
          }

          [data-aos].aos-animate[data-aos="fade-right"] {
            transform: translate3d(0, 0, 0) !important;
          }
          [data-aos][data-aos="fade-right"]:not(.aos-animate) {
            transform: translate3d(0, 0, 0) !important;
          }
        `;
      } else {
        // Desktop smooth transition fix
        style.innerHTML = `
          [data-aos="fade-left"],
          [data-aos="fade-right"] {
            transition: all 0.9s ease-in-out !important;
          }
        `;
      }

      document.head.appendChild(style);
    };

    handleMobileAOS();
    window.addEventListener("resize", handleMobileAOS);
    return () => window.removeEventListener("resize", handleMobileAOS);
  }, []);

  const animations = ["fade-left", "fade-up", "fade-right", "fade-down"];

  const blogPosts = [
    {
      title: "Broad bean and goats' cheese bruschetta",
      category: "smoothie",
      date: "May 21, 2021",
      comments: 2,
      img: "/assets/image/blog-section/news-1.webp",
    },
    {
      title: "Broad bean and goats' cheese bruschetta",
      category: "smoothie",
      date: "May 21, 2021",
      comments: 2,
      img: "/assets/image/blog-section/news-2.webp",
    },
    {
      title: "Broad bean and goats' cheese bruschetta",
      category: "smoothie",
      date: "May 21, 2021",
      comments: 2,
      img: "/assets/image/blog-section/news-3.webp",
    },
  ];

  return (
    <section className="bg-white w-full pb-28 px-4 sm:px-6 relative z-20">
      <div className="bg-[url(../src/assets/image/pattern5.webp)] w-[20%] h-[100%] border-0 bg-no-repeat z-1 absolute"></div>

      <div className="w-[90%] border-0 mx-auto relative z-10">

        {/* Section header */}
        <div className="text-center pt-15 mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Our Fruitsome Blog</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Cros mottis consectetur purus sit amet fermentum. Proesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-green-600 rounded-full"></div>
          </div>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <div
                key={index}
                data-aos={animations[index % animations.length]}
                data-aos-offset="200"
                data-aos-easing="ease-in-out-cubic"
                data-aos-duration="1200"
                data-aos-once="true"
                className="bg-white overflow-hidden transition-transform duration-500 hover:shadow-2xl relative cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ImageHoverOverlay src={post.img} title={post.title} isHovered={isHovered} />

                <div className="p-6 bg-[#f5f6fb] group">
                  <div className="text-sm font-semibold bg-green-800 text-white p-1 rounded-md w-[42%] text-center m-auto uppercase tracking-wide">
                    {post.category}
                  </div>
                  <h2 className="mt-2 text-xl text-center group-hover:text-green-800 p-2 font-bold text-gray-900">
                    {post.title}
                  </h2>
                  <div className="mt-4 justify-center flex items-center gap-5 xl:text-sm lg:text-[0.8rem] md:text-[0.9rem] sm:text-[0.75rem] text-[0.70rem] text-gray-500">
                    <span className="text-center">{post.date}</span>
                    <span className="text-center">{post.comments} Comments</span>
                    <span className="text-center">Share</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ImageHoverOverlay = ({ src, title, isHovered }) => {
  const openMs = 300;
  const closeMs = 600;

  const handleOpenImage = () => {
    window.open(src, "_blank");
  };

  return (
    <div className="relative overflow-hidden">
      <img src={src} alt={title} className="object-cover w-full transition-all duration-700 ease-in-out" />
      <div
        className="absolute top-0 right-0 h-full w-full bg-gray-200/70 flex items-center justify-center"
        style={{
          transform: isHovered ? "translateX(0%)" : "translateX(100%)",
          transition: `transform ${isHovered ? openMs : closeMs}ms ${
            isHovered ? "ease-out" : "ease-in-out"
          }`,
          zIndex: 10,
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
  );
};

export default FruitSomeBlog;
