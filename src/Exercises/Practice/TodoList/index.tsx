// Write a todo application with a checkbox, sort the checkbox based on checked items.
// Users should be able to uncheck and check.

import { useState } from "react";

export default function TodoList() {
  const [filterActive, setFilterActive] = useState(false);
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<{ name: string; checked: boolean }[]>([]);
  const [filteredList, setFilteredList] = useState<
    { name: string; checked: boolean }[]
  >([]);

  function addTodo(e) {
    if (e.key === "Enter" && value.length > 0) {
      const listItem = { name: value, checked: false };
      setList([...list, listItem]);
      setValue("");
      filterList([...list, listItem], filterActive);
    }
  }

  function checkList(listItem) {
    let newlist = [];
    newlist = list.map((item) => {
      if (item.name === listItem.name) {
        item.checked = !item.checked;
      }
      return item;
    });
    setList(newlist);
    filterList(list, filterActive);
  }

  function filterList(listInput, status) {
    if (status) {
      const newList = listInput.filter((item) => {
        if (item.checked) {
          return item;
        }
      });
      setFilteredList([...newList]);
    } else {
      setFilteredList([...listInput]);
    }
  }

  function filterChange() {
    setFilterActive(!filterActive);
    filterList(list, !filterActive);
  }
  return (
    <div className="flex flex-col items-center gap-3 mt-5">
      <h1>TodoList</h1>
      <input
        className="w-2/3 border p-3"
        placeholder="Write a new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => addTodo(e)}
      />
      {/* <button className="border p-3 w-1/4 bg-blue-300" onClick={addTodo}>
        Add
      </button> */}
      <div className="flex gap-2">
        Show only completed
        <input
          className="cursor-pointer"
          type="checkbox"
          checked={filterActive}
          onChange={filterChange}
        />
      </div>
      {filteredList.map((listItem) => {
        return (
          <div key={listItem.name} className="flex gap-2 ">
            <input type="checkbox" onClick={() => checkList(listItem)} />
            {listItem.name}
          </div>
        );
      })}
    </div>
  );
}
