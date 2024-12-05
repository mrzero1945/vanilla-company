"use client";
import { useState, useEffect } from "react";
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
      { type: "subtitle", text: "Introduction" },
      {
        type: "paragraph",
        text: "Vanilla, one of the most valuable and sought-after commodities in the global culinary industry, is poised for a significant production increase in 2024. This surge is attributed to improved agricultural techniques and favorable climate conditions that are boosting yields and enhancing the quality of vanilla beans worldwide.",
      },
      { type: "subtitle", text: "Sustainable Practices" },
      {
        type: "paragraph",
        text: "In recent years, farmers have been adopting more sustainable and efficient farming practices. These include organic cultivation methods, agroforestry, and advanced pollination techniques that not only improve yield but also maintain the ecological balance.",
      },
      { type: "subtitle", text: "Government Support" },
      {
        type: "paragraph",
        text: "Governments and international organizations have also stepped in to support vanilla farmers. Initiatives such as funding for modern farming equipment, training programs, and access to high-quality seedlings have empowered farmers to enhance productivity.",
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
      { type: "subtitle", text: "Introduction" },
      {
        type: "paragraph",
        text: "The demand for vanilla is increasing rapidly along with the global trend toward organic and natural foods. Consumers are prioritizing natural flavors over artificial additives, making vanilla a highly sought-after ingredient in various industries.",
      },
      { type: "subtitle", text: "Consumer Preferences" },
      {
        type: "paragraph",
        text: "Consumers today are more informed and health-conscious than ever before. There is a noticeable shift towards products that are natural, organic, and free from synthetic additives.",
      },
    ],
    imageUrl: MarketImage.src,
  },
];

const VanillaNewsPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Load selected article from localStorage
  useEffect(() => {
    const savedArticle = localStorage.getItem("selectedArticle");
    if (savedArticle) {
      const article = JSON.parse(savedArticle) as Article;
      setSelectedArticle(article);
    }
  }, []);

  // Save selected article to localStorage whenever it changes
  useEffect(() => {
    if (selectedArticle) {
      localStorage.setItem("selectedArticle", JSON.stringify(selectedArticle));
    } else {
      localStorage.removeItem("selectedArticle");
    }
  }, [selectedArticle]);

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  const renderContent = (content: ContentBlock[]) => {
    return content.map((block, index) => {
      if (block.type === "title") {
        return (
          <h1
            key={index}
            className="text-3xl font-bold mb-4 text-center text-[rgb(84,150,136)]"
          >
            {block.text}
          </h1>
        );
      } else if (block.type === "subtitle") {
        return (
          <h2
            key={index}
            className="text-2xl font-semibold mb-2 mt-4 text-left text-[rgb(84,150,136)]"
          >
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
              className="w-1/4 rounded-md mx-auto mb-4"
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
