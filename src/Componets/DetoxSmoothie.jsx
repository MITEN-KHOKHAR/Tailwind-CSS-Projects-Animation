import React from 'react';

const DetoxSmoothie = () => {
    return (
        <section className="bg-white pt-0 pb-25 px-0 relative z-10 border-0 w-[100%]">
            <img src="/assets/image/icon-1.webp" alt="" className='relative left-15 top-25 border-0 md:hidden sm:hidden hidden xl:block lg:block' />
            <img src="/assets/image/icon-2.webp" alt="" className='absolute top-28 right-30 border-0 -z-1 md:block hidden' />

            <div className="2xl:w-[85%] xl:w-[85%] lg:w-[95%] mx-auto relative top-1 -z-1">

                {/* Section header */}
                <div className="text-center mb-12 w-[100%] border-0 relative z-2">

                    <div className='pt-8'>
                        <p className='section-title'>Best for you</p>
                        <h1 className="text-[2rem] sm:text-[3rem] text-center font-bold text-gray-900 motion-safe">Detox Smoothie Recipe</h1>
                        <div className="separate-icon m-auto mb-15"></div>
                    </div>

                    <div className='2xl:flex xl:flex lg:flex md:flex sm:grid grid justify-around relative border-0'>
                        {/* // show only 2xl xl lg md only */}
                        <span className='hidden md:block'>
                        <div className="border-0 p-2 grid align-middle h-fit xl:mt-30 lg:mt-30 md:mt-0 sm:mt-0 mt-0">

                            <div className='w-[100%] border-0 h-fit pb-18'>      
                                <div className="flex gap-5 justify-items-center pt-5">
                                <div className='align-middle self-center text-right border-0'>
                                <h6 className='text-[1.3rem] font-semibold hover:text-[#F67900]'><a href="menu">Cucumber</a></h6>
                                <p className="text-gray-500 text-md">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>
                                </div>
                                <img src="/assets/image/recipe-1.webp" alt="" className='bg-[#F67900] rounded-full 2xl:w-[30%] 2xl:h-[30%] xl:w-[30%] xl:h-[30%] lg:w-[40%] lg:h-[40%] md:w-[30%] md:h-[30%] sm:w-[40%] sm:h-[40%] w-[35%] h-[35%]' />
                                </div>        
                            </div>

                            <div className='w-[100%] h-fit'>
                                <div className="flex gap-5 border-0 justify-items-center pt-5">
                                
                                <div className='align-middle self-center text-right'>
                                <h6 className='text-[1.3rem] font-semibold hover:text-[#F67900]'><a href="menu">Apple</a></h6>
                                <p className="text-gray-500 xl:text-md lg:text-[1rem] md:text-md">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>
                                </div>
                                <img src="/assets/image/recipe-2.webp" alt="" className='bg-[#F67900] rounded-full 2xl:w-[30%] 2xl:h-[30%] xl:w-[30%] xl:h-[30%] lg:w-[40%] lg:h-[40%] md:w-[30%] md:h-[30%] sm:w-[40%] sm:h-[40%] w-[35%] h-[35%]' />
                                </div>
                            </div>
                        </div> 
                        </span>

                        {/* // show only sm & low mobile size only */}
                        <span className='md:hidden block'>
                        <div className="border-0 p-2 grid align-middle h-fit xl:mt-30 lg:mt-30 md:mt-0 sm:mt-0 mt-0">

                            <div className='w-[100%] border-0 block justify-center h-fit pb-18'>
                                <div className='flex justify-center'>
                                <img src="/assets/image/recipe-1.webp" alt="" className='border-0 bg-[#F67900] rounded-full w-[25%] h-[25%]' />
                                </div> 
                               
                                <div className='text-center m-auto border-0 pt-3 leading-7'>
                                <h6 className='text-[1.3rem] font-semibold pt-4 pb-2 hover:text-[#F67900]'><a href="menu">Cucumber</a></h6>
                                <p className="text-gray-500 text-md">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>
                                </div>        
                            </div>

                            <div className='w-[100%] border-0 block justify-center h-fit pb-18'>
                                <div className='flex justify-center'>
                                <img src="/assets/image/recipe-2.webp" alt="" className='border-0 bg-[#F67900] rounded-full w-[25%] h-[25%]' />
                                </div> 
                               
                                <div className='text-center m-auto border-0 pt-3 leading-7'>
                                <h6 className='text-[1.3rem] font-semibold pt-4 pb-2 hover:text-[#F67900]'><a href="menu">Apple</a></h6>
                                <p className="text-gray-500 text-md">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>
                                </div>        
                            </div>

                            <div className='w-[100%] border-0 block justify-center h-fit pb-18'>
                                <div className='flex justify-center'>
                                <img src="/assets/image/recipe-3.webp" alt="" className='border-0 bg-[#F67900] rounded-full w-[25%] h-[25%]' />
                                </div> 
                               
                                <div className='text-center m-auto border-0 pt-3 leading-7'>
                                <h6 className='text-[1.3rem] font-semibold pt-4 pb-2 hover:text-[#F67900]'><a href="menu">Lemon</a></h6>
                                <p className="text-gray-500 text-md">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>
                                </div>        
                            </div>

                            <div className='w-[100%] border-0 block justify-center h-fit pb-18'>
                                <div className='flex justify-center'>
                                <img src="/assets/image/recipe-4.webp" alt="" className='border-0 bg-[#F67900] rounded-full w-[25%] h-[25%]' />
                                </div> 
                               
                                <div className='text-center m-auto border-0 pt-3 leading-7'>
                                <h6 className='text-[1.3rem] font-semibold pt-4 pb-2 hover:text-[#F67900]'><a href="menu">Fresh Water</a></h6>
                                <p className="text-gray-500 text-md">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>
                                </div>        
                            </div>

                        </div> 
                        </span>

                        <img src="/assets/image/circles.webp" alt="" className='w-150 2xl:left-100 xl:left-75 lg:left-44 md:hidden xl:block lg:block sm:hidden hidden absolute -z-1' />

                        <div className="border-0 border-amber-600 justify-center z-0 p-3 xl:block lg:block md:hidden sm:hidden hidden">
                            <img src="/assets/image/recipe.webp" alt="" className='object-cover 2xl:w-58 xl:w-58 lg:w-82 md:w-58' />
                        </div>
                        
                        <span className='md:block hidden'>
                        <div className="border-0 grid align-middle h-fit xl:mt-30 lg:mt-30 md:mt-0 sm:mt-0 mt-0 p-2">
                            <div className='border-0 w-[95%] h-fit pb-18'>
                                <div className="flex gap-5 justify-items-center pt-5">
                                <img src="/assets/image/recipe-3.webp" alt="" className='bg-[#F67900] rounded-full 2xl:w-[30%] 2xl:h-[30%] xl:w-[30%] xl:h-[30%] lg:w-[40%] lg:h-[40%] md:w-[30%] md:h-[30%] sm:w-[40%] sm:h-[40%] w-[35%] h-[35%] border-0 grid' />
                                
                                <div className='align-middle self-center'>
                                <h6 className='text-left text-[1.3rem] font-semibold hover:text-[#F67900]'><a href="menu">Lemon</a></h6>
                                <p className="text-left text-gray-500 text-md">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>
                                </div>
                                </div>
                            </div>

                            <div className='border-0 w-[95%] h-fit'>
                                <div className="flex gap-5 justify-items-center pt-5">
                                <img src="/assets/image/recipe-4.webp" alt="" className='bg-[#F67900] rounded-full 2xl:w-[30%] 2xl:h-[30%] xl:w-[30%] xl:h-[30%] lg:w-[40%] lg:h-[40%] md:w-[30%] md:h-[30%] sm:w-[40%] sm:h-[40%] w-[35%] h-[35%] border-0 grid' />
                                
                                <div className='align-middle self-center'>
                                <h6 className='text-left text-[1.3rem] font-semibold hover:text-[#F67900]'><a href="menu">Fresh Water</a></h6>
                                <p className="text-left text-gray-500 text-md">Us percipit urbanitas referrentur ea. Mei at numquam molestiae</p>
                                </div>
                                </div>
                            </div>
                        </div> 
                        </span>
                    </div>

                        <img src="/assets/image/circles.webp" alt="" className='xl:w-0 md:w-150 sm:w-145 w-70 xl:hidden lg:hidden md:block sm:hidden hidden md:left-20 sm:left-8 left-5 pt-5 absolute -z-1' />
                        <div className="border-0 border-amber-600 justify-center m-auto pt-15 xl:hidden lg:hidden md:block sm:block">
                            <img src="/assets/image/recipe.webp" alt="" className='object-cover 2xl:w-58 xl:w-58 lg:w-82 md:w-58 m-auto' />
                        </div>
                </div>
                
            </div> 
        </section>
    );
};

export default DetoxSmoothie;