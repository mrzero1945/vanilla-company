"use client";

import React from "react";
import { initCircleAnimation } from "../header/circle-anim"; 
import { useEffect } from 'react';
import PhoneIcon from "../resources/telephone-icon.png"
import VanillaPwder from "../resources/vanilla-powder.jpg";
import EmailIcon from "../resources/email-icon.png";
import WaIcon from "../resources/wa-icon.png";
import IndoMap from "../resources/indo-map.png";
import Image from "next/image";

const Contact = () => {
  useEffect(() => {
    initCircleAnimation(); // Panggil fungsi animasi setelah komponen dimuat
  }, []);
  return (
    <div>
    <section className="bg-gray-50 py-16" style={{
      backgroundImage: `url(${VanillaPwder.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
 
      <div className=" lg:px-12 text-center">
        {/* Title Section */}
        <div className="" >
           <h1 className="text-5xl font-bold mb-6">
      <span className="text-[rgb(84,150,136)]">Contact</span>{" "}
      <div className="relative inline-block professionals-text">
        <span className="text-[rgb(244,234,197)] ">Professionals</span>
      </div>
    </h1>

        <p className="text-lg mb-12 leading-relaxed text-[rgb(244,234,197)]">
          We’d love to hear from you! Reach out for more information, sample requests,<br/> bulk orders, or to learn about our sustainable practices.
        </p>
        </div>
        </div>
        </section>
        <section className="bg-gray-50 container mx-auto px-20 py-16 text-left">
          <div className="grid grid-cols-1  md:grid-cols-2 text-gray-700">
            <div>
              
              <h2 className="text-4xl text-[rgb(84,150,136)]">Contact Information</h2>
               
                <div className="flex gap-2 mt-5">
                    <Image
                    src={EmailIcon.src}
                    width={1000}
                    height={1000}
                    alt=""
                    className="w-8"
                    /> 
                    <span>natureexquisitenusantara@gmail.com</span>
                </div>
                <div className="flex gap-2 mt-5">
                  <Image
                  src={PhoneIcon.src}
                  width={1000}
                  height={1000}
                  alt=""
                  className="w-8"
                  />
                  <span>08116668220</span>
                </div>
                <div className="flex gap-2 mt-5">
                  <Image
                  src={WaIcon.src}
                  width={1000}
                  height={1000}
                  alt=""
                  className="w-8"
                  />
                  <span>08116668220</span>
            </div>

            </div>
            <div>
              <h2 className="text-4xl text-[rgb(84,150,136)]">Product Origin</h2>
              <p className="mt-5">
              Bali, Papua, Indonesia
              </p>
              <Image 
              src={IndoMap.src}
              alt=""
              width={1000}
              height={1000}
              className="md:w-80"/>
            </div>
            <div>
              <h2 className="text-4xl text-[rgb(84,150,136)] mt-5">Social Media</h2>
            </div>
          </div>
          
     
        </section>
        </div>
  );
};

export { Contact };
