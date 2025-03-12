import Image from "next/image";
import Link from "next/link";
import { getAllClothProducts } from "@/lib/fetchClothData"; // Fetch all products

const ProductSectionProductPage = async () => {
  const allProducts = await getAllClothProducts();

  return (
    <div className="row">
      {allProducts.map((product) => (
        <div
          key={product.id}
          className="col-lg-4 col-md-6 col-sm-6 mavo-mb-45 mavo-md-mb-15"
        >
          <div className="mavo-product-single mavo-md-mb-55">
            <div className="mavo-product-info">
              <div className="mavo-product-info-img">
                <Image
                  src={product.variants[0].images[0]} // Display first image of the first variant
                  alt={product.name}
                  width={500}
                  height={500}
                  quality={100}
                  style={{
                    width: "500px",
                    height: "auto",
                  }}
                />
              </div>
              {product.tags && (
                <div
                  className={`mavo-product-tag ${product.tags.toLowerCase()}`}
                >
                  <span>{product.tags}</span>
                </div>
              )}
              <div className="mavo-product-social">
                <ul>
                  <li>
                    <Link href={`/product/${product.id}`}>
                      <i className="flaticon-eye"></i>
                      <span> Quick view</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/product/${product.id}`}>
                      <i className="flaticon-star"></i>
                      <span> Compare</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/product/${product.id}`}>
                      <i className="flaticon-sort"></i>
                      <span> Wishlist</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mavo-product-cart">
                <Link href="/checkout">Buy Now</Link>
              </div>
            </div>
            <div className="mavo-product-meta mavo-mt-35 mavo-mb-40">
              <div className="mavo-product-category">
                <h6>
                  <Link
                    className="mavo-product-title-link"
                    href={`/product/${product.id}`}
                  >
                    {product.name}
                  </Link>
                </h6>
                <span className="product-sub-title font-prata">
                  ${product.base_price.toFixed(2)}
                </span>
              </div>
              <div className="mavo-product-rating">
                <div className="rating-star">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="flaticon-star-1"></i>
                  ))}
                  <Link href="#" className="rating-count font-prata">
                    {product.reviews} Reviews
                  </Link>
                </div>
                <div className="mavo-product-color-btn">
                  <ul>
                    {product.variants.map((variant, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          style={{
                            display: "block",
                            width: "20px",
                            height: "20px",
                            backgroundColor: variant.color_code,
                            borderRadius: "50%",
                          }}
                        ></Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {allProducts.length === 0 && <p>Loading products...</p>}
    </div>
  );
};

export default ProductSectionProductPage;
