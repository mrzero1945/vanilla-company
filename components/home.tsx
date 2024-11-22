import Image from 'next/image';
import VanilaImg from '../resources/vanila.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-gray-800 py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[rgb(34,139,34)]">
            Welcome to PT Nature’s Exquisite Nusantara
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Bringing the finest Indonesian agricultural products to the world.
          </p>
          <a
            href="/products"
            className="bg-[rgb(34,139,34)] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
          >
            Explore Our Products
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src={VanilaImg.src}
              alt="Premium Vanilla"
              width={200}
              height={200}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          {/* Text */}
          <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[rgb(34,139,34)]">About Us</h2>
            <p className="text-base sm:text-lg mb-6">
              PT Nature’s Exquisite Nusantara is dedicated to sourcing and
              exporting high-quality agricultural products such as vanilla,
              coffee, and cocoa. We champion sustainability and support local
              farmers while delivering premium products globally.
            </p>
            <a
              href="/about"
              className="text-[rgb(34,139,34)] font-semibold hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[rgb(34,139,34)]">
            Our Products
          </h2>
          <p className="text-base sm:text-lg mb-8">
            Discover our range of premium vanilla beans, coffee, and cocoa,
            sourced sustainably from Indonesia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            <div className="p-6 rounded-lg shadow-lg bg-[rgb(245,245,220)]">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-[rgb(139,69,19)]">Vanilla Beans</h3>
              <p className="text-gray-700">
                Premium grade vanilla beans with exceptional flavor and aroma.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-[rgb(245,245,220)]">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-[rgb(139,69,19)]">Coffee Beans</h3>
              <p className="text-gray-700">
                High-quality coffee beans sourced from the best Indonesian
                regions.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg bg-[rgb(245,245,220)]">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-[rgb(139,69,19)]">Cocoa Beans</h3>
              <p className="text-gray-700">
                Sustainably grown cocoa beans, perfect for premium chocolate
                production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-[rgb(34,139,34)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            Interested in our products? Contact us today to request a free
            sample or learn more about our sustainable practices.
          </p>
          <a
            href="/contact"
            className="bg-[rgb(34,139,34)] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export { Home };
