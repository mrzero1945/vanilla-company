"use client";

import React, { Component } from "react";
import Image from "next/image";
import VanilaImg from "../resources/vanila.jpg"; // Gantilah dengan path gambar Anda
import AboutIcon from "../resources/about-icon.png";
import VisionIcon from "../resources/vision-icon.png";
import MissionIcon from "../resources/mission-icon.png";
import SustainabilityIcon from "../resources/sustainability-icon.png";
import TeamIcon from "../resources/team-icon.png";
import LeadershipIcon from "../resources/leadership-icon.png";
import FieldTeamIcon from "../resources/field-team-icon.png";

class AboutUs extends Component {
  render() {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white pt-16 pb-16">
          <div className="container mx-auto text-center">
            <div className="mb-2">
              <Image
              src={AboutIcon.src}
              alt="about"
              width={60}
              height={60}
              className="mx-auto"
              />
            </div>
            <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              At PT Nature's Exquisite Nusantara, we are dedicated to delivering the finest Indonesian vanilla products to B2B clients worldwide. Combining tradition with innovation, our commitment to sustainability, trust, and quality sets us apart.
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="bg-white text-gray-800 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-green-800 mb-12">
              Our Vision & Mission
            </h2>
            <div className="md:flex md:justify-center md:space-x-20">
              {/* Vision */}
              <div className="md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-xl mx-4 mb-8 md:mb-0">
                <Image 
                src={VisionIcon.src}
                alt="vision"
                width={60}
                height={60}
                className="mx-auto"
                />
                <h3 className="text-2xl font-semibold text-green-700 mb-6">
                  Our Vision
                </h3>
                <p className="text-lg leading-relaxed">
                  To be the world’s leading provider of premium, sustainably sourced vanilla, renowned for our innovation, dedication to quality, and ethical practices.
                </p>
              </div>

              {/* Mission */}
              <div className="md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-xl mx-4">
                <Image
                src={MissionIcon.src}
                alt="mission"
                width={60}
                height={60}
                className="mx-auto"
                />
                <h3 className="text-2xl font-semibold text-green-700 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg leading-relaxed">
                  To provide the highest-quality vanilla products to businesses worldwide while championing sustainable farming practices, fair trade, and transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <Image 
            src={SustainabilityIcon.src}
            alt="Sustainability"
            width={60}
            height={60}
            className="mx-auto"
            />
            <h2 className="text-4xl font-bold text-green-800 mb-12">
              Our Commitment to Sustainability
            </h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-16">
              {/* Image */}
              <div className="flex justify-center mb-8 md:mb-0">
                <Image
                  src={VanilaImg}
                  alt="Vanilla Farm"
                  width={250}
                  height={250}
                  className="rounded-lg shadow-lg"
                />
              </div>
              {/* Text */}
              <div className="md:w-2/5 text-left mx-4">
                <p className="text-lg leading-relaxed">
                  We implement eco-friendly farming practices and work directly
                  with local farmers to promote sustainable agricultural
                  techniques. By minimizing environmental impact, enhancing soil
                  health, and ensuring long-term sustainability, we uphold our
                  commitment to protecting the planet and supporting our farming
                  communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white text-gray-800 py-16">
          <div className="container mx-auto text-center">
            <Image
            src={TeamIcon.src}
            alt="team"
            width={60}
            height={60}
            className="mx-auto"
            />
            <h2 className="text-4xl font-bold text-green-800 mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Leadership Team */}
              <div className="bg-gray-100 p-8 rounded-lg shadow-xl mx-4">
                <Image 
                src={LeadershipIcon.src}
                alt="leadership"
                width={60}
                height={60}
                className="mx-auto"
                />
                <h3 className="text-2xl font-semibold text-green-700 mb-6">
                  Leadership
                </h3>
                <p className="text-lg leading-relaxed">
                  Fortuna, our visionary CEO & Founder, leads with passion and
                  dedication to quality, innovation, and sustainable practices.
                  Under her leadership, we’ve established a reputation for
                  trust and excellence.
                </p>
              </div>
              {/* Field Team */}
              <div className="bg-gray-100 p-8 rounded-lg shadow-xl mx-4">
                <Image
                src={FieldTeamIcon.src}
                alt="Field Team"
                width={60}
                height={60}
                className="mx-auto"
                />
                <h3 className="text-2xl font-semibold text-green-700 mb-6">
                  Field Team
                </h3>
                <p className="text-lg leading-relaxed">
                  Our field team works hand-in-hand with local farmers to
                  implement best practices in vanilla cultivation. They ensure
                  that our products meet the highest standards while fostering
                  fair trade and long-term partnerships.
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
