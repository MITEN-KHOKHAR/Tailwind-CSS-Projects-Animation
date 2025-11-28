import React, { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { TextAlignEnd } from 'lucide-react';
import { ArrowUp } from 'lucide-react';

import { Play, Phone, Mail, Clock8 } from 'lucide-react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";

import { FaAngleRight } from "react-icons/fa6";

// import NavLogoLight from "../src/assets/logo.webp";
// import NavLogoDark from "../src/assets/image/logo-dark.webp";

import NavLogoLight from "/assets/image/logo.webp";
import NavLogoDark from "/assets/image/logo-dark.webp";
import "../index.css";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuLeftOpen, setIsMenuLeftOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLeftMenu = () => setIsMenuLeftOpen(!isMenuLeftOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollNav(window.scrollY >= 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollNav]);

  const items = [
    { id: 1, icon: <Play className="text-[#de9190] w-8" />, text: "Chicago 12, Melborne City, USA" },
    { id: 2, icon: <Phone className="text-[#de9190] w-8" />, text: "(111) 111-111-1111" },
    { id: 3, icon: <Mail className="text-[#de9190] w-8" />, text: "foodily@gmail.com" },
    { id: 4, icon: <Clock8 className="text-[#de9190] w-12 -mt-5" />, text: "Week Days: 09.00 to 18.00 Sunday: Closed" },
  ];

  const icons = [
    { id: 1, icon: <FaFacebookF /> },
    { id: 2, icon: <FaTwitter /> },
    { id: 3, icon: <FaLinkedinIn /> },
    { id: 4, icon: <ImInstagram /> },
    { id: 5, icon: <TfiYoutube /> },
  ];


  return (
    <>

      {/* ===== Navbar medium, small, extra small devise apply this size ===== */}
      <nav className={`fixed w-full border-0 top-0 z-70 xl:hidden lg:hidden block transition-all duration-700 ${scrollNav ? "bg-white shadow-lg" : "bg-[#222222]"}`}>

        <div className="grid items-center px-6 py-2 w-[100%] m-auto transition duration-1000 delay-1000" data-aos-offset="300" data-aos-once="true" data-aos-easing="ease-in-sine">

          <span className="md:block hidden">
            {/* Logo */}
            <div className="grid border-0 w-[100%] pb-6">
              <img
                src={scrollNav ? NavLogoDark : NavLogoLight}
                alt="Logo"
                className="h-15 transition-all m-auto duration-500"
              />
            </div>
          </span>





          {/* Medium Screen Show in navigation text */}
          <span className="hidden md:block">
          <ul className="border-0 flex justify-left gap-5 w-[100%] font-medium text-white">

          {/* // Home Navbar */}
          <li
            className={`relative group cursor-pointer pb-[0.4rem] mt-2
              transition-all duration-1000 delay-1000 border-0
              ${
                scrollNav
                  ? "text-gray-800 hover:text-gray-600 focus:text-gray-700 active:text-gray-900"
                  : "text-white hover:text-gray-200 focus:text-gray-300 active:text-gray-400"
              }`}>
              Home

              {/* Step 1 underline */}
              <div
                className={`absolute bottom-0 left-0 w-full h-[8px] pb-[0.4rem]
                  transition-all duration-700 delay-700
                  ${
                    scrollNav
                      ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100"
                      : "text-white bg-[url('../public/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 wave-bg"
                  }`}
              ></div>

              {/* Step 2 dropdown menu — only visible on hover/focus */}

                <ul
                  className="
                    absolute -left-5 top-[3rem]
                    bg-white text-black 
                    z-50 p-6 leading-8 min-w-[11rem] justify-center
                    w-fit h-fit transition ease-in-out duration-1000 delay-1000
                    opacity-0 pointer-events-none

                    group-hover:left-0 group-hover:opacity-100 group-hover:pointer-events-auto
                    group-focus-within:left-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto
                    group-active:left-0 group-active:opacity-100 group-active:pointer-events-auto
                  ">

                  <li className="hover:text-gray-700 focus:text-gray-800 active:text-gray-900 transition">
                    Home One
                  </li>

                  <li className="hover:text-gray-700 focus:text-gray-800 active:text-gray-900 transition">
                    Home Two
                  </li>

                  <li className="hover:text-gray-700 focus:text-gray-800 active:text-gray-900 transition">
                    Home Three
                  </li>
                  
                  <li className="hover:text-gray-700 focus:text-gray-800 active:text-gray-900 transition">
                    Home Four
                  </li>

                  <li className="hover:text-gray-700 focus:text-gray-800 active:text-gray-900 transition">
                    Home Five
                  </li>

                </ul>
              </li>



                    {/* // About Navbar */}
                    <li
                      className={`relative group cursor-pointer hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-500 mt-2 ${scrollNav ? "text-gray-800" : "text-white"
                        }`}>

                      {/* Step 1 text */}
                      About

                      {/* Step 1 underline */}
                      <div className={`absolute bottom-0 left-0 w-full h-[8px] hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-500
                            ${scrollNav ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" : "text-white bg-[url('/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 wave-bg"
                        }`}>
                      </div>


                      {/* Step 2 dropdown menu — only visible on hover */}
                      <ul
                        className="
                              absolute -left-5 top-[3rem]
                              bg-white text-black 
                              z-50 p-6 leading-8 min-w-[11rem] justify-center
                              w-fit h-fit transition-all duration-1000 ease-in
                              opacity-0 pointer-events-none group-hover:left-0
                              group-hover:opacity-100 group-hover:pointer-events-auto">

                        <li>Home One</li>
                        <li>Home Two</li>
                        <li>Home Three</li>
                        <li>Home Four</li>
                        <li>Home Five</li>
                      </ul>
                    </li>

                    {/* // Menu Navbar */}
                    <li
                      className={`relative group cursor-pointer hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-500 mt-2 ${scrollNav ? "text-gray-800" : "text-white"
                        }`}>

                      {/* Step 1 text */}
                      Menu

                      {/* Step 1 underline */}
                      <div className={`absolute bottom-0 left-0 w-full h-[8px] hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-500
                            ${scrollNav ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" : "text-white bg-[url('/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 wave-bg"
                        }`}>
                      </div>


                      {/* Step 2 dropdown menu — only visible on hover */}
                      <ul
                        className="
                              absolute -left-5 top-[3rem]
                              bg-white text-black 
                              z-50 p-6 leading-8 min-w-[11rem] justify-center
                              w-fit h-fit transition-all duration-1000 ease-in
                              opacity-0 pointer-events-none group-hover:left-0
                              group-hover:opacity-100 group-hover:pointer-events-auto">

                        <li>Home One</li>
                        <li>Home Two</li>
                        <li>Home Three</li>
                        <li>Home Four</li>
                        <li>Home Five</li>
                      </ul>
                    </li>

                    {/* // Gallary Navbar */}
                    <li
                      className={`relative group cursor-pointer hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-500 mt-2 ${scrollNav ? "text-gray-800" : "text-white"
                        }`}>

                      {/* Step 1 text */}
                      Gallary

                      {/* Step 1 underline */}
                      <div className={`absolute bottom-0 left-0 w-full h-[8px] hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-500
                            ${scrollNav ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" : "text-white bg-[url('/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 wave-bg"
                        }`}>
                      </div>


                      {/* Step 2 dropdown menu — only visible on hover */}
                      <ul
                        className="
                              absolute -left-5 top-[3rem]
                              bg-white text-black 
                              z-50 p-6 leading-8 min-w-[11rem] justify-center
                              w-fit h-fit transition-all duration-1000 ease-in
                              opacity-0 pointer-events-none group-hover:left-0
                              group-hover:opacity-100 group-hover:pointer-events-auto">

                        <li>Home One</li>
                        <li>Home Two</li>
                        <li>Home Three</li>
                        <li>Home Four</li>
                        <li>Home Five</li>
                      </ul>
                    </li>

                    {/* // Blog Navbar */}
                    <li
                      className={`relative group cursor-pointer hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-500 mt-2 ${scrollNav ? "text-gray-800" : "text-white"
                        }`}>

                      {/* Step 1 text */}
                      Blog

                      {/* Step 1 underline */}
                      <div className={`absolute bottom-0 left-0 w-full h-[8px] hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-500
                            ${scrollNav ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" : "text-white bg-[url('../public/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 wave-bg"
                        }`}>
                      </div>


                      {/* Step 2 dropdown menu — only visible on hover */}
                      <ul
                        className="
                              absolute -left-5 top-[3rem]
                              bg-white text-black 
                              z-50 p-6 leading-8 min-w-[11rem] justify-center
                              w-fit h-fit transition-all duration-1000 ease-in
                              opacity-0 pointer-events-none group-hover:left-0
                              group-hover:opacity-100 group-hover:pointer-events-auto">

                        <li>Home One</li>
                        <li>Home Two</li>
                        <li>Home Three</li>
                        <li>Home Four</li>
                        <li>Home Five</li>
                      </ul>
                    </li>

                    {/* // Contact Navbar */}
                    <li
                      className={`relative group cursor-pointer hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-500 mt-2 ${scrollNav ? "text-gray-800" : "text-white"
                        }`}>

                      {/* Step 1 text */}
                      Contact

                      {/* Step 1 underline */}
                      <div className={`absolute bottom-0 left-0 w-full h-[8px] hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-500
                            ${scrollNav ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" : "text-white bg-[url('../public/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 wave-bg"
                        }`}>
                      </div>


                      {/* Step 2 dropdown menu — only visible on hover */}
                      <ul
                        className="
                              absolute -left-5 top-[3rem]
                              bg-white text-black 
                              z-50 p-6 leading-8 min-w-[11rem] justify-center
                              w-fit h-fit transition-all duration-1000 ease-in
                              opacity-0 pointer-events-none group-hover:left-0
                              group-hover:opacity-100 group-hover:pointer-events-auto">

                        <li>Home One</li>
                        <li>Home Two</li>
                        <li>Home Three</li>
                        <li>Home Four</li>
                        <li>Home Five</li>
                      </ul>
                    </li>

                    {/* Mobile Icons */}
                    <div className="flex w-full gap-5 items-center justify-end border-0">
                      {/* Search Button */}
                      <button
                        onClick={toggleSearch}
                        className={`"transition-colors duration-300 pt-2"
                                ${scrollNav ? "text-gray-800" : "text-white"} `}
                      >
                        <Search size={24} />
                      </button>

                      {/* Mobile Menu Button */}
                      <button
                        onClick={toggleMenu}
                        className={`"transition-colors duration-300"
                                ${scrollNav ? "text-gray-800" : "text-white"} `}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                      </button>
                    </div>
                  </ul>


          </span>


          {/* Small Screen & Extra SM Screen to White BG-Color Show in navigation */}
          <span className={`w-full transition-all md:hidden block p-1 relative -top-5 duration-300 ${scrollNav ? "block relative top-0" : "hidden"}`} aria-hidden={scrollNav}>

            {/* Mobile Icons */}
            <div className="flex w-full gap-5 items-center justify-between border-0 duration-300">

              {/* Logo */}
              <div className="flex border-0 w-[100%]">
                <img
                  src={scrollNav ? NavLogoDark : NavLogoLight}
                  alt="Logo"
                  className="h-15 transition-normal duration-500"
                />
              </div>

              <div className="border-0 flex gap-5">
                {/* Search Button */}
                <button
                  onClick={toggleSearch}
                  className={`"transition-colors duration-300 pt-2"
                      ${scrollNav ? "text-gray-800" : "text-white"} `}
                >
                  <Search size={24} />
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMenu}
                  className={`"transition-colors duration-300"
                      ${scrollNav ? "text-gray-800" : "text-white"} `}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

            </div>
          </span>


          {/* Small Screen & Extra SM Screen to Black BG-Color Show in navigation */}
          <span className={`w-full transition md:hidden block pb-3 duration-300 ${scrollNav ? "hidden" : "block"}`} aria-hidden={scrollNav}>

            {/* Mobile Icons */}
            <div className="flex flex-wrap w-full gap-5 items-center justify-around border-0">

              {/* Logo */}
              <div className="flex w-full border-0">
                <img
                  src={scrollNav ? NavLogoDark : NavLogoLight}
                  alt="Logo"
                  className="m-auto transition-all duration-500"
                />
              </div>

              <div className="border-0 flex gap-5 w-full">

                {/* Search Button */}
                <span className="flex gap-5 justify-left">
                  <button
                    onClick={toggleSearch}
                    className={`"transition-colors duration-300 pt-2"
                      ${scrollNav ? "text-gray-800" : "text-white"} `}>
                    <Search size={24} />
                  </button>

                  {/* Mobile Menu Button */}
                  <button
                    onClick={toggleMenu}
                    className={`"transition-colors duration-300"
                      ${scrollNav ? "text-gray-800" : "text-white"} `}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </span>

                <span className="flex border-0 justify-end w-full">
                  <button
                    onClick={toggleLeftMenu}
                    className={`"transition-colors duration-300"
                      ${scrollNav ? "text-gray-800" : "text-white"} `}>
                    {isMenuLeftOpen ? <X size={24} /> : <TextAlignEnd size={24} />}
                  </button>
                </span>

              </div>
            </div>
          </span>

        </div>


        {/* Overlay */}
        <div
          className={`fixed top-0 right-0 h-full bg-black/90 z-40 transition-all duration-700 ease-in-out 
            ${isMenuOpen ? "w-full opacity-100 cursor-grab" : "w-0 opacity-0 pointer-events-none"}`}
          onClick={toggleMenu}>
        </div>



        {/* Right Sidebar - About datils in XL, LG, MD Screen Size Display */}
        <div
          className={`fixed h-full top-0 right-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-5 pl-8 w-90 bg-[#272727] text-white z-50 shadow-lg transform transition-transform duration-1000 delay-1000 ease-in-out overflow-y-scroll overflow-x-hidden
            ${isMenuOpen ? "translate-x-0 top-0 right-0 transition duration-1000 delay-1000 ease-in-out" : "translate-x-full top-0 right-0 transition-all duration-1000 delay-1000 ease-in-out"}`}>

          <div className={`flex flex-col border-0 opacity-0 pt-7 px-7 translate-y-0 transition-all duration-1000 delay-1000 ease-in-out
            ${isMenuOpen ? "-translate-y-0 bottom-0 opacity-100 right-0 relative transition-all duration-1000 delay-1000 ease-in-out" : "translate-y-full transition duration-1000 delay-1000 ease-in-out"
          }`}>

            <img src={NavLogoLight} alt="" className="w-[45%] border-0" />
            <h2 className="text-2xl pt-10">About Us</h2>

            <p className="pt-8 font-light leading-7">
              The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.
            </p>

            <div className='pb-5 border-0 ml-0 w-[82%]'>
              <button className='p-2 w-[100%] bg-[#de9190] hover:bg-[#5adb63] transition duration-600 text-white rounded-full mt-6 md:mt-5 flex align-middle gap-6'>
                <span className='bg-[white] transition duration-600 rounded-[1.5rem]'><img src="./public/assets/image/btn-icon.47c5e4ab.webp" alt="" className='bg-no-repeat rounded-[50%]' /></span>
                <span className='border-0 mt-3'>Buy Now</span>
              </button>
            </div>

            <p className="pt-10 pb-2 text-[1.5rem] font-medium">Contact Info</p>
            <ul className="space-y-5 pb-5">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 p-2rounded-xl text-white transition-all cursor-pointer"
                >
                  {item.icon}
                  <span className="text-white font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 py-5 mb-15 justify-left">
              {icons.map((item) => (
                <div
                  key={item.id}
                  className="
            group flex items-center justify-center
            w-8 p-2 rounded-full cursor-pointer bg-white
            text-black
            transition-all duration-300 ease-in-out"
                >
                  {React.cloneElement(item.icon, {
                    className: "text-current transition-all duration-300",
                  })}
                </div>
              ))}
            </div>


            <button onClick={toggleMenu} className="absolute right-5 top-5">
              <X size={24} />
            </button>
          </div>
        </div>


        {/* Right Sidebar - Menubar Datils SM, Extra Small Screen Size Display */}
        {/* Overlay */}
        <div
          className={`fixed top-0 right-0 h-full bg-black/90 z-40
            ${isMenuLeftOpen ? "w-full opacity-100 cursor-grab transition-all duration-700 ease-in-out delay-700" : "w-0 opacity-0 pointer-events-none transition-all duration-500 ease-in-out delay-800"}`}
          onClick={toggleLeftMenu}>
        </div>


        {/* Right Sidebar - Menubar Datils SM, Extra Small Screen Size Display */}
        <div
          className={`fixed top-0 right-0 h-full md:w-80 sm:w-80 w-75 bg-white text-black z-50 shadow-lg transform transition-transform overflow-y-scroll
            ${isMenuLeftOpen ? "translate-x-0 duration-700 delay-1000 ease-in-out" : "translate-x-full duration-1000 delay-100 ease-in-out"}`}>

          <div className="flex flex-col border-0 pt-15">

            <img src="../public/assets/image/logo-small.webp" alt="" className="w-38 pl-5" />

            <span className="pt-5 border-0 w-full">
            <ul className="font-light leading-7 w-full border-t-1 border-zinc-400/40">
              <li className="border-b-1 border-zinc-400/40 py-1 px-5 flex justify-between items-center">Home <span className="flex border-l-1 border-zinc-400/50"><FaAngleRight className="flex m-2 text-zinc-800 h-3" /></span></li>
              <li className="border-b-1 border-zinc-400/40 py-1 px-5 flex justify-between items-center">About <span className="flex border-l-1 border-zinc-400/50"><FaAngleRight className="flex m-2 text-zinc-800 h-3" /></span></li>
              <li className="border-b-1 border-zinc-400/40 py-1 px-5 flex justify-between items-center">Menu <span className="flex border-l-1 border-zinc-400/50"><FaAngleRight className="flex m-2 text-zinc-800 h-3" /></span></li>
              <li className="border-b-1 border-zinc-400/40 py-1 px-5 flex justify-between items-center">Gallary <span className="flex border-l-1 border-zinc-400/50"><FaAngleRight className="flex m-2 text-zinc-800 h-3" /></span></li>
              <li className="border-b-1 border-zinc-400/40 py-1 px-5 flex justify-between items-center">Blog <span className="flex border-l-1 border-zinc-400/50"><FaAngleRight className="flex m-2 text-zinc-800 h-3" /></span></li>
              <li className="border-b-1 border-zinc-400/40 py-1 px-5 flex justify-between items-center">Contact <span className="flex border-l-1 border-zinc-400/50"><FaAngleRight className="flex m-2 text-zinc-800 h-3" /></span></li>
            </ul>
            </span> 
    
            <button onClick={toggleLeftMenu} className="absolute right-5 top-5">
              <X size={24} />
            </button>
          </div>

        </div>


      </nav>



      {/* ===== Navbar xl, lg only all size ===== */}
      <nav
        className={`fixed w-full top-0 z-70 hidden xl:block lg:block transition-all duration-700 ${scrollNav ? "bg-white shadow-lg" : "bg-transparent"
          }`}>

        <div className="flex justify-end items-center px-6 py-2 2xl:w-[90%] xl:w-[90%] lg:w-[97%] m-auto">
          {/* Logo */}
          <div className="flex items-center justify-normal w-[100%]">
            <img
              src={scrollNav ? NavLogoDark : NavLogoLight}
              alt="Logo"
              className="h-15 transition-all duration-500"
            />
          </div>


          {/* Desktop Menu */}
          {/* /*taliwind using animation class used*/}
          <ul className="hidden md:flex xl:gap-10 lg:gap-10 md:gap-6 font-medium text-white xl:mr-8 lg:mr-8 md:mr-4 sm:mr-8 mr-5">

            {/* // Home Navbar */}
            <li className={`relative group cursor-pointer items-baseline hover:text-gray-800 group-hover:text-gray-800 pb-[0.4rem] transition mt-2 ${
                scrollNav ? "text-gray-800 border-0 h-10" : "text-white"
              }`}> Home

            {/* Step 1 underline */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[8px] hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-1000
                ${
                  scrollNav
                    ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 transition-opacity"
                    : "text-white bg-[url('../public/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 transition-opacity duration-1000 wave-bg"
                }`}
            ></div>

            {/* Step 2 dropdown menu — only visible on hover */}
            <ul
              className="
                absolute -left-5 top-[2.5rem]
                bg-white text-black shadow-xl
                z-50 p-6 leading-8 min-w-[11rem] justify-center
                w-fit h-fit transition-all duration-1000 ease-in-out
                opacity-0 pointer-events-none
                group-hover:left-0
                group-hover:opacity-100 group-hover:pointer-events-auto
                dropdown-delay
              "
            >
              <li className="hover:text-gray-700 transition">Home One</li>
              <li className="hover:text-gray-700 transition">Home Two</li>
              <li className="hover:text-gray-700 transition">Home Three</li>
              <li className="hover:text-gray-700 transition">Home Four</li>
              <li className="hover:text-gray-700 transition">Home Five</li>
            </ul>
            </li>
 
            {/* // About Navbar */}
            <li className={`relative group cursor-pointer items-baseline hover:text-gray-800 group-hover:text-gray-800 pb-[0.4rem] transition mt-2 ${
                scrollNav ? "text-gray-800 border-0 h-10" : "text-white"
              }`}> About

            {/* Step 1 underline */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[8px] hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-1000
                ${
                  scrollNav
                    ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 transition-opacity"
                    : "text-white bg-[url('../public/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 transition-opacity duration-1000 wave-bg"
                }`}
            ></div>

            {/* Step 2 dropdown menu — only visible on hover */}
            <ul
              className="
                absolute -left-5 top-[2.5rem]
                bg-white text-black shadow-xl
                z-50 p-6 leading-8 min-w-[11rem] justify-center
                w-fit h-fit transition-all duration-1000 ease-in-out
                opacity-0 pointer-events-none
                group-hover:left-0
                group-hover:opacity-100 group-hover:pointer-events-auto
                dropdown-delay
              "
            >
              <li className="hover:text-gray-700 transition">Home One</li>
              <li className="hover:text-gray-700 transition">Home Two</li>
              <li className="hover:text-gray-700 transition">Home Three</li>
              <li className="hover:text-gray-700 transition">Home Four</li>
              <li className="hover:text-gray-700 transition">Home Five</li>
            </ul>
            </li>
 
            {/* // Menu Navbar */}
            <li className={`relative group cursor-pointer items-baseline hover:text-gray-800 group-hover:text-gray-800 pb-[0.4rem] transition mt-2 ${
                scrollNav ? "text-gray-800 border-0 h-10" : "text-white"
              }`}> Menu

            {/* Step 1 underline */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[8px] hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-1000
                ${
                  scrollNav
                    ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 transition-opacity"
                    : "text-white bg-[url('../public/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 transition-opacity duration-1000 wave-bg"
                }`}
            ></div>

            {/* Step 2 dropdown menu — only visible on hover */}
            <ul
              className="
                absolute -left-5 top-[2.5rem]
                bg-white text-black shadow-xl
                z-50 p-6 leading-8 min-w-[11rem] justify-center
                w-fit h-fit transition-all duration-1000 ease-in-out
                opacity-0 pointer-events-none
                group-hover:left-0
                group-hover:opacity-100 group-hover:pointer-events-auto
                dropdown-delay
              "
            >
              <li className="hover:text-gray-700 transition">Home One</li>
              <li className="hover:text-gray-700 transition">Home Two</li>
              <li className="hover:text-gray-700 transition">Home Three</li>
              <li className="hover:text-gray-700 transition">Home Four</li>
              <li className="hover:text-gray-700 transition">Home Five</li>
            </ul>
            </li>
 
            {/* // Gallary Navbar */}
            <li className={`relative group cursor-pointer items-baseline hover:text-gray-800 group-hover:text-gray-800 pb-[0.4rem] transition mt-2 ${
                scrollNav ? "text-gray-800 border-0 h-10" : "text-white"
              }`}> Gallary

            {/* Step 1 underline */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[8px] hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-1000
                ${
                  scrollNav
                    ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 transition-opacity"
                    : "text-white bg-[url('../public/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 transition-opacity duration-1000 wave-bg"
                }`}
            ></div>

            {/* Step 2 dropdown menu — only visible on hover */}
            <ul
              className="
                absolute -left-5 top-[2.5rem]
                bg-white text-black shadow-xl
                z-50 p-6 leading-8 min-w-[11rem] justify-center
                w-fit h-fit transition-all duration-1000 ease-in-out
                opacity-0 pointer-events-none
                group-hover:left-0
                group-hover:opacity-100 group-hover:pointer-events-auto
                dropdown-delay
              "
            >
              <li className="hover:text-gray-700 transition">Home One</li>
              <li className="hover:text-gray-700 transition">Home Two</li>
              <li className="hover:text-gray-700 transition">Home Three</li>
              <li className="hover:text-gray-700 transition">Home Four</li>
              <li className="hover:text-gray-700 transition">Home Five</li>
            </ul>
            </li>
 
            {/* // Blog Navbar */}
            <li className={`relative group cursor-pointer items-baseline hover:text-gray-800 group-hover:text-gray-800 pb-[0.4rem] transition mt-2 ${
                scrollNav ? "text-gray-800 border-0 h-10" : "text-white"
              }`}> Blog

            {/* Step 1 underline */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[8px] hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-1000
                ${
                  scrollNav
                    ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 transition-opacity"
                    : "text-white bg-[url('../public/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 transition-opacity duration-1000 wave-bg"
                }`}
            ></div>

            {/* Step 2 dropdown menu — only visible on hover */}
            <ul
              className="
                absolute -left-5 top-[2.5rem]
                bg-white text-black shadow-xl
                z-50 p-6 leading-8 min-w-[11rem] justify-center
                w-fit h-fit transition-all duration-1000 ease-in-out
                opacity-0 pointer-events-none
                group-hover:left-0
                group-hover:opacity-100 group-hover:pointer-events-auto
                dropdown-delay
              "
            >
              <li className="hover:text-gray-700 transition">Home One</li>
              <li className="hover:text-gray-700 transition">Home Two</li>
              <li className="hover:text-gray-700 transition">Home Three</li>
              <li className="hover:text-gray-700 transition">Home Four</li>
              <li className="hover:text-gray-700 transition">Home Five</li>
            </ul>
            </li>
 

            {/* // Contact Navbar */}
            <li className={`relative group cursor-pointer items-baseline hover:text-gray-800 group-hover:text-gray-800 pb-[0.4rem] transition mt-2 ${
                scrollNav ? "text-gray-800 border-0 h-10" : "text-white"
              }`}> Contact

            {/* Step 1 underline */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[8px] hover:text-gray-800 pb-[0.4rem] transition-all duration-1000 delay-1000
                ${
                  scrollNav
                    ? "text-gray-800 bg-none opacity-0 group-hover:opacity-100 transition-opacity"
                    : "text-white bg-[url('../public/assets/image/menu-separater-icon.webp')] bg-bottom bg-auto opacity-0 transition-opacity duration-1000 wave-bg"
                }`}
            ></div>

            {/* Step 2 dropdown menu — only visible on hover */}
            <ul
              className="
                absolute -left-5 top-[2.5rem]
                bg-white text-black shadow-xl
                z-50 p-6 leading-8 min-w-[11rem] justify-center
                w-fit h-fit transition-all duration-1000 ease-in-out
                opacity-0 pointer-events-none
                group-hover:left-0
                group-hover:opacity-100 group-hover:pointer-events-auto
                dropdown-delay
              "
            >
              <li className="hover:text-gray-700 transition">Home One</li>
              <li className="hover:text-gray-700 transition">Home Two</li>
              <li className="hover:text-gray-700 transition">Home Three</li>
              <li className="hover:text-gray-700 transition">Home Four</li>
              <li className="hover:text-gray-700 transition">Home Five</li>
            </ul>
            </li>
 

          </ul>


          {/* Mobile Icons */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className={`"transition-colors duration-300"
                ${scrollNav ? "text-gray-800" : "text-white"} `}>
              <Search size={24} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`"transition-colors duration-300"
                ${scrollNav ? "text-gray-800" : "text-white"} `}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>


        {/* Overlay */}
        <div
          className={`fixed top-0 right-0 h-full bg-black/90 z-40 transition-all duration-700 ease-in-out 
            ${isMenuOpen ? "w-full opacity-100 cursor-grab" : "w-0 opacity-0 pointer-events-none"}`}
          onClick={toggleMenu}>
        </div>


        {/* Right Sidebar - About datils in XL, LG, MD Screen Size Display */}
        <div
          className={`fixed h-full top-0 right-0 xl:pl-0 lg:pl-0 md:pl-0 sm:pl-5 pl-8 w-90 bg-[#272727] text-white z-50 shadow-lg transform transition-transform duration-1000 delay-1000 ease-in-out overflow-y-scroll overflow-x-hidden
            ${isMenuOpen ? "translate-x-0 top-0 right-0 transition duration-1000 delay-1000 ease-in-out" : "translate-x-full transition-all duration-1000 delay-1000 ease-in-out"}`}>

          <div className={`flex flex-col border-0 opacity-0 pt-7 px-7 translate-y-0 transition-all duration-1000 delay-1000 ease-in-out
            ${isMenuOpen ? "-translate-y-0 bottom-0 opacity-100 right-0 relative transition-all duration-1000 delay-1000 ease-in-out" : "translate-y-full transition duration-1000 delay-1000 ease-in-out"
          }`}>

            <img src={NavLogoLight} alt="" className="w-[45%] border-0" />
            <h2 className="text-2xl pt-10">About Us</h2>

            <p className="pt-8 font-light leading-7">
              The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.
            </p>

            <div className='pb-5 border-0 ml-0 w-[82%]'>
              <button className='p-2 w-[100%] bg-[#de9190] hover:bg-[#5adb63] transition duration-600 text-white rounded-full mt-6 md:mt-5 flex align-middle gap-6'>
                <span className='bg-[white] transition duration-600 rounded-[1.5rem]'><img src="./public/assets/image/btn-icon.47c5e4ab.webp" alt="" className='bg-no-repeat rounded-[50%]' /></span>
                <span className='border-0 mt-3'>Buy Now</span>
              </button>
            </div>

            <p className="pt-10 pb-2 text-[1.5rem] font-medium">Contact Info</p>
            <ul className="space-y-5 pb-5">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 p-2rounded-xl text-white transition-all cursor-pointer"
                >
                  {item.icon}
                  <span className="text-white font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 py-5 mb-15 justify-left">
              {icons.map((item) => (
                <div
                  key={item.id}
                  className="
            group flex items-center justify-center
            w-8 p-2 rounded-full cursor-pointer bg-white
            text-black
            transition-all duration-300 ease-in-out"
                >
                  {React.cloneElement(item.icon, {
                    className: "text-current transition-all duration-300",
                  })}
                </div>
              ))}
            </div>


            <button onClick={toggleMenu} className="absolute right-5 top-5">
              <X size={24} />
            </button>
          </div>
        </div>


      </nav>


      {/* ===== Search Section Group ===== */}
      <div
        onClick={toggleSearch}
        className={`fixed top-0 left-0 w-full z-[80] transition-all duration-600 ease-in-out ${isSearchOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-150 h-full opacity-80 pointer-events-none"
          }`}>

        {/* Inner panel - controls height */}
        <div
          className={`relative top-0 bg-black/90 border-0 flex flex-col items-center justify-center overflow-hidden transition-all duration-600 ease-in-out ${isSearchOpen ? "w-full h-[20rem] transition-all duration-600 ease-in-out" : "w-full h-[0rem] transition-all duration-600 ease-in-out"
            }`}
          onClick={(e) => e.stopPropagation()}>
        </div>

        {/* Background */}
        <div
          className={`relative bg-black/90 border-0 flex flex-col items-center justify-center overflow-visible transition-all duration-600 ease-in-out  ${isSearchOpen ? "w-full h-[18rem]" : "w-full h-[18rem]"}`}
          onClick={(e) => e.stopPropagation()}>

          {/* Wave image */}
          <div
            className={`bg-[url(../public/assets/image/waves-shape.webp)] absolute left-0 w-[100%] h-[17rem] bg-cover border-0 border-amber-500 transition-all duration-1000 ease-in-out
                  ${isSearchOpen ? "top-[18rem] opacity-100 transition-all duration-1000 ease-in-out" : "top-[18rem] opcity-100 transition-all duration-1000 ease-in-out"}
                `}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
          </div>

        </div>


        {/* Content */}
        <div
          className="fixed w-[100%] h-[20rem] top-5 z-50 pt-10 flex border-0 justify-center"
          onClick={(e) => e.stopPropagation()}>

          <lable className={`absolute w-full border-0 flex justify-center -z-30 transition-all duration-1000 ease-in-out
            ${isSearchOpen ? "top-30 z-80 transition-all duration-1000 ease-in-out" : "-top-50 z-80 transition-all duration-1000 ease-in-out"} `}
            onClick={(e) => { e.stopPropagation(); }} >

            <button className="bg-pink-400 absolute z-20 text-white p-5 rounded-full"><ArrowUp /></button>
            <i className="absolute -left-0.6 w-[5%] top-1 rounded-full bg-white shadow-[rgba(255,255,255,0.8)_15px_15px_50px_10px] p-[2rem]"></i>

          </lable>

          <lable className="xl:w-[55%] lg:w-[80%] md:w-[90%] sm:w-[90%] w-[90%] relative z-80 2xl:top-50 xl:top-50 lg:top-40 md:top-40 sm:top-50 top-50 transition-all duration-1000 ease-in-out flex justify-around">
            <div className={`absolute translate-0 z-50 font-semibold text-[1.1rem] transition-all duration-1000 ease-in-out
              ${isSearchOpen ? "scale-x-full w-full left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ease-in-out" : "scale-x-0 w-0 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out"} `}
              onClick={(e) => { e.stopPropagation(); }} >

              <input type="text" placeholder="Search Here"
                className="p-6 w-full placeholder-gray-900 z-50 font-semibold text-[1.1rem] bg-white text-black focus:outline-none transition-all duration-1000 ease-in-out" />

              <button className="absolute right-5 z-50 top-6 border-0">
                <Search className="text-bold font-black transition-all duration-1000 ease-in-out" />
              </button>
            </div>
          </lable>

          <div>
            <button
              onClick={toggleSearch}
              className="rounded-full text-bold text-white fixed z-80 2xl:right-20 xl:right-20 lg:right-20 md:right-20 sm:right-20 right-10 top-10">
              <X size={38} />
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
