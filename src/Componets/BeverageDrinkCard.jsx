// src/components/DrinkCard.jsx
import React from "react";
import '../App.css';

const BeverageDrinkCard = () => {
  return (
    <>
      <section className="bg-white p-5 relative z-20">
        {/* <div className="bg-[url(../src/assets/image/beverage.webp)] relative border-2 -z-5 w-[15rem] h-80 bg-no-repeat" /> */}

        <div className="relative">

          <div className="section-title text-center">Best of You</div>
          <h1 className="text-5xl font-bold text-center">Our Beverage</h1>
          <div className="separate-icon m-auto pb-15"></div>

          <div className="flex flex-wrap justify-center gap-6">

            <div className="overflow-hidden hover:text-[#de9190]">
              <div className="overflow-hidden relative rounded-[0.6rem] border-0 z-2 hover:opacity-90">
                <img className="relative hover:relative rounded-[0.6rem] hover:-z-1 hover:bg-[#beb996] hover:opacity-90 transition-transform duration-500 hover:rotate-2 hover:scale-105 hover:overflow-hidden" src='/assets/image/beverage/beverage-1.webp' alt='...' />
              </div>

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">Milkshake</h2>
                <p className="text-gray-500 text-sm">3 products</p>
              </div>
            </div>


            <div className="overflow-hidden hover:text-[#de9190]">
              <div className="overflow-hidden relative rounded-[0.6rem] border-0 z-2 hover:opacity-90">
                <img className="relative hover:relative rounded-[0.6rem] hover:-z-1 hover:bg-[#beb996] hover:opacity-90 transition-transform duration-500 hover:rotate-2 hover:scale-105 hover:overflow-hidden" src='/assets/image/beverage/beverage-2.webp' alt='...' />
              </div>

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">Frappe</h2>
                <p className="text-gray-500 text-sm">3 products</p>
              </div>
            </div>

            <div className="overflow-hidden hover:text-[#de9190]">
              <div className="overflow-hidden relative rounded-[0.6rem] border-0 z-2 hover:opacity-90">
                <img className="relative hover:relative rounded-[0.6rem] hover:-z-1 hover:bg-[#beb996] hover:opacity-90 transition-transform duration-500 hover:rotate-2 hover:scale-105 hover:overflow-hidden" src='/assets/image/beverage/beverage-3.webp' alt='...' />
              </div>

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">Boba Drinks</h2>
                <p className="text-gray-500 text-sm">3 products</p>
              </div>
            </div>

            <div className="overflow-hidden hover:text-[#de9190]">
              <div className="overflow-hidden relative rounded-[0.6rem] border-0 z-2 hover:opacity-90">
                <img className="relative hover:relative rounded-[0.6rem] hover:-z-1 hover:bg-[#beb996] hover:opacity-90 transition-transform duration-500 hover:rotate-2 hover:scale-105 hover:overflow-hidden" src='/assets/image/beverage/beverage-4.webp' alt='...' />
              </div>

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">Mojito</h2>
                <p className="text-gray-500 text-sm">3 products</p>
              </div>
            </div>

            <div className="overflow-hidden hover:text-[#de9190]">
              <div className="overflow-hidden relative rounded-[0.6rem] border-0 z-2 hover:opacity-90">
                <img className="relative hover:relative rounded-[0.6rem] hover:-z-1 hover:bg-[#beb996] hover:opacity-90 transition-transform duration-500 hover:rotate-2 hover:scale-105 hover:overflow-hidden" src='/assets/image/beverage/beverage-5.webp' alt='...' />
              </div>

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">Slushy</h2>
                <p className="text-gray-500 text-sm">3 products</p>
              </div>
            </div>

            <div className="overflow-hidden hover:text-[#de9190]">
              <div className="overflow-hidden relative rounded-[0.6rem] border-0 z-2 hover:opacity-90">
                <img className="relative hover:relative rounded-[0.6rem] hover:-z-1 hover:bg-[#beb996] hover:opacity-90 transition-transform duration-500 hover:rotate-2 hover:scale-105 hover:overflow-hidden" src='/assets/image/beverage/beverage-6.webp' alt='...' />
              </div>

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">Hot Chocolate</h2>
                <p className="text-gray-500 text-sm">3 products</p>
              </div>
            </div>

            <div className="overflow-hidden hover:text-[#de9190]">
              <div className="overflow-hidden relative rounded-[0.6rem] border-0 z-2 hover:opacity-90">
                <img className="relative hover:relative rounded-[0.6rem] hover:-z-1 hover:bg-[#beb996] hover:opacity-90 transition-transform duration-500 hover:rotate-2 hover:scale-105 hover:overflow-hidden" src='/assets/image/beverage/beverage-7.webp' alt='...' />
              </div>

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">Smoothie</h2>
                <p className="text-gray-500 text-sm">3 products</p>
              </div>
            </div>

            <div className="overflow-hidden hover:text-[#de9190]">
              <div className="overflow-hidden relative rounded-[0.6rem] border-0 z-2 hover:opacity-90">
                <img className="relative hover:relative rounded-[0.6rem] hover:-z-1 hover:bg-[#beb996] hover:opacity-90 transition-transform duration-500 hover:rotate-2 hover:scale-105 hover:overflow-hidden" src='/assets/image/beverage/beverage-8.webp' alt='...' />
              </div>

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">Coffee</h2>
                <p className="text-gray-500 text-sm">3 products</p>
              </div>
            </div>
          </div>


          <div className="pb-15 m-auto flex justify-center border-0 ml-0">
            <div className='border-0 2xl:w-[15%] xl:w-[16%] lg:w-[23%] md:w-[30%] sm:w-[35%] w-[80%]'>
              <button className='p-2 bg-[transparancy] w-[100%] group hover:bg-[#de9190] border-1 border-[#de9190] transition duration-600 hover:border-none hover:text-white rounded-full mt-6 md:mt-5 flex align-middle gap-6'>
                <span className='bg-[#de9190] group-hover:bg-black transition duration-600 rounded-[1.5rem]'><img src="/assets/image/btn/btn-icon-1.webp" alt="" className='bg-no-repeat rounded-[50%]' /></span>
                <span className='border-0 mt-3'>All Product</span>
              </button>
            </div>
          </div>

        </div>
        {/* <!--end of flex justify-center--> */}
      </section>
    </>
  );
};

export default BeverageDrinkCard;
