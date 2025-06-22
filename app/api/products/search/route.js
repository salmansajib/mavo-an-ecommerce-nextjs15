// app/api/products/search/route.js
import { promises as fs } from "fs";
import path from "path";

export async function GET(request) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = parseInt(url.searchParams.get("limit") || "6", 10);

  // Input validation
  if (page < 1 || limit < 1 || isNaN(page) || isNaN(limit)) {
    return Response.json({ error: "Invalid parameters" }, { status: 400 });
  }

  // Validate search query
  if (search && !/^[a-zA-Z0-9\s_-]*$/.test(search)) {
    return Response.json({ error: "Invalid search query" }, { status: 400 });
  }

  try {
    // Read all JSON files in the data directory
    const dataDir = path.join(process.cwd(), "data");
    const files = await fs.readdir(dataDir);
    const jsonFiles = files.filter((file) => file.endsWith("Data.json"));

    // Aggregate products from all JSON files
    let allProducts = [];
    for (const file of jsonFiles) {
      const filePath = path.join(dataDir, file);
      const fileContents = await fs.readFile(filePath, "utf8");
      const products = JSON.parse(fileContents);
      // Derive category from filename (e.g., clothData.json → cloth)
      const category = file.replace("Data.json", "").toLowerCase();
      allProducts = allProducts.concat(
        products.map((p) => ({ ...p, category })),
      );
    }

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      allProducts = allProducts.filter((product) => {
        const tagsString = Array.isArray(product.tags)
          ? product.tags.join(" ").toLowerCase()
          : product.tags?.toLowerCase() || "";
        return (
          product.name?.toLowerCase().includes(searchLower) ||
          product.type?.toLowerCase().includes(searchLower) ||
          tagsString.includes(searchLower)
        );
      });
    }

    const total = allProducts.length;
    // Paginate results
    const start = (page - 1) * limit;
    const paginatedProducts = allProducts.slice(start, start + limit);

    return Response.json({ products: paginatedProducts, total });
  } catch (error) {
    console.error("Error during search:", error);
    return Response.json(
      { error: "Failed to perform search" },
      { status: 500 },
    );
  }
}
