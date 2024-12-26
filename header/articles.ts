import VanillaImage from "../resources/vanilla-product.webp";
import MarketImage from "../resources/vanila.jpg";
import VanillaImage2 from "../resources/plant-2.jpg";

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
  {
    id: 3,
    title: "Innovations in Vanilla Processing",
    date: "26 December 2024",
    author: "Emily Carter",
    excerpt:
      "Advancements in vanilla processing technologies are revolutionizing the industry, leading to higher quality and more efficient production.",
    content: [
      { type: "subtitle", text: "Introduction" },
      {
        type: "paragraph",
        text: "Advancements in vanilla processing technologies are revolutionizing the industry, leading to higher quality and more efficient production. From the farm to the factory, cutting-edge methods are reshaping the way vanilla is harvested, cured, and processed for various uses.",
      },
      { type: "subtitle", text: "Modern Processing Techniques" },
      {
        type: "paragraph",
        text: "One of the most notable innovations includes advanced curing methods that accelerate the drying process while preserving the rich flavors and aromas of vanilla. Techniques such as vacuum curing and controlled fermentation are becoming more widespread, ensuring consistency in quality and reducing production time.",
      },
      { type: "subtitle", text: "Enhanced Quality Control" },
      {
        type: "paragraph",
        text: "Quality control has also been enhanced through digital monitoring systems. These systems track temperature, humidity, and other critical parameters throughout the curing and storage stages, ensuring that the vanilla maintains its optimal quality at every step of the supply chain.",
      },
      { type: "subtitle", text: "Impact on Global Markets" },
      {
        type: "paragraph",
        text: "The integration of these innovations not only improves efficiency but also boosts the competitiveness of vanilla producers in global markets. High-quality vanilla processed using these modern techniques is in high demand, especially among premium brands and industries that value sustainable practices.",
      },
    ],
    imageUrl: VanillaImage2.src, // Replace with the appropriate image source
  }

];

export type { Article, ContentBlock}
export {articles}
