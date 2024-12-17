"use client";

import React from "react";
import { initCircleAnimation } from "../header/circle-anim"; 
import { useEffect } from 'react';
import VanillaPwder from "../resources/vanilla-powder.jpg";
import EmailIcon from "../resources/email-icon.png";
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
          <div className="grid grid-cols-1  md:grid-cols-2">
            <div>
              
              <h2 className="text-4xl text-[rgb(84,150,136)]">Contact Information</h2>
               
                <div className="flex gap-2">
                 <Image
                src={EmailIcon.src}
                width={1000}
                height={1000}
                alt=""
                className="w-8"
                /> <span>info@natureexquisite.com</span>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </section>
        </div>
  );
};

export { Contact };
