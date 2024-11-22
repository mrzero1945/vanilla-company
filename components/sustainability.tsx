import Image from 'next/image';
import VanilaImg from '../resources/vanila.jpg';

const Sustainability = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-gray-800 pt-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-[rgb(34,139,34)]">Our Commitment to Sustainability</h1>
          <p className="text-lg mb-8 mx-4">
            At PT Nature’s Exquisite Nusantara, sustainability is at the heart of our business. We strive to preserve the environment while supporting local communities and ensuring premium quality products.
          </p>
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

      {/* Support for Local Communities */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[rgb(34,139,34)] mb-8">
            Supporting Local Communities
          </h2>
          <p className="text-lg mb-6 mx-4">
            We believe in empowering local farmers by providing them with resources, education, and fair trade opportunities. Together, we build stronger communities and create lasting partnerships.
          </p>
        </div>
      </section>

      {/* Carbon Footprint Reduction Section */}
      <section className="bg-white text-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[rgb(34,139,34)] mb-8">
            Reducing Our Carbon Footprint
          </h2>
          <p className="text-lg mb-6 mx-4">
            Through continuous innovation and process optimization, we actively reduce emissions in our production and distribution systems. From using renewable energy sources to optimizing transportation routes, we are committed to lowering our environmental impact.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white text-gray-700 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[rgb(34,139,34)] ">Join Our Journey to Sustainability</h2>
          <p className="text-lg mb-8 mx-4">
            Partner with PT Nature’s Exquisite Nusantara to make a difference. Together, we can build a sustainable future for our planet and communities.
          </p>
          <a
            href="/contact"
            className="bg-[rgb(34,139,34)]  text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export {Sustainability};
