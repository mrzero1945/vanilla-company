"use client"
import { useLayoutEffect } from "react"
import { initScrollTrigger, clearScrollTriggers } from "../header/scroll-anim"
import susprac from "../resources/sus-prac.jpg";
import Image from "next/image";
import { Colors } from "../header/colors";
import VanilaImg from '../resources/vanila.jpg';
import SustainabilityIcon from "../resources/sustainability-icon2.png";
import plant from "../resources/plant.jpg";
import plant2 from "../resources/plant-2.jpg";
type desc = {
    id: number
    title : string,
    content : string,
    image : string
}

const Sustainability = ()=>{
    const p_sus_obj : desc[] =[ {id: 1,title: "Sustainable Practices", 
        content : "We implement eco-friendly farming practices and collaborate directly with local farmers to promote sustainable agricultural techniques. Our focus is on reducing environmental impact, optimizing water usage, and enhancing soil health to ensure the sustainability of our crops for future generations.", 
        image: susprac.src}, 
        {id: 2, 
        title: "Empowering Local Communities", 
        content: "We believe in empowering local farmers by providing resources, education, and fair trade opportunities. Together, we create stronger communities, support livelihoods, and build lasting partnerships that benefit everyone.",
        image: VanilaImg.src},
        {id:3, 
        title: "Reducing Our Carbon Footprint",
        content: " Through continuous innovation and process optimization, we actively reduce emissions in our production and distribution systems. From using renewable energy sources to streamlining transportation routes, we are dedicated to minimizing our environmental impact.",
        image: plant.src},
        {id:4,
        title: "Join Our Journey to Sustainability",
        content: "Partner with PT Nature Exquisite Nusantara to make a difference. Together, we can build a sustainable future for our planet and communities.",
        image: plant2.src
        }
    ]
    useLayoutEffect(()=>{
        initScrollTrigger();
        return()=>{
            clearScrollTriggers();
        }
    }, []);
    return(
        <div>
            <section className="bg-[rgb(84,150,136)] text-white pt-16 pb-12 relative bg-gray-50 text-gray-800 py-20 scroll-row"
  style={{
    backgroundImage: `url(${VanilaImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    {/* Background Overlay */}
   {/* Overlay semi-transparan */}
 <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative container mx-auto px-4 flex flex-col items-center text-center z-10">
          <Image
          src={SustainabilityIcon.src}
          alt='s'
          width={60}
          height={60}
          className='mx-auto'
          />
          <h1 className="md:text-5xl text-3xl font-bold mb-6 text-[rgb(244,234,197)]">Our Commitment to Sustainability</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl md:mx-auto leading-relaxed mx-5">
            At PT Nature’s Exquisite Nusantara, sustainability is at the heart of our business. 
            We strive to preserve the environment while supporting local communities and ensuring premium quality products.
          </p>
        </div>
      </section>
            <section className="mt-5 scroll-row">
                <h2 className={`mx-10 md:text-4xl text-3xl text-center font-bold ${Colors.primary_text}`}>Sustainable Future Practices and Innovation</h2>
                <p className="text-gray-700 text-center mx-10">At PT Nature Exquisite Nusantara, we are committed to creating a sustainable future through eco-friendly practices, empowering communities, reducing carbon footprints, and fostering partnerships that drive positive change for our planet and people.</p>
            </section>
            <section className="grid md:grid-cols-2 scroll-row gap-4 my-5">
                {p_sus_obj.map((p_sus_obj)=>
                <div key={p_sus_obj.id} className="relative group overflow-hidden">
                    <Image
                    src={p_sus_obj.image}
                    alt={p_sus_obj.title}
                    width={1000}
                    height={1000}
                    className="w-full h-36 object-cover transform transition-transform duration-300 group-hover:scale-125"
                    />
                    {/* Overlay semi-transparan */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="absolute inset-0 flex flex-col justify-start items-start p-4">
                        <h2 className={`${Colors.secondary_text} text-2xl font-semibold`}>
                            {p_sus_obj.title}
                        </h2>
                        <p className={`text-lg leading-relaxed ${Colors.secondary_text} max-w-3xl mx-auto`}>
                            {p_sus_obj.content}
                        </p>
                    </div>
                </div>
                )}
               
            </section>
        </div>
    )
}

export default Sustainability;