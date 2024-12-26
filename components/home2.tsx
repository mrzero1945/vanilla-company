"use client"
import Image from "next/image"
import BloodyNatural from "../resources/vanilla-beans.jpg"
import BloodyPremium from "../resources/Vanilla-extract.jpg"
import BloodyQuality from "../resources/vanilla-pods.jpg";
import BloodySatisfied from "../resources/plant-2.jpg";
import PremiumIcon from '../resources/premium-icon.png';
import VanillaIcon from '../resources/vanilla-icon.png';
import CoffeBeanIcon from '../resources/coffe-beans-icon.png';
import CocoaBeanIcon from '../resources/cocoa-bean-icon.png';
import VanillaExtract from "../resources/vanilla-extract.webp";
import VanillaPaste from "../resources/vanilla-paste.webp";
import VanillaSeeds from "../resources/vanilla-seeds.webp";
import VanillaPowder from "../resources/vanilla-powder-1024.jpg";
import ParnershipIcon from '../resources/partnership-icon.png';
{/*bloody p*/}
import PlantImg from "../resources/plant-2.jpg";
import PlantImg2 from "../resources/plant.jpg";
{/*bloody vanilla*/}
import Vanilla1 from "../resources/vanilla-1.jpg";
import Vanilla2 from "../resources/product-sample.jpg";
import Vanilla3 from "../resources/vanilla-3.jpg";
import { initScrollTrigger, clearScrollTriggers } from '../header/scroll-anim';
import { useLayoutEffect } from "react";
import { Colors } from "../header/colors";
{/*news page */}
import { VanillaNewsPage } from "./news";
import { EmailSubcribe } from "./subscribe-email";

type FirstImages = {
    id:number,
    text: string,
    image: string
}
type Products = {
    id:number,
    title: string
    image: string
}

type PremiumProducts = {
    id:number,
    title: string,
    image:string,
    content: string
}

