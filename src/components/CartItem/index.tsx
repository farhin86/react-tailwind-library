export interface ItemDetails {
  id: number;
  name: string;
}
interface CartProps {
  itemDetails: ItemDetails;
}
import { useEffect, useState } from "react";
import carrot from "../../assets/carrot.jpg";
import raddish from "../../assets/raddish.jpg";
import Counter from "../Counter";
import { useCart } from "../../context/cart";
import useHover from "../../utility/hooks/useHover";

export const Item = ({ itemDetails }: CartProps) => {
  const [count, setCount] = useState(0);
  const { cart, addItem, removeItem } = useCart();
  const [cartRef, isHover] = useHover();

  useEffect(() => {
    if (cart?.length) {
      cart.forEach((item) => {
        if (itemDetails.id === item.id) {
          setCount(item.count);
        }
      });
    }
  }, [cart]);

  function itemCounter(func: string) {
    switch (func) {
      case "DES":
        setCount(count - 1);
        removeItem({ ...itemDetails, count: count });

        break;
      case "INC":
        setCount(count + 1);
        addItem({ ...itemDetails, count: count });

        break;
      default:
        break;
    }
  }

  return (
    <div className="m-2 border-solid border-2 border-sky-500 rounded p-3">
      <img className="w-24" src={itemDetails.id % 2 === 0 ? carrot : raddish} />
      <div className="flex items-center justify-between">
        <div>{itemDetails.name}</div>
        {count === 0 ? (
          <button
            ref={cartRef}
            onClick={() => itemCounter("INC")}
            className={
              isHover
                ? "bg-blue-200 text-blue-500 p-1 rounded"
                : "bg-blue-400 text-white p-1 rounded"
            }
          >
            Add to cart
          </button>
        ) : (
          <Counter itemCounter={itemCounter} count={count} />
        )}
      </div>
    </div>
  );
};
