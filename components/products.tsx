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
            <div className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transition mx-4">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Vanilla Planifolia (Grade A)</h3>
              <p className="text-lg text-gray-700 mb-4">
                Renowned for most well-known variety of vanilla, prized for it's rich, creamy flavor and high vanillin content. Our Grade A vanilla beans are harvested at peak ripeness and undergo a careful curing process to enhance their aromatic qualities.
              </p>
              <ul  className="text-sm list-disc list-inside text-gray-600 mb-4">
                <li>
                  Uses: Perfect for use in gourmet culinary applications, including baking, ice cream making, and flavoring beverages. It is also widely used in the fragrance and cosmetic industries due to it's deep, warm aroma.
                </li>
                <li>
                  Packaging: Available in various quantities, from small batches to bulk shipments, ensuring flexibility for bussinesses of all sizes.
                </li>
              </ul>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 bg-white">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">Product Code</th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">Length</th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">Moisture Content</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm">VPL-20+</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">20cm+</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">25-30%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm">VPL-19</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">19cm</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">25-30%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm">VPL-18</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">18cm</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">25-30%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm">VPL-17</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">17cm</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">25-30%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm">VPL-16</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">16cm</td>
                      <td className="border border-gray-300 px-4 py-2 text-sm">25-30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Vanilla Tahitensis */}
            <div className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transition mx-4">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Vanilla Tahitensis (Grade A)</h3>
              <p className="text-lg text-gray-700 mb-4">
                Renowned for most unique flavor profile, known for it's floral, fruity notes and lighter, more aromatic essence. This variety is considered one of the most fragrant types of vanilla, making it ideal for fine culinary and parfumery uses.
                <ul className="text-sm list-disc list-inside text-gray-600 mb-4">
                  <li>
                    Uses: Often used in high-end desserts, parfumes, and personal care products like lotions and creams. It's also favored for creating premium vanilla extracts and pastes.
                  </li>
                  <li>
                    Packaging: Offered in small to large quantities, perfect for upscale restaurants, artisan confectioners, and fragrance manufacturers.
                  </li>
                </ul>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300 border-white">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">Product Code</th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">Length</th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-left text-sm font-medium">Moisture Content</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-sm">VTH-17</td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">17cm</td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">25-35%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-sm">VTH-16</td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">16cm</td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">25-30%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-sm">VTH-15</td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">15cm</td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">25-30%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-sm">VTH-14</td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">14cm</td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">25-30%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </p>
  
            </div>
          </div>
        </div>
      </section>

      {/* Vanilla Derivatives Section */}
      <section className="bg-white text-gray-800 py-16">
        <div className="container mx-auto text-left">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">Vanilla Derivatives</h2>
          <p className="mb-5">Our vanilla derivatives are crafted to provide enhanced flavor and versatility for a wide range of applications. From concentrated pastes to pure extracts and seeds, each product is designed to offer superior quality and consistency, perfect for gourmet food, beverages, and fragrance industries.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vanilla Pods */}
            <div className="border rounded-lg shadow-lg p-6 bg-gray-50 hover:shadow-2xl transition mx-4">
            <Image
              src={VanillaPods.src}
              alt="vanilla paste"
              width={120}
              height={120}
              className="mx-auto"
              />
              <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">Vanilla Pods</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our premium vanilla pods are sourced from the pristine plantations of Bali and Papua. Known for their rich aroma and deep, sweet flavor, our vanilla pods are perfect for infusions, extracts, and culinary creations.
              </p>
              <ul className="text-sm list-disc list-inside text-gray-600 mb-4">
                <li>
                  Flavor Profile: Intense, sweet, with subtle floral notes.
                </li>
                <li>
                  Use: Ideal for baking, making vanilla extract, or adding a natual vanilla flavor to beverages and desserts.
                </li>
                <li>
                  Packaging Options: Individual packs, bulk orders (1kg, 5kg, 10kg), or custom packaging for private labeling.
                </li>
                <li>
                  Moisture Content: 25% - 30%
                </li>
                <li>
                  Size: 15cm to 20cm
                </li>
              </ul>
              <div className="overflow-x-auto">
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
              </div>
              <h4 className="mt-5">Specifications:</h4>
              <ul className="text-sm list-disc list-inside text-gray-600 my-4">
                <li>
                  Product Type: Vanilla Pods
                </li>
                <li>
                  Grade: Premium Grade A
                </li>
                <li>
                  Color: Dark brown with visible oil droplets
                </li>
                <li>
                  Origin: Bali, Papua, Indonesia
                </li>
                <li>
                  Weight per Pod: 3-5 grams
                </li>
                <li>
                  Storage: Keep in a cool, dry place for optimal freshness.
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
              <ul className="text-sm list-disc list-inside text-gray-600 my-4">
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
              <h4 className="mt-5">
                Specifications:
              </h4>
              <ul className="text-sm list-disc list-inside text-gray-600 my-4">
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
              <ul className="text-sm list-disc list-inside text-gray-600 my-4">
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
                <ul className="text-sm list-disc list-inside text-gray-600 my-4">
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
            {/*Vanilla Seeds*/}
            <div className="border rounded-lg shadow-lg p-6 bg-gray-50 hover:shadow-2xl transition-mx-4">
            <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">Vanilla Seeds</h3>
            <p className="text-sm text-gray-600 mb-4">Extracted directly from our premium vanilla pods, our vanilla seeds offer a rich, intense flavor that is perfect for high-end gourmet products. These seeds add both flavor and visual appeal to your creations.</p>
            <h4 className="mt-5">Specifications:</h4>
            <ul className="text-sm list-disc list inside text-gray-600 my-4">
              <li>
                Product Type: Vanilla Seeds
              </li>
              <li>
                Origin: Bali, Papua, Indonesia
              </li>
              <li>
                Packaging: Glass jars(10g, 50g, 100g, bulk available)
              </li>
              <li>
                Shelf Life: 2 years
              </li>
              <li>
                Storage: Store in a cool, dry place.
              </li>
            </ul>
            </div>
          </div>

        </div>
      </section>

      {/*Bulk Orders & Customization */}
      <section className="bg-white text-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-green-800 text-center">Bulk Orders & Customization</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl md:mx-auto mx-4">
            We offer flexible bulk ordering options for manufacturers, wholesalers, and private label clients. Whether you need large quantities of vanilla pods, vanilla extract, or customized packaging, we are happy to accommodate your business needs.
          </p>
          <ul className="text-sm list-disc list-inside text-gray-600 my-4">
            <li className="flex justify-center">
              MOQ (Minimum Order Quantity): 10kg for bulk orders
            </li>
            <li className="flex justify-center">
              Lead Time: 7-14 business days (depending on order size)
            </li>
            <li className="flex justify-center">
              Custom Packaging: Available for private labeling
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Order Now</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl md:mx-auto mx-4">
            Ready to experience the finest Indonesian vanilla? Contact us to place your order or request a quote.
          </p>
          <a
            href="/contact"
            className="bg-white text-green-800 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition"
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
