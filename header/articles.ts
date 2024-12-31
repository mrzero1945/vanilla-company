import VanillaImage from "../resources/vanilla-product.webp";
import MarketImage from "../resources/vanila.jpg";
import VanillaImage2 from "../resources/plant-2.jpg";

interface ContentBlock {
  type: "title" | "subtitle" | "paragraph" | "list";
  text?: string;
  items?: string[];
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
    title: "Indonesia’s Vanilla Industry in 2024: A Rising Star on the Global Stage",
    date: "31 December 2024",
    author: "Gregory Smith",
    excerpt:
      "As the world’s appetite for premium vanilla grows, 2024 has been a pivotal year for Indonesia’s vanilla industry.",
    content: [
      {
        type: "paragraph",
        text: "As the world’s appetite for premium vanilla grows, 2024 has been a pivotal year for Indonesia’s vanilla industry. With Madagascar facing production challenges, Indonesia has stepped up as a reliable supplier, delivering high-quality vanilla beans that meet global demand. At PT Nature Exquisite Nusantara, we’re proud to be at the forefront of this movement, connecting Indonesia’s vanilla producers with markets worldwide.",
      },
      { type: "subtitle", text: "Indonesia: A Vanilla Powerhouse in the Making" },
      {
        type: "paragraph",
        text: "Known for its unique flavor profile and exceptional quality, Indonesian vanilla has steadily gained recognition in the global market. The tropical climate, rich volcanic soil, and dedication of our local farmers create vanilla that rivals the best in the world.",
      },
      {
        type: "paragraph",
        text: "In 2024, while other regions faced significant setbacks, Indonesia maintained stable production, solidifying its reputation as a dependable supplier. This has positioned the country as a vital player in the global vanilla industry, attracting interest from buyers looking for both quality and sustainability."
      },
      { type: "subtitle", text: "Overcoming Challenges, Seizing Opportunities" },
      {
        type: "paragraph",
        text: "Indonesia’s vanilla industry has not been without challenges:",
      },
      {
        type: "list",
        items: ["Weather Uncertainty: Shifting climate patterns require innovative farming techniques", "Market Volatility: Competing with global suppliers requires consistent quality and fair pricing.", "Sustainability Needs: Preserving the environment while ensuring premium crop yields."]
      },
      {
        type: "paragraph",
        text: "At PT Nature Exquisite Nusantara, we tackle these challenges head-on by supporting farmers with training, promoting organic farming practices, and ensuring fair trade partnerships."
      },
      {
        type: "subtitle",
        text: "The Future of Vanilla: Why Indonesia Stands Out"
      }, 
      {
        type: "paragraph",
        text: "As the global vanilla market continues to grow—projected to reach USD 5,253.25 million by 2032—Indonesia is poised to lead the way. Here’s why Indonesian vanilla is becoming the preferred choice for businesses worldwide:"
      },
      {
        type: "list",
        items: ["Exceptional Quality: Bold, smoky, and versatile, perfect for food, beverages, and cosmetics.", "Sustainable Practices: More farms adopting eco-friendly and organic methods.", "Strategic Location: Proximity to key global markets ensures faster delivery times."]
      },
  
      {
        type: "subtitle",
        text: "PT Nature Exquisite Nusantara: Your Trusted Vanilla Partner"
      },
      {
        type: "paragraph",
        text: "At PT Nature Exquisite Nusantara, we are committed to showcasing the best of Indonesia’s vanilla. By working closely with local farmers, we ensure:"
      }, 
      {
        type: "list",
        items: ["Premium Quality: From farm to table, every bean meets the highest standards.", "Sustainable Sourcing: Supporting eco-friendly practices to protect our environment.", "Fair Trade: Empowering farmers with fair prices and consistent support."]
      },
      {
        type: "paragraph",
        text: "Whether you’re looking for bulk vanilla supplies or premium-grade products for your business, PT Nature Exquisite Nusantara is here to deliver."
      },
      {
        type: "subtitle",
        text: "Let’s Elevate Your Vanilla Experience"
      },
      {
        type: "paragraph",
        text: "Partner with us and discover the exquisite flavor of Indonesian vanilla. Together, we can make Indonesia the world’s top choice for premium vanilla."
      },
      {
        type: "paragraph",
        text: "📩 Contact us today to explore our products and services. Let’s build a brighter, sustainable future for the vanilla industry—one bean at a time."
      }
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
