"use client";
import { useState } from "react";
import VanillaImage from "../resources/vanilla-product.webp";
import MarketImage from "../resources/vanila.jpg";

interface ContentBlock {
  type: "title" | "subtitle" | "paragraph";
  text: string;
}

interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: ContentBlock[];
  imageUrl: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Vanilla Production Increases in 2024",
    date: "05 December 2024",
    author: "Gregory Smith",
    excerpt:
      "Vanilla, one of the most valuable and sought-after commodities in the global culinary industry, is poised for a significant production increase in 2024.",
    content: [
      {  type: "subtitle",
        text: "Introduction"
      }
      ,
      {
        type: "paragraph",
        text: "Vanilla, one of the most valuable and sought-after commodities in the global culinary industry, is poised for a significant production increase in 2024. This surge is attributed to improved agricultural techniques and favorable climate conditions that are boosting yields and enhancing the quality of vanilla beans worldwide.",
      },
      { type: "subtitle", text: "Sustainable Practices" },
      {
        type: "paragraph",
        text: "In recent years, farmers have been adopting more sustainable and efficient farming practices. These include organic cultivation methods, agroforestry, and advanced pollination techniques that not only improve yield but also maintain the ecological balance. The shift towards sustainability is a response to both environmental concerns and the growing market demand for ethically produced vanilla.",
      },
      { type: "subtitle", text: "Government Support" },
      {
        type: "paragraph",
        text: "Governments and international organizations have also stepped in to support vanilla farmers. Initiatives such as funding for modern farming equipment, training programs on best agricultural practices, and access to high-quality seedlings have empowered farmers to enhance productivity. In regions like Madagascar, Indonesia, and Papua New Guinea—some of the world's leading vanilla producers—these efforts are making a tangible difference.",
      },
      {
        type: "paragraph",
        text: "This anticipated increase in vanilla production is expected to stabilize global vanilla prices, which have been notoriously volatile in recent years due to supply shortages and high demand. The stabilization of prices will benefit not only producers but also manufacturers in the food, beverage, and cosmetic industries who rely heavily on vanilla as a key ingredient.",
      },
    ],
    imageUrl: VanillaImage.src,
  },
  {
    id: 2,
    title: "Vanilla Market Demand Soars",
    date: "05 December 2024",
    author: "Gregory Smith",
    excerpt:
      "The demand for vanilla is increasing rapidly along with the global trend toward organic and natural foods.",
    content: [
      {
        type: "subtitle",
        text: "Introductionn"
      }
      ,
      {
        type: "paragraph",
        text: "The demand for vanilla is increasing rapidly along with the global trend toward organic and natural foods. Consumers are prioritizing natural flavors over artificial additives, making vanilla a highly sought-after ingredient in various industries such as food and beverage, cosmetics, and pharmaceuticals. As the global market embraces sustainability and health consciousness, companies are also seeking responsibly sourced vanilla to meet consumer expectations.",
      },
      { type: "subtitle", text: "Consumer Preferences Drive Market Growth" },
      {
        type: "paragraph",
        text: "Consumers today are more informed and health-conscious than ever before. There is a noticeable shift towards products that are natural, organic, and free from synthetic additives. Vanilla, with its rich flavor profile and versatility, fits perfectly into this paradigm. It is used extensively in ice creams, baked goods, beverages, perfumes, and even medicinal products. The preference for natural vanilla over synthetic vanillin has significantly impacted market dynamics.",
      },
      { type: "subtitle", text: "Challenges in Supply Chain and Pricing" },
      {
        type: "paragraph",
        text: "While the demand for vanilla is soaring, the supply chain faces several hurdles. Vanilla cultivation is labor-intensive and time-consuming, often requiring hand pollination and careful curing processes. The majority of the world's vanilla is produced in Madagascar, Indonesia, and a few other countries with suitable climates.",
      },
      {
        type: "paragraph",
        text: "Supply constraints have led to volatile pricing in recent years. Farmers are sometimes hesitant to invest in vanilla cultivation due to the risks associated with weather, crop diseases, and fluctuating market prices. Additionally, instances of theft and market speculation have affected the stability of the vanilla trade.",
      },
      { type: "subtitle", text: "Embracing Sustainability and Ethical Sourcing" },
      {
        type: "paragraph",
        text: "As environmental concerns take center stage, both consumers and companies are emphasizing the importance of sustainability. Ethical sourcing of vanilla is becoming a key factor in purchasing decisions. Businesses are expected to not only provide high-quality products but also demonstrate corporate social responsibility.",
      },
    ],
    imageUrl: MarketImage.src,
  },
];

const VanillaNewsPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const renderContent = (content: ContentBlock[]) => {
    return content.map((block, index) => {
      if (block.type === "title") {
        return (
          <h1 key={index} className="text-3xl font-bold mb-4 text-center text-[rgb(84,150,136)]">
            {block.text}
          </h1>
        );
      } else if (block.type === "subtitle") {
        return (
          <h2 key={index} className="text-2xl font-semibold mb-2 mt-4 text-left text-[rgb(84,150,136)]">
            {block.text}
          </h2>
        );
      } else if (block.type === "paragraph") {
        return (
          <p key={index} className="text-gray-700 text-justify mb-4">
            {block.text}
          </p>
        );
      }
      return null;
    });
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        {selectedArticle ? (
          <div className="rounded-lg shadow-lg bg-white p-6">
            <button
              onClick={handleBackToList}
              className="text-blue-500 hover:text-blue-700 mb-4 inline-block text-left"
            >
              &larr; Back to Articles
            </button>
            <h1 className="text-3xl font-bold mb-4 text-center text-[rgb(84,150,136)]">
              {selectedArticle.title}
            </h1>
            <img
              className="w-1/4 rounded-md  mx-auto"
              src={selectedArticle.imageUrl}
              alt={selectedArticle.title}
            />
            <p className="text-sm text-gray-500 mb-6 text-center">
              Published on {selectedArticle.date} by {selectedArticle.author}
            </p>
            {renderContent(selectedArticle.content)}
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6 text-[rgb(84,150,136)]">
              Latest Vanilla News
            </h1>
            <div className="grid gap-8 md:grid-cols-2">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="rounded overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={article.imageUrl}
                    alt={article.title}
                  />
                  <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2 text-[rgb(84,150,136)]">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-2">
                      Published on {article.date} by {article.author}
                    </p>
                    <p className="text-gray-700 text-base">{article.excerpt}</p>
                    <span className="text-blue-500 hover:text-blue-700 mt-4 inline-block">
                      Read more &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export { VanillaNewsPage };
