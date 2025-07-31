import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useSearchProducts } from "@/hooks/useSearchProducts";
import Logo from "@/components/Logo";
import { Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LoaderSpinner from "@/components/LoaderSpinner";

const SearchModal = ({ isSearchFormActive, onClose }) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 300);
  const [page] = useState(1);

  const { data, isLoading, error } = useSearchProducts(debouncedSearch, page);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getProductImage = (product) => {
    // Check for different possible image attributes
    if (product.variants?.[0]?.images?.[0])
      return product.variants?.[0]?.images?.[0];
    if (product.variants?.[0].materials?.[0].images?.[0])
      return product.variants?.[0].materials?.[0].images?.[0];
    if (product.images?.[0]) return product.images?.[0];

    // Fallback image if none found
    return "/fallback-image.png";
  };

  // Close modal and clear search on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isSearchFormActive) {
        setSearch(""); // Clear search input
        onClose(); // Close modal
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose, isSearchFormActive]);

  // Modified onClose handler to clear search
  const handleClose = () => {
    setSearch("");
    onClose();
  };

  return (
    <div
      className={`${
        isSearchFormActive ? "translate-y-0" : "-translate-y-full"
      } absolute z-[100] top-0 left-0 text-white font-prata w-full bg-black px-4 sm:px-12 py-12 transition-transform duration-300`}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-32 w-full max-w-6xl mx-auto">
        <Logo color="light" className="w-24 md:w-48" />

        <form
          className="w-full h-12 relative"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search Your Product"
            value={search}
            onChange={handleSearch}
            className="border-0 outline-0 bg-zinc-900 pl-5 pr-24 w-full h-full rounded-md placeholder:!text-zinc-500 text-white text-sm md:text-base"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 w-12 h-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors !rounded-e-md"
          >
            <Search size={20} className="text-white" />
          </button>
        </form>
      </div>

      {/* Search Results */}
      <div
        className="w-full max-w-6xl max-h-[800px] overflow-y-auto mx-auto mt-5 px-3"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "oklch(37% 0.013 285.805) #1C2526",
          "--webkit-scrollbar-width": "8px",
          "--webkit-scrollbar-track-background": "#1C2526",
          "--webkit-scrollbar-track-border-radius": "4px",
          "--webkit-scrollbar-thumb-background": "#000000",
          "--webkit-scrollbar-thumb-border-radius": "4px",
          "--webkit-scrollbar-thumb-hover-background": "#6B7280",
        }}
      >
        {isLoading && (
          <div className="flex items-center justify-center">
            <LoaderSpinner />
          </div>
        )}
        {error && (
          <p className="text-center text-red-400">Error: {error.message}</p>
        )}
        {data && debouncedSearch && (
          <div>
            <h3 className="text-lg md:text-xl text-zinc-200 mb-4">
              {data.total} Result{data.total !== 1 ? "s" : ""} Found
            </h3>
            {data.total > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.products.map((product) => (
                  <li
                    key={`${product.category || "unknown"}-${product.id}`}
                    className="bg-zinc-900 rounded-md p-3 hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-1/2">
                        <Image
                          width={200}
                          height={200}
                          src={getProductImage(product)}
                          alt={product.name}
                          className="w-full h-auto object-cover rounded"
                        />
                      </div>

                      <div className="w-1/2">
                        <div>
                          <h4 className="!text-sm md:!text-lg text-white">
                            {product.name}
                          </h4>
                          <p>${product.base_price.toFixed(2)}</p>
                        </div>
                        <Link
                          onClick={onClose}
                          href={`/${product.category}/${product.id}`}
                          className="bg-white text-black text-center py-2 px-4 rounded"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-zinc-400">No products found.</p>
            )}
          </div>
        )}
      </div>

      <button
        onClick={handleClose}
        className="absolute top-2 right-2 p-2 hover:text-red-400 transition-colors"
      >
        <X size={24} />
      </button>
    </div>
  );
};

export default SearchModal;
