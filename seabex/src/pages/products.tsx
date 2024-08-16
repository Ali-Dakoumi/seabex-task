import useFetch from "../hooks/useFetch";
import { Product } from "../types";
import ProductsOverview from "../components/ProductsOverview";

function Products() {
  const { data, error, loading } = useFetch<Product[]>(
    "https://fakestoreapi.com/products?limit=5"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <ProductsOverview data={data || []} />;
}

export default Products;
