import Image from 'next/image';
import VanilaImg from '../resources/vanila.jpg';
import { EmailSubcribe } from './subscribe-email';
import SustainabilityIcon from "../resources/sustainability-icon2.png";
import SusPracIcon from "../resources/sus-prac.png";
import LocalComIcon from "../resources/local-com-icon.png";
import RecycleIcon from "../resources/recycle-icon.png";
import RecycleJourney from "../resources/recycle-journey.png";


const Sustainability = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[rgb(84,150,136)] text-white pt-16 pb-12">
        <div className="container mx-auto text-center">
          <Image
          src={SustainabilityIcon.src}
          alt='s'
          width={60}
          height={60}
          className='mx-auto'
          />
          <h1 className="text-5xl font-bold mb-6">Our Commitment to Sustainability</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            At PT Nature’s Exquisite Nusantara, sustainability is at the heart of our business. 
            We strive to preserve the environment while supporting local communities and ensuring premium quality products.
          </p>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={VanilaImg}
                alt="Vanilla Farm"
                width={300}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            {/* Text */}
            <div>
              <Image
              src={SusPracIcon.src}
              alt='s'
              width={60}
              height={60}
              className='mx-auto'
              />
              <h2 className="text-4xl font-bold text-green-800 text-center mb-12">Sustainable Practices</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We implement eco-friendly farming practices and collaborate directly with local farmers to promote sustainable agricultural techniques. 
                Our focus is on reducing environmental impact, optimizing water usage, and enhancing soil health to ensure the sustainability of our crops for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Local Communities */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <Image
          src={LocalComIcon.src}
          alt='localcom'
          width={60}
          height={60}
          className='mx-auto'
          />
          <h2 className="text-4xl font-bold text-green-800 mb-8">Empowering Local Communities</h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
            We believe in empowering local farmers by providing resources, education, and fair trade opportunities. 
            Together, we create stronger communities, support livelihoods, and build lasting partnerships that benefit everyone.
          </p>
        </div>
      </section>

      {/* Carbon Footprint Reduction */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <Image
          src={RecycleIcon.src}
          alt='recycle'
          width={60}
          height={60}
          className='mx-auto'
          />
          <h2 className="text-4xl font-bold text-green-800 text-center mb-8">Reducing Our Carbon Footprint</h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto text-center">
            Through continuous innovation and process optimization, we actively reduce emissions in our production and distribution systems. 
            From using renewable energy sources to streamlining transportation routes, we are dedicated to minimizing our environmental impact.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <Image 
          src={RecycleJourney.src}
          alt='j'
          width={60}
          height={60}
          className='mx-auto'
          />
          <h2 className="text-4xl font-bold mb-6 text-[rgb(84,150,136)]">Join Our Journey to Sustainability</h2>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Partner with PT Nature Exquisite Nusantara to make a difference. Together, we can build a sustainable future for our planet and communities.
          </p>
          <a
            href="/contact"
            className="bg-[rgb(84,150,136)] text-[rgb(244,234,197)] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
      <EmailSubcribe/>
    </div>
  );
};

export { Sustainability };
