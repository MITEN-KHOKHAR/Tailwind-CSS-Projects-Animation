import React from 'react';

const UpcomingOurBeverage = () => {
    return (
        <section className="bg-[#f7eee2] w-[100%] border-0 relative z-20 top-0">
            <img src="/assets/image/iconsf.webp" alt="" className="absolute 2xl:top-0 2xl:left-0 xl:top-80 xl:left-0 z-1 lg:top-90 lg:left-0 md:right-0 md:top-15 sm:right-0 sm:top-15 xs:right-0 xs:top-15 hide-cust-size" />

            <div className="w-[100%] border-0 relative top-0 flex justify-between flex-col lg:flex-row">

                {/* Section header */}
                <div className="text-center w-[100%] 2xl:w-[80%] xl:w-[45%] lg:w-[80%] border-0 grid relative z-2 p-4 md:p-6 lg:p-10">

                <div className='border-0 w-[100%] m-auto pb-8'>
                    <h1 className="text-[2rem] xl:text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] text-left w-[100%] border-0 lg:w-[80%] font-bold text-gray-900 leading-15 pt-15 pb-15">
                        Upcoming Our Beverage
                    <div className="separate-icon"></div>                        
                    </h1>

                    <div className='pt-0 -mt-10 xl:w-[100%] lg:[150%] md:[100%] w-[80%] border-0'>
                    <p className="xl:text-[1.1rem] lg:text-[1rem] text-justify text-gray-600 w-[100%] border-0 relative">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    </div>
                    
                </div>

                    <div className="pb-15 border-0 ml-0">
                        <div className='border-0 2xl:w-[45%] xl:w-[46%] lg:w-[50%] md:w-[35%] sm:w-[32%] w-[75%]'>
                        <button className='p-2 bg-[transparancy] w-[100%] group hover:bg-[#de9190] border-1 border-[#de9190] transition duration-600 hover:border-none hover:text-white rounded-full mt-6 md:mt-5 flex align-middle gap-6'>
                            <span className='bg-[#de9190] group-hover:bg-black transition duration-600 rounded-[1.5rem]'><img src="/assets/image/btn/btn-icon-1.webp" alt="" className='bg-no-repeat rounded-[50%]' /></span>
                            <span className='border-0 mt-3'>All Product</span>
                        </button>
                        </div>
                    </div>

                </div>


                {/* Image section */}
                <div className="flex lg:block w-[100%] justify-center 2xl:w-[40%] xl:w-[55%] xl:h-[38rem] lg:w-[100%] lg-h-[35rem]  sm:w-[100%] sm:h-[35rem] top-0 relative min-h-[18rem] md:min-h-[50rem] lg:min-h-[43rem] overflow-hidden border-0">
                    <img 
                        src="/assets/image/image-1.webp" 
                        alt="Upcoming Beverage" 
                        className='xl:object-cover lg:object-center md:object-none w-[100%] h-fit 2xl:w-[100%] 2xl:h-[35rem] xl:w-[100%] xl:h-full lg:w-[100%] lg:h-full md:w-[100%] md:h-full sm:w-[100%] sm:h-fit border-0 absolute z-0'
                    />
                    <div className='bg-[url(./assets/image/pattern-3.webp)] bg-no-repeat w-[100%] lg:w-[30%] xl:block lg:block md:hidden sm:hidden border-0 top-0 h-[100%] relative z-1 bg-contain lg:bg-auto'></div>
                </div>                

            </div>  
        </section>
    );
};

export default UpcomingOurBeverage;