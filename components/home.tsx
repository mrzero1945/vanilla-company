"use client"
import Image from 'next/image';
import VanilaImg from '../resources/vanila.jpg';
import TrustedIcon from '../resources/trusted-icon.png';
import PremiumIcon from '../resources/premium-icon.png';
import AboutIcon from '../resources/about-icon2.png';
import ParnershipIcon from '../resources/partnership-icon.png';
import VanillaIcon from '../resources/vanilla-icon.png';
import CoffeBeanIcon from '../resources/coffe-beans-icon.png';
import CocoaBeanIcon from '../resources/cocoa-bean-icon.png';
import EliteIcon from '../resources/elite-icon.png';
import VanillaExtractImage from '../resources/vanilla-extract.svg';
import VanillaPasteImage from '../resources/vanilla-paste.svg';
import VanillaSeedsImage from '../resources/vanilla-seeds.svg';
import VanillaPowder from '../resources/vanilla-powder.svg'
import { initScrollTrigger, clearScrollTriggers } from '../header/scroll-anim';
import { EmailSubcribe } from './subscribe-email';
import { useLayoutEffect } from 'react';




const Home = () => {

  useLayoutEffect(() =>{
    initScrollTrigger();
    return()=>{
      clearScrollTriggers();
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[rgb(84,150,136)] text-white py-10 scroll-row">
        <div className="container mx-auto px-4 text-center">
          {/* Premium Icon */}
          <div className="mb-2">
            <Image
              src={PremiumIcon.src}
              alt="Premium Icon"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Premium Indonesian Vanilla Exporter
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Trusted by global businesses for authentic, high-quality vanilla products, 
            sourced sustainably and delivered with excellence.
          </p>
          {/* Trusted Icon */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src={TrustedIcon.src}
              alt="Trusted Icon"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-lg font-semibold">Trusted Supplier</span>
          </div>
          <a
            href="/products"
            className="bg-white text-[rgb(84,150,136)] px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Discover Our Products
          </a>
        </div>
      </section>

   {/* About Section */}
<section
  className="relative bg-gray-50 text-gray-800 py-10 scroll-row"
  style={{
    backgroundImage: `url(${VanilaImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm"></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 flex flex-col items-center text-center z-10 text-white">
    {/* Title Section */}
    <div className="mb-8">
    <Image
          src={AboutIcon.src}
          alt="About Icon"
          width={40}
          height={40}
          className="mx-auto"
        />
      <div className="flex justify-center items-center">
      
        <h2 className="text-4xl font-bold text-[rgb(rgb(244,234,197))]">About Us</h2>
      </div>
    </div>

    {/* Text Content */}
    <div className="max-w-2xl">
      <p className="text-lg mb-6 leading-relaxed">
        PT Nature’s Exquisite Nusantara is a premium exporter of Indonesian vanilla, supporting sustainable practices and empowering local farmers. With a commitment to quality and traceability, we deliver authentic agricultural excellence to global businesses.
      </p>
      <a
        href="/about"
        className="text-[rgb(244,234,197)] font-semibold text-lg hover:underline"
      >
        Learn More
      </a>
    </div>
  </div>
</section>




      {/* Products Section */}
      <section className="bg-white py-10 scroll-row">
        <div className="container mx-auto px-4 text-center">
          <Image
              src={PremiumIcon.src}
              alt="Premium Icon"
              width={60}
              height={60}
              className='mx-auto'
            />
      
          
          <h2 className="text-4xl font-bold mb-8 text-[rgb(84,150,136)]">
            Our Premium Products
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Explore our sustainably sourced Indonesian vanilla and other agricultural products tailored for global industries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="p-6 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-4 text-[rgb(84,150,136)]">Vanilla Beans</h3>
              <Image
              src={VanillaIcon.src}
              alt='vanilla'
              width={60}
              height={60}
              className='mx-auto'
              />
              <p className="text-gray-700">
                Handpicked, premium-quality vanilla beans with unmatched aroma and flavor.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-4 text-[rgb(84,150,136)]">Coffee Beans</h3>
              <Image 
              src={CoffeBeanIcon.src}
              alt='cofee'
              width={60}
              height={60}
              className='mx-auto'
              />
              <p className="text-gray-700">
                Sustainably harvested coffee beans from the lush regions of Indonesia.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-3 text-[rgb(84,150,136)]">Cocoa Beans</h3>
              <Image
              src={CocoaBeanIcon.src}
              alt='cocoa'
              width={50}
              height={50}
              className='mx-auto'
              />
              <p className="text-gray-700">
                Superior-grade cocoa beans, ideal for premium chocolate production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 ">
  <div className="container mx-auto px-4 text-center">
    <Image
      src={EliteIcon.src}
      alt="Elite Icon"
      width={60}
      height={60}
      className="mx-auto"
    />
    <h2 className="text-4xl font-bold mb-8 text-[rgb(84,150,136)]">
      Our Elite Products
    </h2>
    <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
      Variety of Indonesian spices
    </p>

    {/* Grid Produk */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div className="group relative w-full h-60 rounded-lg overflow-hidden shadow-lg bg-gray-50 cursor-pointer">
        {/* Gambar Produk (Default) */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0"
        >
          <Image
            src={VanillaExtractImage.src}
            alt="Vanilla Extract"
            className="object-cover w-full h-full"
            width={200}
            height={150}
          />
        </div>

        {/* Detail Produk (Hover) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          <h3 className="text-xl font-bold text-[rgb(84,150,136)] mb-2">
            Vanilla Extract
          </h3>
          <p className="text-sm text-gray-700">
          Vanilla Extract is a liquid made by soaking vanilla beans in alcohol and water to extract their rich flavor. 
          </p>
        </div>
      </div>
      <div className='group relative w-full h-60 rounded-lg overflow-hidden shadow-lg bg-gray-50 cursor-pointer'>
        <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0'>
          <Image 
          src={VanillaPasteImage.src}
          alt=''
          className='object-cover w-full h-full'
          width={200}
          height={150}
          />
        </div>
        {/* detail */}
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
          <h3 className='text-xl font-bold text-[rgb(84,150,136)] mb-2'>Vanilla Paste</h3>
          <p className='text-sm text-gray-700'>
          Vanilla Paste is a concentrated vanilla product made from real vanilla beans, blended into a thick and syrupy consistency.
          </p>
        </div>
      </div>
      <div className='group relative w-full h-60 rounded-lg overflow-hidden shadow-lg bg-gray-50 cursor-pointer'>
      <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0'>
        <Image
        src={VanillaSeedsImage.src}
        alt=''
        className='object-cover w-full h-full'
        width={200}
        height={150}
        />
      </div>
      {/*Detail*/}
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
        <h3 className='text-xl font-bold text-[rgb(84,150,136)] mb-2'>Vanilla Seeds</h3>
        <p className='text-sm text-gray-700'>Vanilla Seeds are the tiny black seeds found inside the vanilla bean pod, prized for their rich flavor and elegant appearance.</p>
      </div>
      </div>
      <div className='group relative w-full h-60 rounded-lg overflow-hidden shadow-lg bg-gray-50 cursor-pointer'>
      <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0'>
        <Image
        src={VanillaPowder.src}
        alt=''
        className='object-cover w-full h-full'
        width={200}
        height={150}
        />
      </div>
      {/*Detail*/}
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
      <h3 className='text-xl font-bold text-[rgb(84,150,136)] mb-2'>Vanilla Powder</h3>
      <p className='text-sm text-gray-700'>Vanilla Powder is a fine, dry powder made from ground vanilla beans or dehydrated vanilla extract.</p>
      </div>
      </div>
    </div>
  </div>
</section>




      {/* Contact Section */}
      <section className="bg-gray-50 text-gray-800 py-10 scroll-row">
        <div className="container mx-auto px-4 text-center">
        <Image
              src={ParnershipIcon.src}
              alt="Premium Icon"
              width={60}
              height={60}
              className='mx-auto'
            />
      
          <h2 className="text-4xl font-bold mb-8 text-[rgb(84,150,136)]">
            Partner with Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's grow together! Reach out to explore partnership opportunities, request samples, 
            or learn more about our sustainability practices.
          </p>
          <a
            href="/contact"
            className="bg-[rgb(84,150,136)] text-[rgb(255,255,255)] px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-700 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
      <EmailSubcribe/>
    </div>
  );
};

export default Home;
