import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import NavBar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";
import "../index.css";


const Slider = () => {
 
  const [slideKey, setSlideKey] = useState(0);

  // Initialize AOS once on mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // allow re-triggering
      disableMutationObserver: false, // let AOS detect DOM changes
      mirror: false,
    });

    // small initial refresh
    setTimeout(() => {
      AOS.refreshHard();
    }, 50);
  }, []); // run only once

  const handleSlideChange = () => {
    // Force a re-render key (keeps your slide markup intact but ensures React treats slides separately)
    setSlideKey((prev) => prev + 1);

    // small delay so Swiper completes DOM updates, then retrigger AOS for active slide
    setTimeout(() => {
      const active = document.querySelector(".swiper-slide-active");
      if (active) {
        const elems = Array.from(active.querySelectorAll("[data-aos]"));

        // reset any 'once' restrictions and remove animation class so we can re-play it
        elems.forEach((el) => {
          if (el.getAttribute("data-aos-once") === "true") {
            el.setAttribute("data-aos-once-temp", "true"); // remember original
            el.setAttribute("data-aos-once", "false"); // temporarily allow replay
          }
          el.classList.remove("aos-animate");
          // force reflow
          void el.offsetWidth;
        });

        // tell AOS to re-calc positions and apply animations
        AOS.refresh();

        // add the animate class so the CSS animations run
        elems.forEach((el) => {
          el.classList.add("aos-animate");
        });

        // restore original data-aos-once after the animation finishes
        setTimeout(() => {
          elems.forEach((el) => {
            if (el.getAttribute("data-aos-once-temp") === "true") {
              el.setAttribute("data-aos-once", "true");
              el.removeAttribute("data-aos-once-temp");
            } else {
              // clean up (optional)
              el.removeAttribute("data-aos-once");
            }
          });
        }, 1000); // slightly longer than your AOS duration
      } 
      else {
        // fallback
        AOS.refresh();
      }
    }, 80); // small delay to let Swiper switch
  };

  return (
    <>
    <NavBar />
    <section className="w-[100%] h-fit border-0 bg-transparant relative z-30">

    <Swiper
    className="mySwiper relative z-10"
    modules={[Autoplay, Pagination, Navigation]}
    // loop={true}
    slidesPerView={1}
    onClick={(swiper) => swiper.slideNext()}  // ✅ added this line
    onSlideChange={handleSlideChange}>



    {/* //First Slider */}
    <SwiperSlide key={`${slideKey}-1`}>
    <section className="w-[100%] h-fit border-0 bg-[#beb996] relative z-30">
      <div className="w-[100%] relative z-10 xl:p-[5rem] lg:p-[2rem] md:p-[2rem] sm:p-[1.5rem] p-[1.5rem] border-0 top-0">
        <div className="bg-no-repeat absolute border-0 right-0 top-0 -z-80" data-aos="fade-left"
              data-aos-offset="100" data-aos-once="true"
              data-aos-easing="ease-in-sine">
            <img src="/assets/image/icon-1-coffey-tree.webp" alt="" className="2xl:w-55 xl:w-85 lg:w-55 md:w-75 sm:w-90" />
        </div>

          <div className="xl:flex lg:flex md:grid m-auto justify-around w-[100%]">
                <div className="xl:grid lg:grid border-0 xl:w-[45%] lg:w-[60%] md:w-[70%] lg:pb-10">

                    <h1 className="grid border-0 pt-25 xl:text-[7rem] lg:text-[6rem] md:text-[6rem] sm:text-[4rem] text-[3rem] md:mt-25 sm:mt-55 mt-30 text-left font-slider text-white xl:leading-30 lg:leading-30 md:leading-30 sm:leading-20 leading-20" data-aos="flip-up" data-aos-offset="300" data-aos-once="true"
                    data-aos-easing="ease-in-sine">
                    <span className="first-letter duration-1000 ease-in-out transition-all">Heathly</span>
                    <span className="second-letter duration-1000 ease-in-out transition-all">Smoothie</span>
                    </h1>

                    <div className="text-left 2xl:text-[0.95rem] xl:text-[0.95rem] lg:text-[0.95rem] md:text-[0.95rem] pt-5 pb-5 text-white" data-aos="flip-up"  data-aos-offset="100" data-aos-once="true"
                    data-aos-easing="ease-in-sine">
                    Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </div>

                      <div className='pb-5 border-0 ml-0 xl:w-[40%] lg:w-[50%] md:w-[38%] sm:w-[35%] w-[65%]' data-aos="flip-up" data-aos-offset="100" data-aos-once="true" data-aos-easing="ease-in-sine">
                          <button className='p-2 w-[100%] bg-[#de9190] hover:bg-[#5adb63] transition duration-600 text-white rounded-full mt-6 md:mt-5 flex align-middle gap-6'>
                            <span className='bg-[white] transition duration-600 rounded-[1.5rem]'><img src="/assets/image/btn-icon.47c5e4ab.webp" alt="" className='bg-no-repeat rounded-[50%]' /></span>
                            <span className='border-0 mt-3'>Buy Now</span>
                          </button>
                      </div>

                    <img src="/assets/image/icons.webp" alt="" className="mt-10 xl:hidden border-0 lg:hidden md:block block" />
                </div>

                <div className="bg-no-repeat absolute 2xl:right-35 xl:right-25 lg:right-2 md:right-13 sm:right-15 right-10 xl:top-24 lg:top-13 md:top-138 sm:top-118 top-130 -z-1 border-0" data-aos="fade-right"
                data-aos-offset="100" data-aos-once="true"
                data-aos-easing="ease-in-sine">
                    <img src="/assets/image/icon-3-strobearry.webp" alt="" className="w-45" />
                </div>        

                <div className="grid 2xl:w-[40%] xl:w-[50%] lg:w-[75%] sm:w-[100%] border-0 justify-around -mb-15">
                <img src="/assets/image/icon-2-strobearry.webp" alt="" className="w-80 bg-no-repeat absolute top-[22rem] xl:block lg:block md:hidden hidden left-8 -z-1 border-0" data-aos="fade-right" data-aos-once="true" />
                <img src="/assets/image/content-image-1.webp" alt="" className="grid border-0 xl:mt-15 xl:w-[110%] lg:w-[100%] md:w-[150%] sm:w-[160%] w-[100%]"/>
                </div>   
          </div>
      </div>
       </section>
    </SwiperSlide>


    {/* //Second Slider */}
    <SwiperSlide key={`${slideKey}-2`}>
          <section className="w-[100%] h-fit border-0 bg-[#beb996] 2xl:pb-20 xl:pb-20 lg:pb-20 md:pb-20 sm:pb-40 relative z-30">
      <div className="w-[100%] relative z-10 xl:p-[5rem] lg:p-[2rem] md:p-[2rem] sm:p-[1.5rem] p-[1.5rem] border-0 top-0">
        <div className="bg-no-repeat absolute border-0 right-0 top-0 -z-80" data-aos="fade-left"
              data-aos-offset="100" data-aos-once="true"
              data-aos-easing="ease-in-sine">
            <img src="/assets/image/icon-1-coffey-tree.webp" alt="" className="2xl:w-55 xl:w-85 lg:w-55 md:w-75 sm:w-90" />
        </div>

    <div className="xl:flex lg:flex md:grid m-auto justify-around w-[100%]">
          <div className="xl:grid lg:grid border-0 xl:w-[45%] lg:w-[60%] md:w-[70%] lg:pb-10">

              <h1 className="grid border-0 pt-25 xl:text-[7rem] lg:text-[6rem] md:text-[6rem] sm:text-[4rem] text-[4rem] text-left font-slider text-white xl:leading-30 lg:leading-30 md:leading-30 sm:leading-20 leading-20" data-aos="flip-up" data-aos-offset="300" data-aos-once="true"
              data-aos-easing="ease-in-sine">
              <span className="first-letter duration-1000 ease-in-out transition-all">Heathly</span>
              <span className="second-letter duration-1000 ease-in-out transition-all">Smoothie</span>
              </h1>

              <div className="text-left text-[0.95rem] pt-5 pb-5 text-white" data-aos="flip-up"  data-aos-offset="100" data-aos-once="true"
              data-aos-easing="ease-in-sine">
              Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </div>

                <div className='pb-5 border-0 ml-0 xl:w-[40%] lg:w-[50%] md:w-[38%] sm:w-[35%] w-[65%]' data-aos="flip-up" data-aos-offset="100" data-aos-once="true" data-aos-easing="ease-in-sine">
                    <button className='p-2 w-[100%] bg-[#de9190] hover:bg-[#5adb63] transition duration-600 text-white rounded-full mt-6 md:mt-5 flex align-middle gap-6'>
                       <span className='bg-[white] transition duration-600 rounded-[1.5rem]'><img src="/assets/image/btn-icon.47c5e4ab.webp" alt="" className='bg-no-repeat rounded-[50%]' /></span>
                       <span className='border-0 mt-3'>Buy Now</span>
                    </button>
                </div>

              <img src="/assets/image/icons.webp" alt="" className="mt-10 xl:hidden border-0 lg:hidden md:block block" />
          </div>

          <div className="bg-no-repeat absolute 2xl:right-35 xl:right-25 lg:right-2 md:right-13 sm:right-15 right-10 xl:top-24 lg:top-13 md:top-138 sm:top-118 top-130 -z-1 border-0" data-aos="fade-right"
          data-aos-offset="100" data-aos-once="true"
          data-aos-easing="ease-in-sine">
              <img src="/assets/image/icon-3-strobearry.webp" alt="" className="w-45" />
          </div>        

          <div className="grid 2xl:w-[40%] xl:w-[50%] lg:w-[75%] sm:w-[100%] border-0 justify-around -mb-15">
          <img src="/assets/image/icon-6.webp" alt="" className="w-80 bg-no-repeat absolute top-[22rem] xl:block lg:block md:hidden hidden left-8 -z-1 border-0" data-aos="fade-right" data-aos-once="true" />
          <img src="/assets/image/content-image-2.webp" alt="" className="grid border-0 xl:mt-8 xl:w-[110%] lg:w-[100%] md:w-[150%] sm:w-[160%] w-[100%]"/>
          </div>   
    </div>
    </div>
    </section>
    </SwiperSlide>
 
    {/* //Third Slider */}
    <SwiperSlide key={`${slideKey}-3`}>
          <section className="w-[100%] h-fit border-0 bg-[#A79BAC] 2xl:pb-20 xl:pb-20 lg:pb-20 md:pb-20 sm:pb-40 relative z-30">      
      <div className="w-[100%] relative bg-[#A79BAC] z-10 xl:p-[5rem] lg:p-[2rem] md:p-[2rem] sm:p-[1.5rem] p-[1.5rem] border-0 top-0">
        <div className="bg-no-repeat absolute border-0 right-0 top-0 -z-80" data-aos="fade-left"
              data-aos-offset="100" data-aos-once="true"
              data-aos-easing="ease-in-sine">
            <img src="/assets/image/icon-1-coffey-tree.webp" alt="" className="2xl:w-55 xl:w-85 lg:w-55 md:w-75 sm:w-90" />
        </div>

    <div className="xl:flex lg:flex md:grid m-auto justify-around w-[100%]">
          <div className="xl:grid lg:grid border-0 xl:w-[45%] lg:w-[60%] md:w-[70%] lg:pb-10">

              <h1 className="grid border-0 pt-25 xl:text-[7rem] lg:text-[6rem] md:text-[6rem] sm:text-[4rem] text-[4rem] text-left font-slider text-white xl:leading-30 lg:leading-30 md:leading-30 sm:leading-20 leading-20" data-aos="flip-up" data-aos-offset="300" data-aos-once="true"
              data-aos-easing="ease-in-sine">
              <span className="first-letter duration-1000 ease-in-out transition-all">Heathly</span>
              <span className="second-letter duration-1000 ease-in-out transition-all">Smoothie</span>
              </h1>

              <div className="text-left text-[0.95rem] pt-5 pb-5 text-white" data-aos="flip-up"  data-aos-offset="100" data-aos-once="true"
              data-aos-easing="ease-in-sine">
              Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </div>

                <div className='pb-5 border-0 ml-0 xl:w-[40%] lg:w-[50%] md:w-[38%] sm:w-[35%] w-[65%]' data-aos="flip-up" data-aos-offset="100" data-aos-once="true" data-aos-easing="ease-in-sine">
                    <button className='p-2 w-[100%] bg-[#de9190] hover:bg-[#5adb63] transition duration-600 text-white rounded-full mt-6 md:mt-5 flex align-middle gap-6'>
                       <span className='bg-[white] transition duration-600 rounded-[1.5rem]'><img src="/assets/image/btn-icon.47c5e4ab.webp" alt="" className='bg-no-repeat rounded-[50%]' /></span>
                       <span className='border-0 mt-3'>Buy Now</span>
                    </button>
                </div>

              <img src="/assets/image/icons.webp" alt="" className="mt-10 xl:hidden border-0 lg:hidden md:block block" />
          </div>

          <div className="bg-no-repeat absolute 2xl:right-35 xl:right-25 lg:right-2 md:right-13 sm:right-15 right-10 xl:top-24 lg:top-13 md:top-138 sm:top-118 top-130 -z-1 border-0" data-aos="fade-right"
          data-aos-offset="100" data-aos-once="true"
          data-aos-easing="ease-in-sine">
              <img src="/assets/image/icon-3-strobearry.webp" alt="" className="w-45" />
          </div>        

          <div className="grid 2xl:w-[40%] xl:w-[50%] lg:w-[75%] sm:w-[100%] border-0 justify-around -mb-15">
          <img src="/assets/image/icon-7.webp" alt="" className="w-80 bg-no-repeat absolute top-[22rem] xl:block lg:block md:hidden hidden left-8 -z-1 border-0" data-aos="fade-right" data-aos-once="true" />
          <img src="/assets/image/content-image-3.webp" alt="" className="grid border-0 xl:mt-8 xl:w-[110%] lg:w-[100%] md:w-[150%] sm:w-[160%] w-[100%]"/>
          </div>   
    </div>
    </div>
    </section>
    </SwiperSlide>

    <div className="absolute w-[100%] flex justify-center left-0 -bottom-20 h-[25rem] border-0 z-20">
      <img src="/assets/image/pattern-2.webp" alt="" className="bottom-20 z-50 absolute w-[100%] border-0  2xl:h-[9rem]  xl:h-[9rem] lg:h-[9rem] md:h-[9rem] sm:h-[9rem] h-[5rem] " />
      <img src="/assets/image/pattern-1.webp" alt="" className="absolute -bottom-30 w-[100%] -z-1 h-[12rem]" />
    </div>

    </Swiper>
    </section>
    </>
);
};

export default Slider;