const home = ()=>{
    
      useLayoutEffect(() =>{
        initScrollTrigger();
        return()=>{
          clearScrollTriggers();
        };
      }, []);
    
    const firstRow: FirstImages[]  = [{id:1, text: "Natural", image:BloodyNatural.src},
         {id:2, text:"Premium", image: BloodyPremium.src}, 
         {id:3, text:"Quality", image:BloodyQuality.src}, 
         {id:4, text:"Satisfied", image:BloodySatisfied.src}];
    
    const products: Products[] = [{id:1, title: "Vanilla Extract", image: VanillaExtract.src},
         {id:2, title: "Vanilla Paste", image: VanillaPaste.src},
         {id:3, title: "Vanilla Seeds", image: VanillaSeeds.src},
         {id:4, title: "Vanilla Powder", image: VanillaPowder.src}];

    const premium_products: PremiumProducts[] = [{id:1, title: "Vanilla Beans", image: VanillaIcon.src, content: " Handpicked, premium-quality vanilla beans with unmatched aroma and flavor."},
         {id:2, title: "Coffee Beans", image:CoffeBeanIcon.src, content:"Sustainably harvested coffee beans from the lush regions of Indonesia."},
         {id:3, title: "Cocoa Beans", image:CocoaBeanIcon.src, content:"Superior-grade cocoa beans, ideal for premium chocolate production."}];
    
    const bloody_p : PremiumProducts[] = [{id:1, title: "Bulk Shipping", image: PlantImg.src, content:"Ready to deliver worldwide"},
         {id:2, title: "Pure Vanilla", image: PlantImg2.src, content:"100% organic ingredients sourced from Indonesia"},
         {id:3, title: "High Standards", image: Vanilla1.src, content: "Made with all-natural ingredients and rich, intense vanilla flavors."},
         {id:4, title: "Simply the Finest", image: Vanilla2.src, content: "We are confident in delivering top-quality products."},
         {id:5, title: "Pioneer of Superior Quality", image: Vanilla3.src, content: "Vanilla products made from ethically sourced and organic ingredients."}];
    return(
        <div>
            <section className="scroll-row">
                <div className="bg-white text-center md:py-10 py-5">
                <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${Colors.primary_text}`}>
                    Premium Indonesian Vanilla Exporter
                </h1>
                <p className="text-lg mb-8 max-w-3xl mx-5 md:mx-auto leading-relaxed">
                    Trusted by global businesses for authentic, high-quality vanilla products, 
                    sourced sustainably and delivered with excellence.
                </p>
                </div>
            </section>
            <section className="scroll-row">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {firstRow.map((firstRow) => 
                    <div key={firstRow.id} className="relative group overflow-hidden">
                        {/* gambar */}
                        <Image
                            src={firstRow.image}
                            alt={firstRow.text}
                            width={1000}
                            height={1000}
                            className="w-full md:h-96 h-64 object-cover transform transition-transform duration-300 group-hover:scale-125"
                        />
                        {/* label */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`${Colors.secondary_bg} ${Colors.primary_text} font-semibold px-4 py-2 rounded shadow-md border border-2 ${Colors.primary_border}`}>
                                {firstRow.text}
                            </span>
                        </div>
                    </div>
                    )}
                </div>
            </section>

            {/* Products Section */}
            <section className="bg-white py-10 scroll-row">
                <div className="container mx-auto px-4 text-center">  
                    <Image
                        src={PremiumIcon.src}
                        alt="Premium Icon"
                        width={1000}
                        height={1000}
                        className='mx-auto w-20 md:h-auto md:w-24'
                    />

                    
                    <h2 className={`text-2xl md:text-4xl font-bold ${Colors.primary_text} relative inline-block`}>
                    <span className={`absolute -bottom-1 left-0 w-full h-2 ${Colors.secondary_bg} opacity-60 rounded-full -z-10`}></span>
                    Our Premium Products
                    </h2>
                    
                    <p className="text-lg  text-gray-700 mb-12 max-w-2xl mx-auto">
                    Explore our sustainably sourced Indonesian vanilla and other agricultural products tailored for global industries.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Product Cards */}
                    {premium_products.map((premium_products) =>
              
                    <div key={premium_products.id} className="p-6 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition">
                        <h3 className={`text-2xl font-bold mb-4 ${Colors.primary_text}`}>{premium_products.title}</h3>
                        <Image
                        src={premium_products.image}
                        alt={premium_products.title}
                        width={60}
                        height={60}
                        className='mx-auto'
                        />
                        <p className="text-gray-700 text-lg">
                        {premium_products.content}
                        </p>
                    </div>
                          )}
                    </div>
                </div>
            </section>
            <section className="scroll-row">
                <div className="text-center py-8">
                    {/* Teks Kecil */}
                    <p className="text-sm text-gray-500 tracking-wide uppercase">
                        OUR ELITE PRODUCT
                    </p>
                    {/* Teks Judul dengan Garis */}
                    <h2 className={`text-2xl md:text-4xl font-medium ${Colors.primary_text} relative inline-block`}>
                    <span className={`absolute -bottom-1 left-0 w-full h-2 ${Colors.secondary_bg} opacity-60 rounded-full z-50`}></span>
                        Top Quality Vanilla Product
                    </h2>
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:mx-10">
                   {products.map((products) =>
                   <div key={products.id} className="border rounded">
                     <Image
                     src={products.image}
                     width={1000}
                     height={1000}
                     alt={products.title}
                     className="w-84 h-64"
                     />
                     <p className={`text-lg text-center ${Colors.primary_text}`}>{products.title}</p>
                    </div>
                )}
                </div>
                <div className="flex justify-center my-5">
                    <button className={`${Colors.primary_bg} hover:bg-[rgb(244,234,197)] text-white font-bold py-2 px-4 rounded-full`}>EXPLORE ALL PRODUCTS</button>
                </div>
      
            </section>
            <section className="scroll-row">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {/* Kolom Pertama: Dua Gambar dalam Satu Kolom */}
            <div className="col-span-1">
              {bloody_p
                .filter((item, index) => index < 2) // Hanya mengambil dua elemen pertama
                .map((bloody_p) => (
                  <div key={bloody_p.id} className="relative group overflow-hidden md:mt-0 md:mb-4 mt-4">
                    {/* Gambar */}
                    <Image
                      src={bloody_p.image}
                      alt={bloody_p.title}
                      width={1000}
                      height={1000}
                      className="w-full h-36 object-cover  transform transition-transform duration-300 group-hover:scale-125"
                    />
                    {/* Overlay semi-transparan */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    {/* Teks di atas overlay */}
                    <div className="absolute inset-0 flex flex-col justify-start items-start p-4">
                      <h2 className={`${Colors.secondary_text} text-2xl font-semibold`}>
                        {bloody_p.title}
                      </h2>
                      <p className={`text-lg mt-2 ${Colors.secondary_text}`}>
                        {bloody_p.content}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Kolom Kedua: Gambar ke-3 */}
            <div className="col-span-1">
              {bloody_p
                .filter((item, index) => index === 2) // Hanya mengambil elemen ke-3
                .map((bloody_p) => (
                  <div key={bloody_p.id} className="relative group overflow-hidden ">
                    {/* Gambar */}
                    <Image
                      src={bloody_p.image}
                      alt={bloody_p.title}
                      width={1000}
                      height={1000}
                      className="w-full h-36 md:h-72 object-cover transform transition-transform duration-300 group-hover:scale-125"
                    />
                    {/* Overlay semi-transparan */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    {/* Teks di atas overlay */}
                    <div className="absolute inset-0 flex flex-col justify-start items-start md:justify-center md:items-center p-4">
                      <h2 className={`${Colors.secondary_text} text-2xl font-semibold`}>
                        {bloody_p.title}
                      </h2>
                      <p className={`text-lg mt-2 md:text-center ${Colors.secondary_text}`}>
                        {bloody_p.content}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Kolom Ketiga: Gambar ke-4 dan ke-5 */}
            <div className="col-span-1">
              {bloody_p
                .filter((item, index) => index >= 3 && index <= 4) // Mengambil elemen ke-4 dan ke-5
                .map((bloody_p) => (
                  <div key={bloody_p.id} className={`relative group overflow-hidden md:mb-4 ${bloody_p.id === 5 && "mt-4 md:mt-0"}`}>
                    {/* Gambar */}
                    <Image
                      src={bloody_p.image}
                      alt={bloody_p.title}
                      width={1000}
                      height={1000}
                      className="w-full h-36 object-cover transform transition-transform duration-300 group-hover:scale-125"
                    />
                    {/* Overlay semi-transparan */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    {/* Teks di atas overlay */}
                    <div className="absolute inset-0 flex flex-col justify-start items-start md:justify-end md:items-end p-4">
                      <h2 className={`${Colors.secondary_text} text-2xl font-semibold`}>
                        {bloody_p.title}
                      </h2>
                      <p className={`text-lg mt-2 md:text-right ${Colors.secondary_text}`}>
                        {bloody_p.content}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section className="relative h-[400px] w-full mt-5">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={Vanilla1.src} // Ganti dengan path gambar Anda
                    alt="Vanilla Background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h4 className="text-sm uppercase tracking-widest mb-2">
                    Mix, Match & Shipping Around the World
                </h4>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Choose your vanilla products here
                </h1>
                <button className={`${Colors.primary_bg} text-white px-6 py-2 rounded-lg shadow-md ${Colors.secondary_bg_hover} transition duration-300`}>
                    All Products
                </button>
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
            className="text-[rgb(255,255,255)] bg-[rgb(84,150,136)] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
      <section>
        <VanillaNewsPage/>
      </section>
      <section>
        <EmailSubcribe/>
      </section>
        </div>  
    );
}

export default home;