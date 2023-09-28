import CartCard from "./components/CartCard";

let data = [
  {
    "id": 30,
    "name": "Men's Slim Fit Dark Wash Jeans",
    "brand": "FashionHub",
    "price": 49.99,
    "description": "Modern slim fit jeans in a dark wash for a sleek look.",
    "category": "Jeans",
    "image_URL": "./demo.jpg"
  },
  {
    "id": 31,
    "name": "Women's Ruffled Floral Maxi Dress",
    "brand": "FloralGlam",
    "price": 42.00,
    "description": "Elegant maxi dress with floral patterns and ruffled details.",
    "category": "Dresses",
    "image_URL": "./demo.jpg"
  },
  {
    "id": 32,
    "name": "Leather Cardholder Wallet",
    "brand": "LeatherCraft",
    "price": 15.99,
    "description": "Compact leather cardholder wallet with a sleek design.",
    "category": "Wallets",
    "image_URL": "./demo.jpg"
  },
  {
    "id": 33,
    "name": "Men's Graphic Print T-Shirt",
    "brand": "TrendyPrints",
    "price": 18.00,
    "description": "Casual t-shirt with a trendy graphic print design.",
    "category": "T-Shirts",
    "image_URL": "./demo.jpg"
  },
  {
    "id": 34,
    "name": "Women's Classic Ballet Flats",
    "brand": "BalletBeauty",
    "price": 29.99,
    "description": "Timeless ballet flats for a comfortable and chic look.",
    "category": "Footwear",
    "image_URL": "./demo.jpg"
  },
  {
    "id": 35,
    "name": "Men's Straight Leg Black Jeans",
    "brand": "UrbanStyle",
    "price": 55.00,
    "description": "Classic straight leg jeans in a versatile black color.",
    "category": "Jeans",
    "image_URL": "./demo.jpg"
  },
  {
    "id": 36,
    "name": "Women's Elegant Cocktail Dress",
    "brand": "CocktailCouture",
    "price": 69.99,
    "description": "Stunning cocktail dress for a glamorous night out.",
    "category": "Dresses",
    "image_URL": "./demo.jpg"
  },
  {
    "id": 37,
    "name": "Minimalist Slim Bifold Wallet",
    "brand": "SleekEssentials",
    "price": 22.50,
    "description": "Minimalist bifold wallet with a slim profile for everyday use.",
    "category": "Wallets",
    "image_URL": "./demo.jpg"
  }
]
const BasketPage = () => {
  return (
    <div className="flex flex-col gap-2">
      {data.map((item, idx)=> (
        <CartCard data={item} key={idx}/>        
      ))}
    </div>
  );
}

export default BasketPage;
