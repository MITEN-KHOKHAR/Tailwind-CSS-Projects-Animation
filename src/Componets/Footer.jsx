import React from 'react';

const Footer = ({userData}) => {    
    return(
        <>
        <footer className="bg-black relative z-30 pt-25">
          <div className='bg-[url(/assets/image/pattern-6.webp)] bg-no-repeat top-0 w-[100%] h-[12rem] absolute -z-1'></div>
          <div className='bg-[url(/assets/image/icon-4.webp)] bg-no-repeat bottom-0 w-[100%] h-[17rem] opacity-35 absolute -z-1'></div>
          <div className='bg-[url(/assets/image/foodpattern-2.webp)] bg-no-repeat right-0 bottom-0 w-[20%] h-[17rem] absolute -z-1'></div>

          <div className="w-[90%] relative px-4 z-10 pb-6 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2">

                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-white">Contact Us</p>

                  <nav className="mt-8">
                    <ul className="space-y-4 text-sm">
                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          6Fifth Avenue 5501, Broadway, New York Morris Street London 1234
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                        Your mail @ gmail.com
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          (123) 4567 89000
                        </a>
                      </li>

                    </ul>
                  </nav>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-white">Useful Links</p>

                  <nav className="mt-8">
                    <ul className="space-y-4 text-sm">
                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Home
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          About us
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Blog
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Terms Of Services
                        </a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                          Privacy of Policy
                        </a>
                      </li>              

                    </ul>
                  </nav>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-white">Follow Us Now</p>

                  <nav className="mt-8">
                    <ul className="space-y-4 text-sm text-white">

                      <li>
                        <a className="text-white transition hover:text-white/75" href="/">
                        facebook
                        </a>
                      </li>

                      <li>
                        <a
                          className="flex group justify-center sm:justify-start gap-1.5"
                          href="/"
                        >
                        twitter
                        </a>
                      </li>

                      <li>
                        <a
                          className="flex group justify-center sm:justify-start gap-1.5"
                          href="/"
                        >
                        instagram                 
                        </a>
                      </li>

                      <li>
                        <a
                          className="flex group justify-center sm:justify-start gap-1.5"
                          href="/"
                        >
                        dribbble
                        </a>
                      </li>              

                    </ul>
                  </nav>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-white">SubScribe</p>

                  <ul className="mt-8 space-y-4 text-sm">
                    <li>
                      <a
                        className="flex items-center justify-center sm:justify-start gap-1.5 group"
                        href="/"
                      >
                        <span className="text-white transition group-hover:text-white/75">

                        <input type="text" name='name' placeholder='Your Email' className='p-4 border-1 border-gray-400 w-[100%] mb-2' />
                        <button className='bg-[#beb996] p-5 w-[100%]'>Subscribe Now</button>

                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-12 pb-10">
              <div className="text-center sm:flex sm:justify-between sm:text-left">
                <p className="mt-4 m-auto text-lg text-white sm:order-first sm:mt-0">
                  &copy; 2024 foodily All Rights Reserved.
                </p>
              </div>
            </div>

          </div>
        </footer>
        </>
    );
}
export default Footer;