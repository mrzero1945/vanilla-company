"use client";

import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Title Section */}
        <h1 className="text-5xl font-bold mb-6 text-[rgb(84,150,136)]">Contact Us</h1>
        <p className="text-lg mb-12 text-gray-700 leading-relaxed">
          We’d love to hear from you! Reach out for more information, sample requests, bulk orders, or to learn about our sustainable practices.
        </p>

        {/* Contact Information */}
        <div className="bg-beige text-gray-800 rounded-lg shadow-xl p-8 lg:p-12 md:w-2/3 mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[rgb(84,150,136)]">Get in Touch</h2>
          <p className="text-lg mb-8">
            Contact us through any of the methods below, and our team will respond promptly.
          </p>

          <ul className="text-left space-y-6 text-lg">
            <li>
              <strong>Email:</strong> 
              <a href="mailto:info@natureexquisite.com" className="text-[rgb(84,150,136)] hover:underline ml-2">
                info@natureexquisite.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> 
              <a href="tel:+6281234567890" className="text-[rgb(84,150,136)] hover:underline ml-2">
                +62 812 3456 7890
              </a>
            </li>
            <li>
              <strong>Address:</strong> Jakarta, Indonesia
            </li>
            <li>
              <strong>Social Media:</strong> 
              <a
                href="https://instagram.com/nature_exquisite"
                className="text-[rgb(84,150,136)] font-semibold hover:underline ml-2"
              >
                Instagram
              </a>{" "}
              |{" "}
              <a
                href="https://facebook.com/natureexquisite"
                className="text-[rgb(84,150,136)] font-semibold hover:underline"
              >
                Facebook
              </a>{" "}
              |{" "}
              <a
                href="https://linkedin.com/company/natureexquisite"
                className="text-[rgb(84,150,136)] font-semibold hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12">
          <a
            href="/contact-form"
            className="inline-block bg-[rgb(84,150,136)] text-[rgb(244,234,197)] text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl transition"
          >
            Request a Free Sample
          </a>
        </div>
      </div>
    </section>
  );
};

export { Contact };
