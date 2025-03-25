import { promises as fs } from "fs";
import path from "path";

// function to fetch all cloth products
export async function getAllClothProducts() {
  const filePath = path.join(process.cwd(), "/data", "clothData.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}
