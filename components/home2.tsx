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
import VanillaSeeds from "../resources/vanilla-seeds.jpg";
import VanillaPowder from "../resources/vanilla-powder-1024.jpg";
import { initScrollTrigger, clearScrollTriggers } from '../header/scroll-anim';
import { useLayoutEffect } from "react";
import { Colors } from "../header/colors";

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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                    {firstRow.map((firstRow) => 
                    <div key={firstRow.id} className="relative group">
                        {/*gambar*/}
                        <Image
                        src={firstRow.image}
                        alt={firstRow.text}
                        width={300}
                        height={300}
                        className="w-full h-96 object-cover rounded-lg"/>
                        {/*label*/}
                        <div className="absolute inset-0 flex items-center justify-center ">
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
                    <span className={`absolute -bottom-1 left-0 w-full h-2 ${Colors.secondary_bg} opacity-60 rounded-full -z-10`}></span>
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
            
        </div>  
    );
}

export default home;