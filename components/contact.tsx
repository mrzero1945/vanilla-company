"use client";

import React from "react";
import { initCircleAnimation } from "../header/circle-anim"; 
import { useEffect } from 'react';
import PhoneIcon from "../resources/telephone-icon.png"
import VanillaPwder from "../resources/vanilla-powder.jpg";
import EmailIcon from "../resources/email-icon.png";
import WaIcon from "../resources/wa-icon.png";
import IndoMap from "../resources/indo-map.png";
import CusService from "../resources/cus-service-icon.png";
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
          <div className="mx-5" >
            <h1 className="text-5xl font-bold mb-6">
                <span className="text-[rgb(84,150,136)] mb-10">Contact</span>{" "}
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
        <section className="bg-gray-50 container  md:px-20 py-16 text-left flex justify-center items-center">
          <div className="grid grid-cols-1  md:grid-cols-2 text-[rgb(84,150,136)] ">
           {/*social media*/}
           <div className="mx-5">
          

             
                <h2 className="text-4xl text-[rgb(84,150,136)]">Social Media</h2>
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
           {/* TikTok */}
           <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
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
              <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Zm-3.281,8.725h0c-.109.011-.219.016-.328.017A3.571,3.571,0,0,1,14.4,9.129v5.493a4.061,4.061,0,1,1-4.06-4.06c.085,0,.167.008.251.013v2a2.067,2.067,0,1,0-.251,4.119A2.123,2.123,0,0,0,12.5,14.649l.02-9.331h1.914A3.564,3.564,0,0,0,17.719,8.5Z" fill="currentColor" />
            </svg>
            <p>Tiktok</p>
            </div>
          </a>
          {/* WhatsApp */}
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
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
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor" />
            </svg>  
            <p>WhatsApp</p>    
            </div>
          </a>
          {/* WeChat */}
          <a
            href="https://www.wechat.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WeChat"
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
              <path d="M23.541 12.748c-.609-1.38-1.758-2.476-3.092-3.151-2.354-1.192-5.281-1.185-7.629.03-1.631.837-2.993 2.337-3.379 4.162-.318 1.344-.033 2.791.68 3.961 1.061 1.762 2.979 2.887 4.971 3.248 1.443.293 2.936.119 4.338-.285.842.326 1.592.854 2.408 1.246-.211-.707-.436-1.406-.676-2.102.916-.65 1.746-1.461 2.244-2.479.744-1.415.789-3.171.135-4.63zm-9.924-9.466c-2.495-1.404-5.602-1.615-8.286-.645-1.764.635-3.36 1.815-4.346 3.42-.895 1.45-1.23 3.258-.799 4.917.433 1.84 1.711 3.383 3.262 4.413-.3.85-.585 1.699-.855 2.555.975-.51 1.95-1.043 2.926-1.561 1.17.375 2.415.559 3.66.518-.33-.943-.405-1.965-.255-2.951.225-1.371.975-2.625 1.994-3.554 1.726-1.615 4.171-2.296 6.496-2.131-.436-2.135-1.936-3.939-3.824-4.98h.027zm1.733 9.989c-.209.652-1.156.848-1.615.352-.506-.459-.309-1.418.355-1.623.734-.31 1.582.537 1.26 1.271zm4.795.092c-.256.586-1.141.723-1.576.27-.209-.191-.27-.479-.344-.73.104-.458.42-.933.93-.955.705-.098 1.336.773.975 1.416h.015zM12.99 6.909c.008.961-1.275 1.561-1.995.909-.747-.535-.535-1.837.342-2.106.785-.315 1.713.344 1.651 1.185l.002.012zm-6.059.244c-.172.835-1.291 1.238-1.946.678-.759-.535-.546-1.861.345-2.131.873-.336 1.865.55 1.601 1.453z" fill="currentColor" />
            </svg>
            <p>WeChat</p>
             </div>
          </a>
            {/* Telegram */}
          <a
            href="https://t.me/Gregory2005_n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
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
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z"
                fill="currentColor"
              />
            </svg>
            <p>Telegram</p>
             </div>
          </a>
            </div>
            {/*col company location */}
            <div className="mx-5">
              <h2 className="text-4xl text-[rgb(84,150,136)] mt-10">Company Location</h2>
              <p className="mt-5 text-gray-700 mx-auto">
                    Jakarta, Indonesia
                </p>
              <div className="h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317713.08201069506!2d106.6894294!3d-6.2000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699299e5d8d4b3%3A0x401577d14fed4c0!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1675641202141!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></iframe>
              </div>

               
            </div>
            {/*col contact information */}
            <div className="mx-5 mt-32">
              
              <h2 className="text-4xl text-[rgb(84,150,136)] mt-10 md:mt-0">Contact Information</h2>
               
                <div className="flex gap-2 mt-5 ">
                    <Image
                    src={EmailIcon.src}
                    width={1000}
                    height={1000}
                    alt=""
                    className="w-8"
                    /> 
                    <span className="">NatureExquisiteNusantara@gmail.com</span>
                  
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
            <div className="mx-5 mt-32">
              <h2 className="text-4xl ">Customer Service</h2>
              <Image
              src={CusService.src}
              alt=""
              width={1000}
              height={1000}
              className="w-80 h-auto mx-auto mt-5"/>
              <p className="text-gray-700 mx-5 mt-5">At PT Nature Exquisite Nusantara Export company, we prioritize your satisfaction by providing exceptional customer service tailored to your needs.</p>
            </div>
            
          </div>
          
     
        </section>
        {/* connect with us*/}
        <section className="bg-gray-50 py-10 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="mx-5">
              <button className="flex items-center gap-2 bg-[rgb(84,150,136)] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[rgb(68,122,111)] transition">
                {/* SVG Love Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="rgb(244,234,197)"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="flex-shrink-0"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {/* Text */}
                <span>Get in Touch</span>
          
              </button>
              <h2 className="mt-10 text-5xl text-[rgb(84,150,136)]">Reach Out Today</h2>
              <p className="mt-5 text-gray-700">Have questions? We have answers! Let's chat about vanilla magic.</p>
            </div>
            <div className="mx-5">
  <div className="mb-4">
    {/* Name Input */}
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="username"
    >
      Name
    </label>
    <input
      className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      id="username"
      type="text"
      placeholder=""
    />

    {/* Email Input */}
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="email"
    >
      Email
    </label>
    <input
      className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      id="email"
      type="email"
      placeholder=""
    />

    {/* Phone Input */}
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="phone"
    >
      Phone
    </label>
    <input
      className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      id="phone"
      type="tel"
      placeholder=""
    />

    {/* Message Input */}
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="message"
    >
      Message
    </label>
    <textarea
      className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      id="message"
      placeholder=""
    ></textarea>
  </div>
      {/* Send Message Button */}
      <button
      type="submit"
      className="bg-[rgb(84,150,136)] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline hover:bg-[rgb(68,122,111)] transition"
    >
      Send Message
    </button>
</div>


          </div>
        </section>
        </div>
  );
};

export { Contact };
