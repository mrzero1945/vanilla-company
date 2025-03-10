"use client"
import VanillaPaste from "../resources/vanilla-paste.webp";
import Image from "next/image";
import VanillaExtract from "../resources/vanilla-extract.webp";
import PremiumIcon from "../resources/premium-icon.png";
import VanillaIcon from "../resources/vanilla-icon.png"
import RawVanilla from "../resources/raw-beans.jpg";
import VanillaBeans from "../resources/vanilla-beans.jpg";
import VanillaSeeds from "../resources/vanilla-seeds.webp";
import VanillaPowder from "../resources/vanilla-powder-1024.jpg";
import CatalogIcon from "../resources/catalog-icon.png";
import Plant from "../resources/vanila.jpg";
import { EmailSubcribe } from "./subscribe-email";
import {useLayoutEffect} from 'react';
import { initScrollTrigger, clearScrollTriggers } from "../header/scroll-anim";
import VanilaBg from "../resources/vanilla-3.jpg";
import { Colors } from "../header/colors";


const Products = () => {
  // animasi ref el
  
  useLayoutEffect(() => {

    initScrollTrigger();

    // Cleanup untuk mencegah konflik
    return () => {
      clearScrollTriggers()
    };
  }, []);


  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[rgb(84,150,136)] text-white pt-16 pb-12 scroll-row">
  {/* Background Image */}
  <Image
    src={VanilaBg.src} // Ganti dengan gambar latar belakang Anda
    alt="Background"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0 z-0"
  />
  
 {/* Overlay semi-transparan */}
 <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

  {/* Konten */}
  <div className="container mx-auto text-center relative z-20">
    <div className="mb-2">
      <Image
        src={PremiumIcon}
        alt="premium"
        width={1000}
        height={1000}
        className="w-20 mx-auto"
      />
    </div>
    <h1 className="text-5xl font-bold mb-6">Our Premium Vanilla Products</h1>
    <p className="text-lg sm:text-xl mb-8 max-w-3xl md:mx-auto leading-relaxed mx-5">
      Discover the finest Indonesian vanilla beans, extracts, pastes, and more. Perfect for gourmet culinary creations and premium applications.
    </p>
  </div>
</section>


      {/* Vanilla Beans Section */}
      <section className="bg-white text-gray-800 py-5 scroll-row">
      <Image
          src={VanillaIcon.src}
          alt="vanilla"
          width={1000}
          height={1000}
          className="w-20 mx-auto"
          />
          <h2 className="text-4xl font-bold text-[rgb(84,150,136)] text-center mb-12">Vanilla Beans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 flex items-center">
            <Image
            src={RawVanilla.src}
            width={1000}
            height={1000}
            alt=""
            className="mx-auto w-80 md:w-full h-full"
            />
            <div className="mx-10">
                 {/* Deskripsi */}
                 <h3 className="text-2xl text-center font-semibold text-[rgb(84,150,136)] mb-4">
    Vanilla Planifolia (Grade A)
  </h3>
  <p className="text-lg text-gray-700 mb-4">
    Renowned as the most well-known variety of vanilla, prized for its rich, creamy flavor and high vanillin content. Our Grade A vanilla beans are harvested at peak ripeness and undergo a careful curing process to enhance their aromatic qualities.
  </p>
  
  {/* Daftar Kegunaan dan Kemasan */}
  <ul className="text-sm text-center text-gray-600 mb-4 flex flex-col items-center space-y-2">
    <li className="text-left">
      <strong>Uses:</strong> Perfect for use in gourmet culinary applications, including baking, ice cream making, and flavoring beverages. It is also widely used in the fragrance and cosmetic industries due to its deep, warm aroma.
    </li>
    <li className="text-left">
      <strong>Packaging:</strong> Available in various quantities, from small batches to bulk shipments, ensuring flexibility for businesses of all sizes.
    </li>
  </ul>
  
  {/* Tabel Spesifikasi */}
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300 bg-white">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">
            Grade
          </th>
          <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">
            Size
          </th>
          <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">
            KA
          </th>
        </tr>
      </thead>
      <tbody>
        {[
          { code: "A", length: "16cm", moisture: "25-30%" },
          { code: "A", length: "17cm", moisture: "25-30%" },
          { code: "A", length: "18cm", moisture: "25-30%" },
          { code: "A", length: "19cm", moisture: "25-30%" },
          { code: "A", length: "20cm", moisture: "25-30%" },
        ].map((row, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2 text-sm">{row.code}</td>
            <td className="border border-gray-300 px-4 py-2 text-sm">{row.length}</td>
            <td className="border border-gray-300 px-4 py-2 text-sm">{row.moisture}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
            </div>
        </div>
      </section>
      {/*another one*/}
      <section className="bg-white text-gray-800 py-5 scroll-row">
        <div className="grid grid-cols-1 md:grid-cols-2 flex items-center">
          <div className="mx-10 order-2 md:order-none">
          <h3 className="text-2xl text-center font-semibold text-[rgb(84,150,136)] mb-4">
            Vanilla Tahitensis (Grade A)
          </h3>
           {/* Deskripsi */}
          <p className="text-lg text-gray-700 mb-4">
            Renowned for its unique flavor profile, known for its floral, fruity notes and lighter, more aromatic essence. This variety is considered one of the most fragrant types of vanilla, making it ideal for fine culinary and perfumery uses.
          </p>

          {/* Daftar Kegunaan dan Kemasan */}
          <ul className="text-sm  text-center text-gray-600 mb-4 flex flex-col items-center space-y-2">
            <li className="text-left">
              <strong>Uses:</strong> Often used in high-end desserts, perfumes, and personal care products like lotions and creams. It's also favored for creating premium vanilla extracts and pastes.
            </li>
            <li className="text-left">
              <strong>Packaging:</strong> Offered in small to large quantities, perfect for upscale restaurants, artisan confectioners, and fragrance manufacturers.
            </li>
          </ul>

          {/* Tabel Spesifikasi */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 bg-white ">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">
                    Grade
                  </th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">
                    Size
                  </th>
                  <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">
                    KA
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { code: "A", length: "14cm", moisture: "25-30%" },
                  { code: "A", length: "15cm", moisture: "25-30%" },
                  { code: "A", length: "16cm", moisture: "25-30%" },
                  { code: "A", length: "17cm", moisture: "25-35%" },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 text-sm">{row.code}</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">{row.length}</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">{row.moisture}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Image 
          src={VanillaBeans.src}
          alt=""
          width={1000}
          height={1000}
          className="mx-auto h-full w-80 md:w-full order-1 md:order-none"
          />

        </div>
      </section>

      {/* Vanilla Derivatives Section */}
      <section className="bg-white text-gray-800 py-5 scroll-row">
          <h2 className="text-4xl font-bold text-[rgb(84,150,136)] mb-12 text-center">Vanilla Derivatives</h2>
          <p className="mb-5 text-left md:text-center text-lg mx-5">Our vanilla derivatives are crafted to provide enhanced flavor and versatility for a wide range of applications. From concentrated pastes to pure extracts and seeds, each product is designed to offer superior quality and consistency, perfect for gourmet food, beverages, and fragrance industries.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 flex items-center">
            <Image
            src={VanillaExtract.src}
            width={1000}
            height={1000}
            alt=""
            className="w-80 mx-auto md:w-full h-full"
            />
            <div className="mx-10">
            <h3 className="text-2xl font-semibold text-[rgb(84,150,136)] mb-4 text-center">Vanilla Extract</h3>
              <p className="text-lg text-gray-600 mb-4">
                Our vanilla extract is a pure and concentrated form of vanilla, ideal for enhancing the flavor of your favorite baked goods, beverages, and gourmet dishes. Available in different grades to match the needs of professionals.
              </p>
              <ul className="text-md   text-gray-600 my-4">
                <li>
                  Classic (1 pod): A basic vanilla extract for everyday use.
                </li>
                <li>
                  Premium (2 pods): Ideal for high-end culinary applications.
                </li>
                <li>
                  Ultra-Premium (3 pods): For gourmet chefs seeking the best vanilla extract.
                </li>
              </ul>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 bg-white">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">Grade</th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Classic (1 pod)</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Everyday Use</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Premium (2 pods)</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">High-end culinary applications</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Ultra-Premium (3 pods)</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">For gourmet chefs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4 className="mt-5">
                Specifications:
              </h4>
                <ul className="text-sm   text-gray-600 my-4">
                  <li>
                    Product Type: Vanilla Extract
                  </li>
                  <li>
                    Ingredients: Pure vanilla beans, alcohol, water
                  </li>
                  <li>
                    Strength: Classic (1 pod), Premium (2 pods), Ultra-Premium (3 pods)
                  </li>
                  <li>
                    Origin: Bali, Papua, Indonesia
                  </li>
                  <li>
                    Packaging: Bottles (50ml, 100ml, 200ml, custom sizes available)
                  </li>
                  <li>
                    Shelf Life: 2-3 years
                  </li>
                </ul>
            </div>
          </div>
</section>
{/*another one*/}
<section className="bg-white text-gray-800 py-5 scroll-row">
  <div className="grid grid-cols-1 md:grid-cols-2 flex items-center">
    <div className="mx-10 order-4 md:order-none">
    <h3 className="text-2xl font-semibold text-[rgb(84,150,136)] mb-4 text-center">Vanilla Paste</h3>
              <p className="text-lg text-gray-600 mb-4">
                Vanilla paste is a concentrated form of vanilla extract mixed with vanilla seeds. This product adds both flavor and visual appeal, perfect for high-end desserts and beverages. Available in varying intensities to suit different needs.
              </p>
              <ul className="text-md   text-gray-600 my-4">
                <li>
                  Single Pod Intensity: For subtle vanilla flavor 
                </li>
                <li>
                  Double Pod Intensity: For a more robust flavor
                </li>
                <li>
                  Triple Pod Intensity: For an intense vanilla flavor
                </li>
              </ul>
              <table className="min-w-full border-collapse border border-gray-300 bg-white">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">Intensity Level</th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Single Pod</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Subtle flavor</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Double Pod</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Robust flavor</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Triple Pod</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">Intense flavor</td>
                    </tr>
                  </tbody>
                </table>
              <h4 className="mt-5">
                Specifications:
              </h4>
              <ul className="text-sm   text-gray-600 my-4">
                <li>
                  Product Type: Vanilla Paste
                </li>
                <li>
                  Ingredients: Pure vanilla extract, vanilla seeds
                </li>
                <li>
                  Origin: Bali, Papua, Indonesia
                </li>
                <li>
                  Packaging: Glass jar(50g, 100g, or custom packaging)
                </li>
                <li>Shelf Life: 1-2 years</li>
              </ul>
    </div>
    <Image
    src={VanillaPaste.src}
    alt=""
    width={1000}
    height={1000}
    className="w-80 mx-auto md:w-full h-full order-3 md:order-none"/>
  </div>
</section>
{/*another one */}
<section className="bg-white text-gray-800 md:py-5 scroll-row">
  <div className="grid grid-cols-1 md:grid-cols-2 flex items-center">
  <Image 
  src={VanillaSeeds.src}
  width={1000}
  height={1000}
  alt=""
  className="w-80 md:w-full h-full mx-auto"
  />
  <div className="mx-5">
    <h3 className="text-2xl font-semibold text-[rgb(84,150,136)] mb-4 text-center">Vanilla Seeds</h3>
    <p className="text-lg text-gray-600 mb-4">
    Extracted directly from our finest vanilla pods, our premium vanilla seeds provide an intense, aromatic flavor that enhances the quality of gourmet products. These tiny black specks are packed with rich vanilla essence, making them perfect for adding both flavor and visual appeal to your culinary creations. The seeds' delicate yet potent flavor works beautifully in everything from high-end desserts and pastries to premium beverages, infusions, and gourmet chocolate. Vanilla seeds are the ideal choice for chefs looking to elevate their dishes with an authentic, high-quality vanilla flavor. Perfect for those seeking both flavor and aesthetic appeal, they add a luxurious touch to any recipe.
  </p>
  <h4 className="mt-5">Specifications:</h4>
  <ul className="text-md  text-gray-600 my-4">
    <li>
      Product Type: Vanilla Seeds
    </li>
    <li>
      Origin: Bali, Papua, Indonesia
    </li>
    <li>
      Packaging: Glass jars (10g, 50g, 100g, bulk available)
    </li>
    <li>
      Shelf Life: 2 years
    </li>
    <li>
      Storage: Store in a cool, dry place to maintain optimal freshness and flavor.
    </li>
  </ul>
  </div>
  </div>
</section>
{/*another one*/}
<section className="bg-white text-gray-800 md:py-5 scroll-row">
  <div className="grid grid-cols-1 md:grid-cols-2 flex items-center">
    <div className="mx-10 order-6 md:order-none">
      <h3 className="text-2xl font-semibold text-[rgb(84,150,136)] mb-4 text-center">Vanilla Powder</h3>
      <p className="text-lg text-gray-600 mb-4">
    Our premium vanilla powder is made from ground, dried vanilla beans. It provides the purest vanilla flavor with a fine texture, ideal for adding a touch of elegance to a variety of desserts, beverages, and gourmet dishes.
  </p>
  <ul className="text-md text-gray-600 my-4">
    <li>
      Flavor Profile: Smooth, sweet, with subtle floral notes.
    </li>
    <li>
      Use: Perfect for baking, adding to smoothies, or enhancing the flavor of hot beverages like coffee and lattes.
    </li>
    <li>
      Packaging Options: Available in jars (50g, 100g, or custom packaging for private labeling).
    </li>
    <li>
      Shelf Life: 1-2 years.
    </li>
  </ul>
  <h4 className="mt-5">Specifications:</h4>
  <ul className="text-sm text-gray-600 my-4">
    <li>
      Product Type: Vanilla Powder
    </li>
    <li>
      Ingredients: Ground vanilla beans.
    </li>
    <li>
      Origin: Bali, Papua, Indonesia.
    </li>
    <li>
      Packaging: Glass jar (50g, 100g, custom sizes available).
    </li>
    <li>
      Storage: Keep in a cool, dry place for optimal freshness.
    </li>
  </ul>
    </div>
    <Image 
    src={VanillaPowder.src}
    width={1000}
    height={1000}
    alt=""
    className="w-80 mx-auto md:w-full h-full order-5 md:order-none"/>
  </div>
  <div className="flex justify-center mt-20">
  <a
    href="https://drive.usercontent.google.com/download?id=1ddAYKp8IlaoJxWDzM_uu-2XURIFDam5e&export=download&authuser=0&confirm=t&uuid=384fec9a-62c1-4bea-8f1d-9c34d607400c&at=AIrpjvPB_6OZn1K7ZXZDEUwjbYJg:1738912331554"
    className="flex items-center text-[rgb(255,255,255)] bg-[rgb(84,150,136)] text-center px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition mb-10 md:mb-0"
  >
    {/* Gambar Icon */}
    <img
      src={CatalogIcon.src} /* Ganti dengan path ikon Anda */
      alt="Icon"
      className="w-6 h-6 mr-2" /* Sesuaikan ukuran ikon */
    />
    Download Catalog
  </a>
</div>
</section>
{/* Bulk order section */}
<section className="bg-white text-gray-800 md:py-5 scroll-row md:mt-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Kolom 1 */}
    <div className="relative mx-10">
      {/* Background Image */}
      <Image
        src={VanillaBeans.src} // Ganti dengan path gambar latar belakang
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 rounded-lg"
      />
      {/* Overlay Transparan (Opsional) */}
  {/* Overlay semi-transparan */}
  <div className={`absolute inset-0 bg-black bg-opacity-50 rounded-lg`}></div>
      {/* Konten */}
      <div className={`relative z-20  ${Colors.secondary_text}`}>
        <h2 className="text-3xl font-bold mb-6 ${Colors.secondary_text} text-center mt-3">
          Customizable Bulk Orders for Your Business Needs
        </h2>
        <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-5 text-left`}>
          At PT. Nature’s Exquisite Nusantara, we specialize in providing flexible bulk ordering solutions for manufacturers, wholesalers, and private label clients. Whether you require large quantities of premium vanilla products or custom packaging tailored to your brand, we’re here to meet your needs.
        </p>
      </div>
    </div>

    {/* Kolom 2 */}
    <div className="relative mx-10">
      {/* Background Image */}
      <Image
        src={RawVanilla.src} // Ganti dengan path gambar latar belakang
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 rounded-lg"
      />
    {/* Overlay semi-transparan */}
 <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      {/* Konten */}
      <div className={`relative z-20  ${Colors.secondary_text}`}>
        <h2 className="text-3xl font-bold mb-6 text-center mt-3">
          Our Products
        </h2>
        <ul className={`mb-8 text-lg sm:text-xl max-w-2xl mx-5 ${Colors.secondary_text}`}>
          <li>
            <strong>Premium Vanilla Pods:</strong> Gourmet-grade and extract-grade options.
          </li>
          <li>
            <strong>Vanilla Extract & Powder:</strong> Versatile for various applications.
          </li>
          <li>
            <strong>Custom Packaging:</strong> Personalized labels and designs to reflect your brand identity.
          </li>
        </ul>
      </div>
    </div>
        {/*bloody text*/}
        <div className="relative mx-10">
        <Image
        src={Plant.src} // Ganti dengan path gambar latar belakang
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 rounded-lg"
      />
 {/* Overlay semi-transparan */}
 <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      <div className={`relative z-20 ${Colors.secondary_text}`}>

     
            <h2 className="text-3xl font-bold mb-6 mt-3 text-center">Flexible Ordering Options</h2>
              <ul className={`mb-8 text-lg sm:text-xl max-w-2xl mx-5 ${Colors.secondary_text}`}>
                <li>
                  <strong>Minimum Order Quantity (MOQ):</strong> Starting at just 25kg, making it accessible for small and large-scale buyers alike.
                </li>
                <li>
                  <strong>Fast Lead Time:</strong> Orders are processed within 7–14 business days, depending on size and customization.
                </li>
                <li>
                  <strong>Private Labeling:</strong> Elevate your brand with tailored packaging and labeling solutions.
                </li>
              </ul>
               </div>
            </div>
  </div>
</section>

 

    
{/*contact section*/}
<section className="bg-white text-gray-800 md:py-5 scroll-row">
   
<div className="text-center">
      <p className="text-lg sm:text-xl mb-4 text-[rgb(84,150,136)]">Ready to take the next step?</p>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[rgb(84,150,136)]">Order Now</h2>
        <p className="text-lg sm:text-xl mb-4 max-w-2xl md:mx-auto mx-4">
          Ready to experience the finest Indonesian vanilla? Contact us to place your order or request a quote.
        </p>
        <a
          href="/contact"
          className="text-[rgb(255,255,255)] bg-[rgb(84,150,136)] px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </div>

      <p className="text-sm mx-5 md:mx-0 mt-5 my-3 text-gray-600">
        Request a personalized quote or a free sample to experience our premium quality!
      </p>
      </div>
</section>
{/*statistic bus */}





      {/* Call to Action */}
      <EmailSubcribe/>
    </div>
  );
};

export default Products ;
