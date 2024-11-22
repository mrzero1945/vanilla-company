"use client";

import React from "react";

const Contact = () => {
  return (
    <section className=" py-5">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-6 text-[rgb(34,139,34)] ">Contact Us</h1>
        <p className="text-lg mb-8">
          We’d love to hear from you! Reach out for more information, sample
          requests, bulk orders, or to learn about our sustainable practices.
        </p>

        {/* Contact Information */}
        <div className=" text-gray-800 rounded-lg shadow-lg p-8 md:w-2/3 mx-auto bg-[rgb(245,245,220)]">
          <h2 className="text-2xl font-bold mb-4 text-[rgb(34,139,34)]">
            Get in Touch
          </h2>
          <p className="text-lg mb-6">
            Contact us through any of the methods below, and our team will
            respond promptly.
          </p>

          <ul className="text-left space-y-4">
            <li>
              <strong>Email:</strong> info@natureexquisite.com
            </li>
            <li>
              <strong>Phone:</strong> +62 812 3456 7890
            </li>
            <li>
              <strong>Address:</strong> Jakarta, Indonesia
            </li>
            <li>
              <strong>Social Media:</strong>{" "}
              <a
                href="https://instagram.com/nature_exquisite"
                className="text-[rgb(34,139,34)] font-semibold hover:underline"
              >
                Instagram
              </a>{" "}
              |{" "}
              <a
                href="https://facebook.com/natureexquisite"
                className="text-[rgb(34,139,34)] font-semibold hover:underline"
              >
                Facebook
              </a>{" "}
              |{" "}
              <a
                href="https://linkedin.com/company/natureexquisite"
                className="text-[rgb(34,139,34)] font-semibold hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10">
          <a
            href="/contact-form"
            className="bg-[rgb(34,139,34)] text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition"
          >
            Request a Free Sample
          </a>
        </div>
      </div>
    </section>
  );
};

export {Contact};