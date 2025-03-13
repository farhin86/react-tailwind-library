import { useState } from "react";
import Header from "../../components/Header";
import Counter from "../../components/Counter";
import { CartItem } from "../../components/CartItemList";
import { useCart } from "../../context/cart";

export default function ShoppingHeader() {
  const [showCart, setShowCart] = useState(false);
  const { cart, addItem, removeItem } = useCart();
  //   console.log("cartcartcart", cart);

  function getCartLength() {
    let count = 0;
    cart?.forEach((element) => {
      count += element.count;
    });
    return count;
  }

  function itemCounter(func: string, item: CartItem) {
    switch (func) {
      case "DES":
        removeItem(item);

        break;
      case "INC":
        addItem(item);

        break;
      default:
        break;
    }
  }

  return (
    <Header name={"Shopping Site"}>
      <div className="relative">
        <button
          className="py-2 px-4 bg-blue-400 rounded"
          onClick={() => setShowCart(!showCart)}
        >
          Cart
        </button>
        <div className="absolute bg-green-500 w-7 rounded-full text-center -bottom-1 -right-3">
          {getCartLength()}
        </div>
        {showCart && cart && (
          <div className="absolute bg-gray-400 right-0 rounded p-2 mt-1 pb-0">
            <div>
              {cart &&
                cart.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="flex p-2 gap-3 bg-white text-black mb-2 justify-between"
                    >
                      <div>{item.name}</div>
                      <Counter
                        itemCounter={(func) => itemCounter(func, item)}
                        count={item.count}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </Header>
  );
}
