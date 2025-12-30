import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description: "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU accents.",
    price: "130.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx9jukxsmc/AIR+MAX+90.png",
    category: "Shoes",
  },
  {
    name: "Nike Air Force 1 '07",
    description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
    category: "Shoes",
  },
  {
    name: "Nike Dunk Low",
    description: "Created for the hardwood but taken to the streets, the Nike Dunk Low returns with crisp overlays and original team colors.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/DUNK+LOW+RETRO.png",
    category: "Shoes",
  },
  {
    name: "Nike Sportswear Club Fleece",
    description: "The Nike Sportswear Club Fleece Crew is made with soft fleece fabric for all-day comfort.",
    price: "60.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/hbrvlb7wjqmxetpzxbff/CLUB+CREW+BB.png",
    category: "Apparel",
  },
  {
    name: "Nike Pro Dri-FIT",
    description: "The Nike Pro Dri-FIT Top keeps you cool and dry during your workout with sweat-wicking technology.",
    price: "35.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c3e3a0f0-c8b2-4e8a-8f1a-5c9e3b8f5e5e/pro-dri-fit-tight-fit-sleeveless-top.png",
    category: "Apparel",
  },
  {
    name: "Nike Brasilia 9.5",
    description: "The Nike Brasilia Backpack keeps your gear secure and organized for school, work or the gym.",
    price: "50.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5c7f3f3f-3f3f-4f3f-8f3f-3f3f3f3f3f3f/brasilia-9-5-training-backpack.png",
    category: "Accessories",
  },
];

async function seed() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql);

  console.log("🌱 Seeding database...");

  await db.insert(products).values(nikeProducts);

  console.log("✅ Seeding complete!");
}

seed().catch(console.error);
