"use client";

import React, { Component } from "react";
import Image from "next/image";
import VanilaImg from "../resources/vanila.jpg"; // Gantilah dengan path gambar Anda

class AboutUs extends Component {
  render() {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-white text-gray-800 pt-16 ">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-[rgb(34,139,34)] ">About us</h1>
            <p className="text-lg mb-8">
              We are committed to bringing the best of Indonesian agricultural heritage to the world. From premium vanilla beans to high-quality coffee and cocoa, our products are a reflection of our dedication to sustainability and quality.
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="bg-white text-gray-800 pb-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-[rgb(34,139,34)] mb-8">Our Vision & Mission</h2>
            <div className="md:flex md:justify-center md:space-x-20">
              {/* Vision */}
              <div className="md:w-1/3 bg-[rgb(245,245,220)] p-6 rounded-lg shadow-lg mx-4 md:mx-0 mb-5 ">
                <h3 className="text-2xl font-semibold text-[rgb(139,69,19)] mb-4">Our Vision</h3>
                <p className="text-lg mb-6">
                  To be the world’s leading provider of premium, sustainably sourced vanilla, known for our innovation, commitment to quality, and ethical business practices.
                </p>
              </div>

              {/* Mission */}
              <div className="md:w-1/3 bg-[rgb(245,245,220)] p-6 rounded-lg shadow-lg mx-4 md:mx-0 mb-5">
                <h3 className="text-2xl font-semibold text-[rgb(139,69,19)] mb-4">Our Mission</h3>
                <p className="text-lg mb-6">
                  To deliver the finest quality vanilla beans and derivatives to markets worldwide, while championing sustainable agriculture, supporting fair trade, and creating long-lasting partnerships with our clients.
                </p>
              </div>
            </div>
          </div>
        </section>
{/* Sustainability Section */}
<section className="py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-[rgb(34,139,34)] mb-8">Our Commitment to Sustainability</h2>
    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-20">
      {/* Image */}
      <div className="flex justify-center mb-6 md:mb-0">
        <Image
          src={VanilaImg}
          alt="Vanilla Farm"
          width={200}
          height={200}
          className="rounded-lg shadow-lg w-100 md:w-[200px]"
        />
      </div>
      {/* Text */}
      <div className="md:w-1/3 mx-4">
        <p className="text-lg text-center">
          We implement eco-friendly farming practices and work directly with local farmers to promote sustainable agricultural techniques. Our goal is to reduce environmental impact, minimize water usage, and enhance soil health, ensuring the sustainability of our crops for generations to come.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Team Section */}
        <section className="bg-white text-gray-800 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-[rgb(34,139,34)] mb-8">Meet Our Team</h2>
            <div className="md:flex md:justify-center md:space-x-20">
              {/* Leadership Team */}
              <div className="md:w-1/3 bg-[rgb(245,245,220)] p-6 rounded-lg shadow-lg mx-4 md:mx-0 mb-5 md:mb-0">
                <h3 className="text-2xl font-semibold text-[rgb(139,69,19)] mb-4">Leadership</h3>
                <p className="text-lg mb-6">
                  Our CEO & Founder, Fortuna, leads with passion, focusing on quality, integrity, and innovation in every aspect of the business. Together with the leadership team, we strive to make a positive impact on the agricultural industry.
                </p>
              </div>
              {/* Field Team */}
              <div className="md:w-1/3 bg-[rgb(245,245,220)] p-6 rounded-lg shadow-lg mx-4">
                <h3 className="text-2xl font-semibold text-[rgb(139,69,19)] mb-4">Field Team</h3>
                <p className="text-lg mb-6">
                  Our dedicated field team works closely with local farmers, providing expert guidance on best practices for vanilla cultivation and ensuring the highest standards for product quality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export { AboutUs };
