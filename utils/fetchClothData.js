import { promises as fs } from "fs";
import path from "path";

// function to fetch all cloth products
export async function getAllClothProducts() {
  const filePath = path.join(process.cwd(), "/data", "clothData.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}

// function to fetch a single cloth product by ID
export async function getClothProductById(id) {
  const products = await getAllClothProducts();
  return products.find((product) => product.id === id);
}

// function to fetch first four cloth products
export async function getFirstFourClothProducts() {
  const products = await getAllClothProducts();
  return products.slice(0, 4);
}

// function to fetch last four cloth products
export async function getLastFourClothProducts() {
  const products = await getAllClothProducts();
  return products.slice(-4);
}
