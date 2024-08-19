import useFetch from "../hooks/useFetch";
import { Product } from "../types";
import ProductsOverview from "../components/ProductsOverview";

function Products() {
  const { data, error, loading } = useFetch<Product[]>(
    "https://fakestoreapi.com/products?limit=5"
  );

  return <ProductsOverview loading={loading} error={error} data={data || []} />;
}

export default Products;
