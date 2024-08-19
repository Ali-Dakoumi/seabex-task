import { Product } from "../types";
import Sidebar from "./Sidebar";
import ProductCart from "./product-cart/ProductCart";

function ProductsOverview({
  data,
  error,
  loading,
}: {
  data: Product[];
  loading: boolean;
  error: Error | null;
}) {
  return (
    <>
      <div className="flex gap-4">
        <Sidebar />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : null}
        <div>
          {/* <Hero /> */}
          {data && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data?.map((d: Product) => (
                <ProductCart withBadge key={d.id} product={d} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductsOverview;
