import VanillaImage from "../resources/vanilla-product.webp";
import MarketImage from "../resources/vanila.jpg";
import VanillaImage2 from "../resources/plant-2.jpg";
import { list } from "postcss";

interface ContentBlock {
  type: "title" | "subtitle" | "paragraph" | "list" | "subtitle2";
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
    title: "Why Indonesian Vanilla is Superior: A Comparison with Madagascar Vanilla",
    date: "1 January 2025",
    author: "Gregory Smith",
    excerpt:
      "Vanilla is one of the world's most beloved flavors, revered for its versatility and distinct aroma.",
    content: [
      {type: "paragraph", text: "Vanilla is one of the world’s most beloved flavors, revered for its versatility and distinct aroma. Two of the most renowned sources of vanilla are Madagascar and Indonesia, with each region contributing unique qualities to the market. While Madagascar vanilla is traditionally considered the gold standard, Indonesian vanilla is rapidly gaining recognition for its premium quality, distinctive flavor profile, and sustainability. In this article, we’ll compare the two varieties and highlight why Indonesian vanilla is the superior choice for discerning chefs, product manufacturers, and consumers alike."},
      {type: "subtitle", text: "1. Flavor Profile: A Richer, More Complex Taste"},
      {type: "subtitle2", text: "Madagascar Vanilla:"},
      {type: "list", items:["Madagascar vanilla is known for its rich, sweet, and creamy flavor, which has made it the most widely used type of vanilla in the world.","It has a soft, buttery profile, with subtle floral undertones and a deep sweetness that many associate with classic vanilla flavors."]},
      {type: "subtitle2", text:"Indonesian Vanilla:"},
      {type: "list", items:["Indonesian vanilla is celebrated for its more complex and nuanced flavor profile. It combines rich, creamy sweetness with a smoky, spicy note that adds depth and intrigue to the flavor", "The Indonesian beans tend to have a stronger, bolder flavor with a woody or earthy undertone, offering a unique twist on traditional vanilla flavoring."]},
      {type: "subtitle2", text: "Why Indonesian Vanilla Wins:"},
      {type: "paragraph", text: "While Madagascar vanilla offers a familiar sweetness, Indonesian vanilla brings a new layer of complexity, making it ideal for high-end culinary applications. Its smoky, rich profile is perfect for gourmet chefs and manufacturers looking to stand out with unique flavors that go beyond the standard."},
      {type: "subtitle", text: "2. Sourcing and Sustainability: A Commitment to the Future"},
      {type: "subtitle2", text: "Madagascar Vanilla:"},
      {type: "list", items:["Madagascar is the largest vanilla-producing country, but its production faces challenges such as climate variability and limited labor resources.", "The vanilla industry in Madagascar is often plagued by issues like price volatility, scarcity of skilled labor, and challenges with maintaining sustainable farming practices."]},
      {type: "subtitle2", text: "Indonesian Vanilla:"},
      {type: "list", items:["Indonesian vanilla stands out for its commitment to sustainability. Farmers in Indonesia focus on environmentally friendly farming methods that avoid the use of harmful chemicals and pesticides, ensuring a safer, more eco-conscious product.", "Additionally, Indonesia’s diverse climate, from its volcanic soils to its tropical highlands, offers ideal conditions for growing vanilla beans with less reliance on intensive industrial farming practices"]},
      {type: "subtitle2", text: "Why Indonesian Vanilla Wins:"},
      {type: "paragraph", text: "Sustainability is increasingly important to consumers, and Indonesia is making great strides in eco-friendly farming practices. By supporting Indonesian vanilla, you’re choosing a product that is not only high-quality but also environmentally and socially responsible."},
      {type: "subtitle", text: "3. Price and Availability: A Cost-Effective Alternative"},
      {type: "subtitle2", text: "Madagascar Vanilla:"},
      {type: "list", items:["Due to its large-scale production and dominant market position, Madagascar vanilla is often more expensive, particularly when demand is high. Price fluctuations are frequent, especially when weather conditions affect crop yields.", "●	As the world’s most popular vanilla, Madagascar vanilla is often the default choice for mass production, which sometimes leads to supply shortages and price hikes."]},
      {type: "subtitle2", text: "Indonesian Vanilla:"},
      {type: "list", items:["Indonesia, with its growing vanilla industry, offers a cost-effective alternative. While still premium in quality, Indonesian vanilla tends to be more affordable due to more stable supply chains and less reliance on volatile global markets.", "Additionally, Indonesia is investing in modern farming and processing techniques, improving yields and reducing overall production costs, which helps keep prices competitive without sacrificing quality."]},
      {type: "subtitle2", text: "Why Indonesian Vanilla Wins:"},
      {type: "paragraph", text: "Indonesian vanilla offers an affordable, high-quality alternative to Madagascar vanilla. Its cost-effectiveness makes it an attractive choice for both small businesses and large-scale manufacturers looking to balance quality with budget considerations."},
      {type: "subtitle", text: "4. Processing: The Key to Flavor Development"},
      {type: "subtitle2", text:"Madagascar Vanilla:"},
      {type: "list", items:["The processing of Madagascar vanilla is often done in bulk, with an emphasis on maintaining the consistency and high quality that has made the region famous. While the curing process is highly regulated, it is primarily focused on maintaining a predictable flavor profile.", "Some vanilla beans from Madagascar can be overly processed, leading to a loss of certain volatile compounds, which results in a flatter flavor."]},
      {type: "subtitle2", text:"Indonesian Vanilla:"},
      {type: "list", items:["Indonesian vanilla is known for its meticulous, artisanal processing. Farmers in Indonesia use traditional, multi-step curing techniques that include blanching, sweating, and sun-drying the beans. This process helps preserve the essential oils and volatile compounds that give Indonesian vanilla its distinctive aroma and taste.", "The extra care in processing Indonesian vanilla ensures a flavor that is both rich and complex, with the aromatic compounds intact, giving it a unique smoky, spicy profile that stands out from the crowd."]},
      {type: "subtitle2", text: "Why Indonesian Vanilla Wins:"},
      {type: "paragraph", text: "The artisanal approach to processing Indonesian vanilla helps preserve its unique flavor characteristics and aromatic complexity. This attention to detail in every step of the curing process makes Indonesian vanilla a superior product, delivering a deeper and more robust flavor that can't be found in standard Madagascar vanilla."},
      {type: "subtitle", text: "5. Versatility: Ideal for Gourmet and Specialty Applications"},
      {type: "subtitle2", text: "Madagascar Vanilla:"},
      {type: "list", items: ["Madagascar vanilla is often the go-to choice for mainstream vanilla products such as vanilla ice cream, custards, and baked goods. Its classic, universally-loved flavor suits a broad range of applications.", "However, its sweetness and lack of complexity may not lend itself to applications that require more sophisticated flavor profiles"]},
      {type: "subtitle2", text: "Indonesian Vanilla:"},
      {type: "list", items: ["Indonesian vanilla’s complex flavor profile makes it the perfect choice for premium applications. It’s widely used in gourmet desserts, high-end beverages, fine chocolates, and even savory dishes. Its versatility makes it ideal for chefs and manufacturers looking to create unique and bold products that stand out in the market.", "Indonesian vanilla is also a favored ingredient in the cosmetics industry, where its aromatic richness and calming properties enhance perfumes, lotions, and other beauty products."]},
      {type: "subtitle2", text: "Why Indonesian Vanilla Wins:"},
      {type: "paragraph", text: "For creators and manufacturers seeking something beyond the typical, Indonesian vanilla provides a versatile and high-quality alternative that can be used across a wide variety of industries, from food and beverages to beauty and wellness."},
      {type: "subtitle2", text: "Why Indonesian Vanilla Should Be Your First Choice"},
      {type: "paragraph", text: "While Madagascar vanilla has long held a dominant position in the vanilla market, Indonesian vanilla is quickly establishing itself as the superior choice for quality-conscious consumers and manufacturers alike. From its distinctive, complex flavor profile to its sustainable farming practices, Indonesian vanilla offers a more sophisticated, eco-friendly, and cost-effective alternative to traditional vanilla. Whether you're a chef looking to elevate your dishes, a product manufacturer aiming for a unique flavor, or a consumer seeking the best vanilla available, Indonesian vanilla is the clear winner. At PT Nature Exquisite Nusantara, we source only the finest Indonesian vanilla, ensuring premium quality and flavor with every batch. Choose Indonesian vanilla for your next project and experience the difference in every product."}
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
