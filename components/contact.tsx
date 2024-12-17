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
          <div className="grid grid-cols-1  md:grid-cols-2 text-blue-700">
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
                <a href="https://wa.me/+628116668220">
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
                  </a>
            </div>
            <div>
              <h2 className="text-4xl text-[rgb(84,150,136)]">Product Origin</h2>
              <p className="mt-5 text-gray-700">
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
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                <div className="flex gap-2 mt-5">
                {/* Instagram */}
         
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#549688] hover:text-gray-400 transition-colors"
                  >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" 
                      fill="currentColor"/>
                  </svg>


                
                <p>Instagram</p>
               </div>
               </a>
                {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <div className="flex gap-2 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#549688] hover:text-gray-400 transition-colors"
            >
             <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"
             fill='currentColor'/>
            </svg>
              <p>Facebook</p>
            </div>
          </a>
           
            </div>
          </div>
          
     
        </section>
        </div>
  );
};

export { Contact };
