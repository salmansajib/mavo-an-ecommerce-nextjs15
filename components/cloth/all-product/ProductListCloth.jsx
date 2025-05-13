import ItemCard from "../ItemCard";

const ProductListCloth = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <p className="text-3xl font-medium !text-green-500">
        No products available.
      </p>
    );
  }

  return (
    <div className="row">
      {products.map((product) => (
        <div
          key={product.id}
          className="col-lg-4 col-md-6 col-sm-6 mavo-mb-45 mavo-md-mb-15"
        >
          <ItemCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductListCloth;
