"use client"
import VanillaPasteIcon from "../resources/vanilla-paste-icon.png";
import Image from "next/image";
import VanillaExtract from "../resources/vanilla-extract.png";
import PremiumIcon from "../resources/premium-icon.png";
import VanillaIcon from "../resources/vanilla-icon.png"
import RawVanilla from "../resources/raw-beans.jpg";
import VanillaBeans from "../resources/vanilla-beans.jpg";
import VanillaSeeds from "../resources/vanilla-seeds.jpg";
import VanillaPowder from "../resources/vanilla-powder.jpg";
import PremiumProduct from "../resources/product-sample.jpg";
import CatalogIcon from "../resources/catalog-icon.png";
import FlexibleBanner from "../resources/flexible.png";
import { EmailSubcribe } from "./subscribe-email";
import {useLayoutEffect} from 'react';
import { initScrollTrigger, clearScrollTriggers } from "../header/scroll-anim";



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
      <section className="bg-[rgb(84,150,136)] text-white pt-16 pb-12 scroll-row">
        <div className="container mx-auto text-center">
          <div className="mb-2">
          <Image
          src={PremiumIcon}
          alt="premiun"
          width={60}
          height={60}
          className="mx-auto"
          />
          </div>
          <h1 className="text-5xl font-bold mb-6">Our Premium Vanilla Products</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl md:mx-auto leading-relaxed mx-5">
            Discover the finest Indonesian vanilla beans, extracts, pastes, and more. Perfect for gourmet culinary creations and premium applications.
          </p>
        </div>
      </section>

      {/* Vanilla Beans Section */}
      <section className="bg-gray-50 text-gray-800 py-16 scroll-row">
        <div className="container mx-auto">
          <Image
          src={VanillaIcon.src}
          alt="vanilla"
          width={60}
          height={60}
          className="mx-auto"
          />
          <h2 className="text-4xl font-bold text-[rgb(84,150,136)] text-center mb-12">Vanilla Beans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vanilla Planifolia */}
<div className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transition mx-4 flex flex-col">
  {/* Judul */}
  <h3 className="text-2xl font-semibold text-[rgb(84,150,136)] mb-4">
    Vanilla Planifolia (Grade A)
  </h3>
  <Image 
  src={RawVanilla.src}
  alt=""
  width={1000}
  height={1000}
  className="mx-auto h-60 w-full"
  />
  
  {/* Deskripsi */}
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


{/* Vanilla Tahitensis */}
<div className="border rounded-lg shadow-lg p-8 bg-white hover:shadow-2xl transition mx-4 flex flex-col">
  {/* Judul */}
  <h3 className="text-2xl font-semibold text-[rgb(84,150,136)] mb-4">
    Vanilla Tahitensis (Grade A)
  </h3>
  <Image 
  src={VanillaBeans.src}
  alt=""
  width={1000}
  height={1000}
  className="mx-auto h-60 w-full"
  />
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
    <table className="min-w-full border-collapse border border-gray-300 bg-white mt-12">
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

          </div>
        </div>
        
      </section>

      {/* Vanilla Derivatives Section */}
      <section className="bg-white text-gray-800 py-16 scroll-row">
        <div className="container mx-auto text-left">
          <h2 className="text-4xl font-bold text-[rgb(84,150,136)] mb-12 text-center">Vanilla Derivatives</h2>
          <p className="mb-5 text-left mx-5">Our vanilla derivatives are crafted to provide enhanced flavor and versatility for a wide range of applications. From concentrated pastes to pure extracts and seeds, each product is designed to offer superior quality and consistency, perfect for gourmet food, beverages, and fragrance industries.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            

            {/* Vanilla Extract */}
            <div className="border rounded-lg shadow-lg p-6 bg-gray-50 hover:shadow-2xl transition mx-4">
              <Image
              src={VanillaExtract.src}
              alt="vanilla extract"
              width={40}
              height={40}
              className="mx-auto"
              />
              <h3 className="text-2xl font-semibold text-[rgb(84,150,136)] mb-4 text-center">Vanilla Extract</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our vanilla extract is a pure and concentrated form of vanilla, ideal for enhancing the flavor of your favorite baked goods, beverages, and gourmet dishes. Available in different grades to match the needs of professionals.
              </p>
              <ul className="text-sm   text-gray-600 my-4">
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

            {/* Vanilla Paste */}
            <div className="border rounded-lg shadow-lg p-6 bg-gray-50 hover:shadow-2xl transition mx-4">
              <Image
              src={VanillaPasteIcon.src}
              alt="vanilla paste"
              width={60}
              height={60}
              className="mx-auto"
              />
              <h3 className="text-2xl font-semibold text-[rgb(84,150,136)] mb-4 text-center">Vanilla Paste</h3>
              <p className="text-sm text-gray-600 mb-4">
                Vanilla paste is a concentrated form of vanilla extract mixed with vanilla seeds. This product adds both flavor and visual appeal, perfect for high-end desserts and beverages. Available in varying intensities to suit different needs.
              </p>
              <ul className="text-sm   text-gray-600 my-4">
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

{/* Vanilla Seed */}

