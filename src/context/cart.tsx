import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { CartItem } from "../components/CartItemList";

export const CartContext = createContext<{
  cart: CartItem[] | null;
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
}>({
  cart: null,
  addItem: () => {},
  removeItem: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = useCallback((item: CartItem) => {
    setCart((items) => {
      const existsItem = items?.find(
        (existingItem) => existingItem.id === item.id
      );
      if (existsItem) {
        let res = items?.map((existingItem) => {
          if (existingItem.id === item.id) {
            return {
              ...existingItem,
              count: existingItem.count + 1,
            };
          }
          console.log(existingItem, item);
          return existingItem;
        });
        console.log("res 1", res, items);
        return [...res];
      } else {
        item.count++;
        console.log("res 2", [...items, item]);

        return [...items, item];
      }
    });
  }, []);

  const removeItem = useCallback((itemToRemove: CartItem) => {
    setCart((items) => {
      return items
        ?.map((item) => {
          if (itemToRemove.id === item.id) {
            item.count--;
          }
          return item;
        })
        .filter((item) => item.count !== 0);
    });
  }, []);

  const value = useMemo(() => {
    return {
      cart,
      addItem,
      removeItem,
    };
  }, [cart, addItem, removeItem]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  //   if (!ctx) {
  //     throw " useCart must be used inside CartProvider";
  //   }
  return ctx;
};
