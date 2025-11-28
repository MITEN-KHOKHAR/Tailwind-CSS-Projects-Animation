import React from 'react';

const TestimonialSection = () => {
    return(
        <>
    <section className="bg-gray-50 px-4 pt-20 pb-18 sm:px-6 lg:px-8 relative z-20">
      <img src='/assets/image/pattern-4.webp' className='absolute 2xl:w-[50%] xl:w-[50%] lg:w-[50%] sm:w-[75%] w-[105%] 2xl:left-85 xl:left-85 lg:left-70 sm:left-30 left-0 top-50 border-0 bg-no-repeat -z-2' />
      <div className="max-w-7xl mx-auto">



        {/* Section header */}
        <div className="text-center mb-7">
          <h2 className="text-2xl font-bold text-gray-900 section-title">
            Testimonial
          </h2>
        </div>

        {/* Subheading */}
        <div className="text-center mb-8">
          <h3 className="lg:text-5xl font-bold text-gray-800 sm:text-3xl">
            What People Say
          </h3>
        </div>


 <div className="separate-icon m-auto pb-15"></div>



        {/* Testimonial card */}      
        <div className="w-[80%] p-5 mx-auto relative h-fit z-0">
          <div className="flex flex-col items-center text-center relative left-0 top-0 z-10">

            {/* Quote icon */}
            <div className="mb-8 justify-center m-auto">
                <img src="/assets/image/author.webp" alt="" className='rounded-full border-10 border-white shadow-2xl' />    
            </div>
            
            {/* Testimonial text */}
            <blockquote className="text-[1rem] italic text-gray-700 mb-8 w-[80%] font-semibold">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            </blockquote>
            
            {/* Author info (placeholder) */}
            <div className="font-medium">
              <p className="text-[#beb996]">Meredith Grant <span className='text-gray-600'>- Host Mother</span></p>
            </div>
          </div>
        </div>





        

      </div>
    </section>        
        </>
    );
}
export default TestimonialSection;