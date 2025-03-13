import { Item, ItemDetails } from "../CartItem";

const Items = [
  { id: 1, name: "Carrot" },
  { id: 2, name: "Raddish" },
  { id: 3, name: "Rice" },
  { id: 4, name: "Lentils" },
];

export interface CartItem extends ItemDetails {
  count: number;
}
export const ItemList = () => {
  return (
    <div className="w-1/4">
      {Items &&
        Items.map((item) => {
          return <Item key={item.id} itemDetails={item} />;
        })}
    </div>
  );
};
