import { ItemList } from "../../components/CartItemList";
import ShoppingHeader from "../ShoppingHeader";
import { CartProvider } from "../../context/cart";

export const Shopping = () => {
  return (
    <CartProvider>
      <div className="size-full h-screen">
        <ShoppingHeader />
        <div className="size-full flex">
          <div className="bg-blue-200 text-center w-3/4 pt-10"> Dashboard</div>
          <ItemList />
        </div>
      </div>
    </CartProvider>
  );
};
