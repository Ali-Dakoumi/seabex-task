import { Product } from "../types";
import Hero from "./Hero";
import ProductCart from "./product-cart/ProductCart";
import Sidebar from "./Sidebar";

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
        <div className="space-y-8 w-full">
          <Hero />
          {loading ? (
            <p className="flex w-full">Loading...</p>
          ) : error ? (
            <p>Error on fetching products.</p>
          ) : null}
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
