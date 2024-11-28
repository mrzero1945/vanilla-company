import VanillaPasteIcon from "../resources/vanilla-paste-icon.png";
import Image from "next/image";
import VanillaPods from "../resources/vanilla-icon.png";
import VanillaExtract from "../resources/vanilla-extract.png";
import PremiumIcon from "../resources/premium-icon.png";
import VanillaIcon from "../resources/vanilla-icon.png"
import { EmailSubcribe } from "./subscribe-email";
const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white pt-16 pb-12">
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
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the finest Indonesian vanilla beans, extracts, pastes, and more. Perfect for gourmet culinary creations and premium applications.
          </p>
        </div>
      </section>

      {/* Vanilla Beans Section */}
      <section className="bg-gray-50 text-gray-800 py-16">
        <div className="container mx-auto">
          <Image
          src={VanillaIcon.src}
          alt="vanilla"
          width={60}
          height={60}
          className="mx-auto"
          />
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">Vanilla Beans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vanilla Planifolia */}
<div className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transition mx-4 flex flex-col">
  {/* Judul */}
  <h3 className="text-2xl font-semibold text-green-800 mb-4">
    Vanilla Planifolia (Grade A)
  </h3>
  
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
  <h3 className="text-2xl font-semibold text-green-800 mb-4">
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
      <section className="bg-white text-gray-800 py-16">
        <div className="container mx-auto text-left">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">Vanilla Derivatives</h2>
          <p className="mb-5 text-center">Our vanilla derivatives are crafted to provide enhanced flavor and versatility for a wide range of applications. From concentrated pastes to pure extracts and seeds, each product is designed to offer superior quality and consistency, perfect for gourmet food, beverages, and fragrance industries.</p>
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
              <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">Vanilla Extract</h3>
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
              <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">Vanilla Paste</h3>
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
  <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">Vanilla Seeds</h3>
  <p className="text-sm text-gray-600 mb-4">
    Extracted directly from our finest vanilla pods, our premium vanilla seeds provide an intense, aromatic flavor that enhances the quality of gourmet products. These tiny black specks are packed with rich vanilla essence, making them perfect for adding both flavor and visual appeal to your culinary creations. The seeds' delicate yet potent flavor works beautifully in everything from high-end desserts and pastries to premium beverages, infusions, and gourmet chocolate. Vanilla seeds are the ideal choice for chefs looking to elevate their dishes with an authentic, high-quality vanilla flavor. Perfect for those seeking both flavor and aesthetic appeal, they add a luxurious touch to any recipe.
  </p>
  <h4 className="mt-5">Specifications:</h4>
  <ul className="text-sm list-inside text-gray-600 my-4">
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
  <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">Vanilla Powder</h3>
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

      </section>
{/* Bulk Orders & Customization */}
<section className="bg-white text-gray-800 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-6 text-green-800 text-center">
      Bulk Orders & Customization
    </h2>
    <p className="text-lg sm:text-xl mb-8 max-w-2xl md:mx-auto mx-4">
      We offer flexible bulk ordering options for manufacturers, wholesalers, and private label clients. Whether you need large quantities of vanilla pods, vanilla extract, or customized packaging, we are happy to accommodate your business needs.
    </p>

    <div className="space-y-6">
      <p className="text-lg sm:text-xl mb-4 max-w-2xl md:mx-auto mx-4">
        <strong>MOQ (Minimum Order Quantity):</strong> 10kg for bulk orders
      </p>
      <p className="text-lg sm:text-xl mb-4 max-w-2xl md:mx-auto mx-4">
        <strong>Lead Time:</strong> 7-14 business days (depending on order size)
      </p>
      <p className="text-lg sm:text-xl mb-4 max-w-2xl md:mx-auto mx-4">
        <strong>Custom Packaging:</strong> Available for private labeling
      </p>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-green-800">Order Now</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl md:mx-auto mx-4">
            Ready to experience the finest Indonesian vanilla? Contact us to place your order or request a quote.
          </p>
          <a
            href="/contact"
            className="text-white bg-green-800 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
      <EmailSubcribe/>
    </div>
  );
};

export { Products };
