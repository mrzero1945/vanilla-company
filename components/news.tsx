"use client";
import { useState, useEffect } from "react";
import { Article, ContentBlock, articles } from "../header/articles";
import { Colors } from "../header/colors";

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
      } else if (block.type === "list" && block.items) {
        return (
          <ul key={index} className="list-disc list-inside mb-4 text-gray-700">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
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
          <div className="text-center py-8">
            {/* Teks Kecil */}
            <p className="text-sm text-gray-500 tracking-wide uppercase">Recent News</p>
            {/* Teks Judul dengan Garis */}
            <h2 className={`text-2xl md:text-4xl font-medium ${Colors.primary_text} relative inline-block`}>
              <span className={`absolute -bottom-1 left-0 w-full h-2 ${Colors.secondary_bg} opacity-60 rounded-full z-20`}></span>
              Our Latest News
            </h2>
          </div>

            <div className="grid gap-8 md:grid-cols-3 grid-cols-1">
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
                    <button className="bg-[rgb(84,150,136)] hover:text-blue-700 mt-4 inline-block px-5 text-white rounded-full py-3">
                      Read more
                    </button>
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
