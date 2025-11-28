import React from "react";
import juiceImage from "/assets/image/juice.webp"; // replace with correct path or use 

const FreshFruitJuices = () => {
  return (
    <section className="bg-white py-10 px-5 md:px-10 lg:px-20 relative top-0 z-30 pt-20 border-0">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        <div className="flex-1 flex relative justify-center">
          {/* <div className="bg-[url(../src/assets/image/1.webp)] w-[100%] h-[50%] absolute left-15 -z-2"></div> */}
          <img
            src={juiceImage}
            alt="Fresh Juices"
            className="w-full max-w-md relative md:max-w-xl object-contain"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm text-gray-500 text-left italic mb-2 section-title">Drink For Health</p>
          <h1 className="text-4xl md:text-5xl font-bold text-left text-gray-800 leading-tight">
            Fresh Fruit <span className="text-pink-500">Juices</span>
          </h1>

          <div className="separate-icon 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 sm:m-auto"></div>

          <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-xl mx-auto lg:mx-0 text-left">
            Us percipit urbanitas referrentur ea. Mei at numquam molestiae
            intellegam. Ans sed dictas accumsan. Nam sint atqui voluptatibus an,
            pro ne malis semper perpetua.
          </p>

          <div className="mt-6">
                <div className='border-0 ml-0 2xl:w-[35%] xl:w-[35%] lg:w-[50%] md:w-[38%] sm:w-[35%] w-[65%]'>
                    <button className='p-2 bg-[transparancy] w-[100%] group hover:bg-[#de9190] border-1 border-[#de9190] transition duration-600 hover:border-none hover:text-white rounded-full mt-6 md:mt-5 flex align-middle gap-6'>
                       <span className='bg-[#de9190] group-hover:bg-black transition duration-600 rounded-[1.5rem]'><img src="/assets/image/btn/btn-icon-1.webp" alt="" className='bg-no-repeat rounded-[50%]' /></span>
                       <span className='border-0 mt-3'>All Product</span>
                    </button>
                </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default FreshFruitJuices;