<div className="border rounded-lg shadow-lg p-6 bg-gray-50 hover:shadow-2xl transition mx-4">
  <h3 className="text-2xl font-semibold text-[rgb(84,150,136)] mb-4 text-center">Vanilla Seeds</h3>
  <Image 
  src={VanillaSeeds.src}
  width={1000}
  height={1000}
  alt=""
  className="w-full h-80 mx-auto"
  />
  <p className="text-sm text-gray-600 mb-4">
    Extracted directly from our finest vanilla pods, our premium vanilla seeds provide an intense, aromatic flavor that enhances the quality of gourmet products. These tiny black specks are packed with rich vanilla essence, making them perfect for adding both flavor and visual appeal to your culinary creations. The seeds' delicate yet potent flavor works beautifully in everything from high-end desserts and pastries to premium beverages, infusions, and gourmet chocolate. Vanilla seeds are the ideal choice for chefs looking to elevate their dishes with an authentic, high-quality vanilla flavor. Perfect for those seeking both flavor and aesthetic appeal, they add a luxurious touch to any recipe.
  </p>
  <h4 className="mt-5">Specifications:</h4>
  <ul className="text-sm  text-gray-600 my-4">
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

            {/* Vanilla Powder */}
<div className="border rounded-lg shadow-lg p-6 bg-gray-50 hover:shadow-2xl transition mx-4">
  <h3 className="text-2xl font-semibold text-[rgb(84,150,136)] mb-4 text-center">Vanilla Powder</h3>
  <Image
  src={VanillaPowder.src}
  alt=""
  width={1000}
  height={1000}
  className="w-full h-80 mx-auto"
  />
  <p className="text-sm text-gray-600 mb-4">
    Our premium vanilla powder is made from ground, dried vanilla beans. It provides the purest vanilla flavor with a fine texture, ideal for adding a touch of elegance to a variety of desserts, beverages, and gourmet dishes.
  </p>
  <ul className="text-sm text-gray-600 my-4">
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

          </div>

          

        </div>
        <div className="flex justify-center mt-20">
  <a
    href="/contact"
    className="flex items-center text-[rgb(255,255,255)] bg-[rgb(84,150,136)] text-center px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition"
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

      <section className="bg-white text-gray-800 md:py-5 scroll-row">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-6 text-[rgb(84,150,136)] text-center">
      Customizable Bulk Orders for Your Business Needs
    </h2>
    <p className="text-lg sm:text-xl mb-8 max-w-2xl md:mx-auto text-center mx-4">
      At PT. Nature’s Exquisite Nusantara, we specialize in providing flexible bulk ordering solutions for manufacturers, wholesalers, and private label clients. Whether you require large quantities of premium vanilla products or custom packaging tailored to your brand, we’re here to meet your needs.
    </p>

    {/* Bulk Orders & Customization - Tambahkan gambar ilustrasi atau foto produk */}
    <Image 
    src={PremiumProduct.src}
    alt=""
    width={1000}
    height={1000}
    className="mx-auto w-1/2 h-80"
    />

    <h3 className="text-2xl font-semibold mb-4 text-[rgb(84,150,136)] text-center">Our Products</h3>
    <ul className="list-disc mb-8 text-lg sm:text-xl max-w-2xl md:mx-auto mx-5">
      <li><strong className="text-[rgb(84,150,136)]">Premium Vanilla Pods:</strong> Gourmet-grade and extract-grade options.</li>
      <li><strong className="text-[rgb(84,150,136)]">Vanilla Extract & Powder:</strong> Versatile for various applications.</li>
      <li><strong className="text-[rgb(84,150,136)]">Custom Packaging:</strong> Personalized labels and designs to reflect your brand identity.</li>
    </ul>

    {/* Tambahkan gambar fleksibilitas pesanan di sini */}
    <Image
    src={FlexibleBanner.src}
    alt=""
    width={1000}
    height={1000}
    className="mx-auto w-1/2 h-80"
    />
    <h3 className="text-2xl font-semibold mb-4 text-center text-[rgb(84,150,136)]">Flexible Ordering Options</h3>
    <ul className="list-disc mb-8 text-lg sm:text-xl max-w-2xl md:mx-auto mx-5">
      <li>
        <strong className="text-[rgb(84,150,136)]">Minimum Order Quantity (MOQ):</strong> Starting at just 25kg, making it accessible for small and large-scale buyers alike.
      </li>
      <li>
        <strong className="text-[rgb(84,150,136)]">Fast Lead Time:</strong> Orders are processed within 7–14 business days, depending on size and customization.
      </li>
      <li>
        <strong className="text-[rgb(84,150,136)]">Private Labeling:</strong> Elevate your brand with tailored packaging and labeling solutions.
      </li>
    </ul>

    {/* Tambahkan gambar testimonial atau alasan memilih layanan */}
    <h3 className="text-2xl font-semibold mb-4 text-[rgb(84,150,136)] text-center">Why Choose Us?</h3>
    <ul className="list-disc mb-8 text-lg sm:text-xl max-w-2xl md:mx-auto mx-5">
      <li>Exceptional quality sourced directly from Indonesia.</li>
      <li>Reliable and timely order fulfillment.</li>
      <li>Comprehensive customization to suit your business goals.</li>
    </ul>

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

      <p className="text-sm md:mt-5 my-3 text-gray-600">
        Request a personalized quote or a free sample to experience our premium quality!
      </p>
      
      {/* Tambahkan gambar statistik bisnis */}
      <div className="flex justify-center gap-10 my-3 mx-4 md:text-xl text-md text-[rgb(84,150,136)] scroll-row" suppressHydrationWarning={true}>
        <div>
          <p className="font-bold text-3xl">100%</p>
          <p>Pure Quality</p>
        </div>
        <div>
          <p className="font-bold text-3xl">50+</p>
          <p>Global Partners</p>
        </div>
        <div>
          <p className="font-bold text-3xl">10,000+</p>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* Call to Action */}
      <EmailSubcribe/>
    </div>
  );
};

export default Products ;
