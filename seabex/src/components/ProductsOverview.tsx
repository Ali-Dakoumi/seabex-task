import { Product } from "../types";
import Sidebar from "./Sidebar";
import Cart from "./product-cart/Cart";

function ProductsOverview({ data }: { data: Product[] }) {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((d: Product) => (
          <Cart key={d.id} product={d} />
        ))}
      </div>
    </div>
  );
}

export default ProductsOverview;
