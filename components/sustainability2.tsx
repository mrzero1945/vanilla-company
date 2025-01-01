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

type Desc = {
    id: number
    title: string,
    content: string,
    image: string
}

const Sustainability = () => {
    const p_sus_obj: Desc[] = [
        {
            id: 1,
            title: "Sustainable Practices",
            content: "We implement eco-friendly farming practices and collaborate directly with local farmers to promote sustainable agricultural techniques. Our focus is on reducing environmental impact, optimizing water usage, and enhancing soil health to ensure the sustainability of our crops for future generations.",
            image: susprac.src
        },
        {
            id: 2,
            title: "Empowering Local Communities",
            content: "We believe in empowering local farmers by providing resources, education, and fair trade opportunities. Together, we create stronger communities, support livelihoods, and build lasting partnerships that benefit everyone.",
            image: VanilaImg.src
        },
        {
            id: 3,
            title: "Reducing Our Carbon Footprint",
            content: "Through continuous innovation and process optimization, we actively reduce emissions in our production and distribution systems. From using renewable energy sources to streamlining transportation routes, we are dedicated to minimizing our environmental impact.",
            image: plant.src
        },
        {
            id: 4,
            title: "Join Our Journey to Sustainability",
            content: "Partner with PT Nature Exquisite Nusantara to make a difference. Together, we can build a sustainable future for our planet and communities.",
            image: plant2.src
        }
    ];

    useLayoutEffect(() => {
        initScrollTrigger();
        return () => {
            clearScrollTriggers();
        }
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center text-white py-20"
                style={{
                    backgroundImage: `url(${VanilaImg.src})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative container mx-auto px-6 text-center">
                    <Image
                        src={SustainabilityIcon.src}
                        alt="Sustainability Icon"
                        width={60}
                        height={60}
                        className="mx-auto mb-4"
                    />
                    <h1 className="text-4xl font-bold mb-4 text-[rgb(244,234,197)]">
                        Our Commitment to Sustainability
                    </h1>
                    <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                        At PT Nature’s Exquisite Nusantara, sustainability is at the heart of our business. We strive to preserve the environment while supporting local communities and ensuring premium quality products.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="mt-10 px-6">
                <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">
                    Sustainable Future Practices and Innovation
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                    At PT Nature Exquisite Nusantara, we are committed to creating a sustainable future through eco-friendly practices, empowering communities, reducing carbon footprints, and fostering partnerships that drive positive change for our planet and people.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    {p_sus_obj.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden group transition-transform transform hover:scale-105"
                        >
                            <div className="relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-20"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Sustainability;
