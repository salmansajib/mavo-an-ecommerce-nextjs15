import { promises as fs } from "fs";
import path from "path";

export async function getProductsByCategory(category) {
  // Validate category (example: allow only alphanumeric and certain characters)
  if (!/^[a-zA-Z0-9_-]+$/.test(category)) {
    throw new Error("Invalid category");
  }

  const filePath = path.join(process.cwd(), "data", `${category}Data.json`);
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading ${category} data:`, error);
    throw new Error("Failed to fetch products");
  }
}
