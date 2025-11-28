import React from 'react';
import '../App.css';

const BigDealsTheWeek = () => {
    return (
        <section className="bg-dark bg-opacity-0 px-0 relative z-10 w-[100%]">
            <img src='/assets/image/2.webp' className='w-[100%] xl:scale-100 lg:scale-100 md:scale-100 sm:scale-100 scale-470 top-0 fixed -z-1' />
            <img src="/assets/image/pattern-1.webp" alt="" className='absolute z-2' />

            <div className='relative top-0 w-[90%] m-auto pt-25'>
                <div className='bg-[url(./public/assets/image/deal.webp)] bg-no-repeat border-0 w-[100%] h-[70%] sm:w-[65%] sm:h-[70%] absolute md:top-45 top-35 md:left-35'></div>

            <div className="xl:w-[40.4rem] xl:h-[40.4rem] lg:w-[40.4rem] lg:h-[40.4rem] md:w-[40.4rem] md:h-[40.4rem] sm: text-center text-white grid 2xl:rounded-[100%] xl:rounded-[100%] lg:rounded-[100%] md:rounded-[100%] sm:rounded-none sm:pt-25 sm:pb-48 pt-20 pb-20 px-6 justify-center bg-[#BCB190]">

                <div className='m-auto grid justify-center justify-items-center gap-3'>
                    <p className='section-text'>30% Off For juice</p>               
                    <h1 className='text-[3rem] font-bold'>Big Deals of the Week</h1>
                    <p className='border-0 w-[80%] m-auto'>Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan.</p>
                    <b>To Get New Of Our Deals</b>

                    <div className="relative w-full max-w-md h-fit rounded-full border m-auto">
                        <input 
                        type="email" 
                        placeholder="type your email" 
                        className="w-full h-14 p-4 text-lg bg-transparent text-white placeholder-white border-gray-300 outline-none rounded-full" />

                        <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="#D9D3C8" 
                            className="w-6 h-6 transform rotate-45">
                            <path d="M3.483,15.688L1.684,20.5a.519.519,0,0,0,.923.491L23.516,3.644,2.544,1.011a.519.519,0,0,0-.462.628L4.628,12.352,21.144,3.788Z" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
            </div>

            <img src="/assets/image/pattern-2.webp" alt="" className='relative z-2' />
        </section>
    );
};

export default BigDealsTheWeek;