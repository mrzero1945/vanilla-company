import Image from 'next/image';

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-gray-800 pt-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-[rgb(34,139,34)]">Our Premium Vanilla Products</h1>
          <p className="text-lg mb-8">
            Discover the finest Indonesian vanilla beans, extracts, pastes, and more. Perfect for gourmet culinary creations and premium applications.
          </p>
        </div>
      </section>

      {/* Vanilla Beans Section */}
      <section className="bg-white text-gray-800 pb-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[rgb(34,139,34)] text-center mb-8">Vanilla Beans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vanilla Planifolia */}
            <div className="border rounded-lg shadow-lg p-6 mx-4 bg-[rgb(245,245,220)] ">
              <h3 className="text-2xl font-semibold text-[rgb(139,69,19)] mb-4">Vanilla Planifolia (Grade A)</h3>
              <p className="text-lg mb-4">
                Renowned for its rich, creamy flavor and high vanillin content. Ideal for baking, ice cream, and beverages.
              </p>
              <ul className="text-sm list-disc list-inside mb-4">
                <li>Lengths: 16cm - 20cm+</li>
                <li>Moisture Content: 25% - 30%</li>
              </ul>
              <p className="text-sm">Available for small or bulk orders. Perfect for culinary and fragrance industries.</p>
            </div>

            {/* Vanilla Tahitensis */}
            <div className="border rounded-lg shadow-lg p-6 mx-4 bg-[rgb(245,245,220)]">
              <h3 className="text-2xl font-semibold text-[rgb(139,69,19)]  mb-4">Vanilla Tahitensis (Grade A)</h3>
              <p className="text-lg mb-4">
                Known for its floral, fruity aroma. Ideal for fine desserts, premium extracts, and perfumes.
              </p>
              <ul className="text-sm list-disc list-inside mb-4">
                <li>Lengths: 14cm - 17cm</li>
                <li>Moisture Content: 25% - 35%</li>
              </ul>
              <p className="text-sm">Sourced sustainably, suitable for high-end culinary and cosmetic uses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vanilla Derivatives Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[rgb(34,139,34)] mb-8">Vanilla Derivatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vanilla Pods */}
            <div className="border rounded-lg shadow-lg p-6 bg-[rgb(245,245,220)] mx-4">
              <h3 className="text-2xl font-semibold text-[rgb(139,69,19)] mb-4">Vanilla Pods</h3>
              <p className="text-sm mb-4">
                Premium vanilla pods with rich aroma and sweet flavor. Available in sizes 15cm - 20cm.
              </p>
            </div>

            {/* Vanilla Paste */}
            <div className="border rounded-lg shadow-lg p-6 bg-[rgb(245,245,220)] mx-4">
              <h3 className="text-2xl font-semibold text-[rgb(139,69,19)] mb-4">Vanilla Paste</h3>
              <p className="text-sm mb-4">
                Concentrated vanilla paste mixed with seeds, available in varying intensities. Ideal for high-end desserts.
              </p>
            </div>

            {/* Vanilla Extract */}
            <div className="border rounded-lg shadow-lg p-6 bg-[rgb(245,245,220)] mx-4">
              <h3 className="text-2xl font-semibold text-[rgb(139,69,19)] mb-4">Vanilla Extract</h3>
              <p className="text-sm mb-4">
                Pure, concentrated vanilla extract for everyday to gourmet applications. Available in Classic, Premium, and Ultra-Premium grades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
            
          <h2 className="text-3xl font-bold mb-6 text-[rgb(34,139,34)]">Order Now</h2>
          <p className="text-lg mb-8 text-gray-700 mx-4">
            Ready to experience the finest Indonesian vanilla? Contact us to place your order or request a quote.
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

export {Products};
