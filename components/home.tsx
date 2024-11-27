import Image from 'next/image';
import VanilaImg from '../resources/vanila.jpg';
import TrustedIcon from '../resources/trusted-icon.png';
import PremiumIcon from '../resources/premium-icon.png';
import AboutIcon from '../resources/about-icon.png';
import ParnershipIcon from '../resources/partnership-icon.png';
import VanillaIcon from '../resources/vanilla-icon.png';
import CoffeBeanIcon from '../resources/coffe-beans-icon.png';
import CocoaBeanIcon from '../resources/cocoa-bean-icon.png';
import { EmailSubcribe } from './subscribe-email';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Premium Icon */}
          <div className="mb-2">
            <Image
              src={PremiumIcon.src}
              alt="Premium Icon"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Premium Indonesian Vanilla Exporter
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Trusted by global businesses for authentic, high-quality vanilla products, 
            sourced sustainably and delivered with excellence.
          </p>
          {/* Trusted Icon */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Image
              src={TrustedIcon.src}
              alt="Trusted Icon"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-lg font-semibold">Trusted Supplier</span>
          </div>
          <a
            href="/products"
            className="bg-white text-green-800 px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Discover Our Products
          </a>
        </div>
      </section>

      {/* About Section */}
<section className="bg-gray-50 text-gray-800 py-20">
  <div className="container justify-center text-center mx-auto px-4 flex flex-col md:flex-row items-center">
    {/* Image */}
    <div className="flex-shrink-0 w-full md:w-1/2">
      <Image
        src={VanilaImg.src}
        alt="Premium Vanilla"
        width={500}
        height={500}
        className="rounded-lg shadow-lg mx-auto"
      />
    </div>
    {/* Text */}
    <div className="md:w-1/2 md:pl-10 mt-10 md:mt-0 text-center justify-center md:text-center">
      <div className="flex items-center mb-6">
        {/* About Icon */}
        <Image
          src={AboutIcon.src}
          alt="About Icon"
          width={40}
          height={40}
          className="mr-4"
        />
        <h2 className="text-4xl font-bold text-green-800">
          About Us
        </h2>
      </div>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        PT Nature’s Exquisite Nusantara is a premium exporter of 
        Indonesian vanilla, supporting sustainable practices and empowering local farmers.
        With a commitment to quality and traceability, we deliver authentic agricultural excellence to global businesses.
      </p>
      <a
        href="/about"
        className="text-green-800 font-semibold text-lg hover:underline"
      >
        Learn More
      </a>
    </div>
  </div>
</section>


      {/* Products Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Image
              src={PremiumIcon.src}
              alt="Premium Icon"
              width={60}
              height={60}
              className='mx-auto'
            />
      
          
          <h2 className="text-4xl font-bold mb-8 text-green-800">
            Our Premium Products
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Explore our sustainably sourced Indonesian vanilla and other agricultural products tailored for global industries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="p-6 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Vanilla Beans</h3>
              <Image
              src={VanillaIcon.src}
              alt='vanilla'
              width={60}
              height={60}
              className='mx-auto'
              />
              <p className="text-gray-700">
                Handpicked, premium-quality vanilla beans with unmatched aroma and flavor.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Coffee Beans</h3>
              <Image 
              src={CoffeBeanIcon.src}
              alt='cofee'
              width={60}
              height={60}
              className='mx-auto'
              />
              <p className="text-gray-700">
                Sustainably harvested coffee beans from the lush regions of Indonesia.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Cocoa Beans</h3>
              <Image
              src={CocoaBeanIcon.src}
              alt='cocoa'
              width={60}
              height={60}
              className='mx-auto'
              />
              <p className="text-gray-700">
                Superior-grade cocoa beans, ideal for premium chocolate production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 text-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
        <Image
              src={ParnershipIcon.src}
              alt="Premium Icon"
              width={60}
              height={60}
              className='mx-auto'
            />
      
          <h2 className="text-4xl font-bold mb-8 text-green-800">
            Partner with Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's grow together! Reach out to explore partnership opportunities, request samples, 
            or learn more about our sustainability practices.
          </p>
          <a
            href="/contact"
            className="bg-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-green-700 transition"
          >
            Contact Us Today
          </a>
        </div>
      </section>
      <EmailSubcribe/>
    </div>
  );
};

export { Home };
