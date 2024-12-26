// 20/100 || 40/100 
// x = 100/100
// a = 60/100
// b = 60/100 || 0/100
// probabilitas
// y = x - a + b 
// y = 100/100 - 60/100 + 60/100 = 100/100 = 1
// a = sigma(x) - sigma(xy) + n
// b = sigma(x^2) . sigma(x)^2 - a
// planck const = 1 x 10^-13
// enigma machine the reich
// ^p >= ^m
// particle have a wave function
import Image from 'next/image';
import VanilaImg from '../resources/vanila.jpg';
import { EmailSubcribe } from './subscribe-email';
import SustainabilityIcon from "../resources/sustainability-icon2.png";
import SusPracIcon from "../resources/sus-prac.png";
import LocalComIcon from "../resources/local-com-icon.png";
import RecycleIcon from "../resources/recycle-icon.png";
import RecycleJourney from "../resources/recycle-journey.png";
import susprac from "../resources/sus-prac.jpg";
import plant from "../resources/plant.jpg";
import plant2 from "../resources/plant-2.jpg";


const Sustainability = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[rgb(84,150,136)] text-white pt-16 pb-12 relative bg-gray-50 text-gray-800 py-20"
  style={{
    backgroundImage: `url(${VanilaImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    {/* Background Overlay */}
   {/* Overlay semi-transparan */}
 <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative container mx-auto px-4 flex flex-col items-center text-center z-10">
          <Image
          src={SustainabilityIcon.src}
          alt='s'
          width={60}
          height={60}
          className='mx-auto'
          />
          <h1 className="text-5xl font-bold mb-6 text-[rgb(244,234,197)]">Our Commitment to Sustainability</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl md:mx-auto leading-relaxed mx-5">
            At PT Nature’s Exquisite Nusantara, sustainability is at the heart of our business. 
            We strive to preserve the environment while supporting local communities and ensuring premium quality products.
          </p>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          
          
           
            {/* Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex items-center">
              <div> 
              <Image
              src={susprac.src}
              alt=''
              width={1000}
              height={1000}
              className='w-full h-96 mx-auto'
              />
              </div>
              <div>
                <Image
              src={SusPracIcon.src}
              alt='s'
              width={1000}
              height={1000}
              className='mx-auto w-20'
              />
              <h2 className="text-4xl font-bold text-[rgb(84,150,136)] text-center mb-8">Sustainable Practices</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
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
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 flex items-center'>
            <div className='order-2 md:order-none'>
              <Image
              src={LocalComIcon.src}
              alt='localcom'
              width={60}
              height={60}
              className='mx-auto'
              />
              <h2 className="text-4xl font-bold text-[rgb(84,150,136)] mb-8">Empowering Local Communities</h2>
              <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
                We believe in empowering local farmers by providing resources, education, and fair trade opportunities. 
                Together, we create stronger communities, support livelihoods, and build lasting partnerships that benefit everyone.
              </p>
            </div>
            <div className='order-1 md:order-none'>
              <Image
              src={VanilaImg.src}
              alt=''
              width={1000}
              height={1000}
              className='mx-auto w-full h-96'/>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Footprint Reduction */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 flex items-center'>
            <div>
              <Image
              src={plant.src}
              alt=''
              width={1000}
              height={1000}
              className='mx-auto w-full h-96'/>
            </div>
            <div>
              <Image
              src={RecycleIcon.src}
              alt='recycle'
              width={60}
              height={60}
              className='mx-auto'
              />
              <h2 className="text-4xl font-bold text-[rgb(84,150,136)] text-center mb-8">Reducing Our Carbon Footprint</h2>
              <p className="text-lg leading-relaxed text-gray-700 max-w-3xl md:mx-auto mx-5 text-center">
                Through continuous innovation and process optimization, we actively reduce emissions in our production and distribution systems. 
                From using renewable energy sources to streamlining transportation routes, we are dedicated to minimizing our environmental impact.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='order-4 order-none'>
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
                        className="bg-[rgb(84,150,136)] text-[rgb(255,255,255)] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
                      >
                        Contact Us
                      </a>
            </div>
            <div className='order-3 md:order-none'>
              <Image
              src={plant2.src}
              width={1000}
              height={1000}
              alt=''
              className='mx-auto w-full h-96'/>
            </div>
          </div>
          
        </div>
      </section>
      <EmailSubcribe/>
    </div>
  );
};

export { Sustainability };
