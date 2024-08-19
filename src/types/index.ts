export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RootState {
  cart: {
    items: CartItem[];
  };
}
