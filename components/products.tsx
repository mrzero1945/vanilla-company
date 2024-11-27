import VanillaPasteIcon from "../resources/vanilla-paste-icon.png";
import Image from "next/image";
import VanillaPods from "../resources/vanilla-icon.png";
import VanillaExtract from "../resources/vanilla-extract.png";
import PremiumIcon from "../resources/premium-icon.png";
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
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">Vanilla Beans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vanilla Planifolia */}
            <div className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transition mx-4">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Vanilla Planifolia (Grade A)</h3>
              <p className="text-lg text-gray-700 mb-4">
                Renowned for its rich, creamy flavor and high vanillin content. Ideal for baking, ice cream, and beverages.
              </p>
              <ul className="text-sm list-disc list-inside text-gray-600 mb-4">
                <li>Lengths: 16cm - 20cm+</li>
                <li>Moisture Content: 25% - 30%</li>
              </ul>
              <p className="text-sm text-gray-600">Available for small or bulk orders. Perfect for culinary and fragrance industries.</p>
            </div>

            {/* Vanilla Tahitensis */}
            <div className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-2xl transition mx-4">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Vanilla Tahitensis (Grade A)</h3>
              <p className="text-lg text-gray-700 mb-4">
                Known for its floral, fruity aroma. Ideal for fine desserts, premium extracts, and perfumes.
              </p>
              <ul className="text-sm list-disc list-inside text-gray-600 mb-4">
                <li>Lengths: 14cm - 17cm</li>
                <li>Moisture Content: 25% - 35%</li>
              </ul>
              <p className="text-sm text-gray-600">Sourced sustainably, suitable for high-end culinary and cosmetic uses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vanilla Derivatives Section */}
      <section className="bg-white text-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-12">Vanilla Derivatives</h2>
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
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Vanilla Pods</h3>
              <p className="text-sm text-gray-600 mb-4">
                Premium vanilla pods with rich aroma and sweet flavor. Available in sizes 15cm - 20cm.
              </p>
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
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Vanilla Paste</h3>
              <p className="text-sm text-gray-600 mb-4">
                Concentrated vanilla paste mixed with seeds, available in varying intensities. Ideal for high-end desserts.
              </p>
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
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Vanilla Extract</h3>
              <p className="text-sm text-gray-600 mb-4">
                Pure, concentrated vanilla extract for everyday to gourmet applications. Available in Classic, Premium, and Ultra-Premium grades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Order Now</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-4">
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
    </div>
  );
};

export { Products };
