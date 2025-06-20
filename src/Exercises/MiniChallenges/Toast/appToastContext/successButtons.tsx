import { useContext, useState } from "react";
import { DispatchToast, ToastContext } from ".";
import { positionKeys, varientKeys } from "../Toast";

export const SuccessButtons = () => {
  const { toastList, setToastList } = useContext(ToastContext);

  function addToast() {
    let currToastList = [...toastList];
    let toastId = null;
    if (currToastList.length === 0) {
      toastId = 1;
    } else {
      toastId = currToastList[currToastList.length - 1].id + 1;
    }
    currToastList.push({
      id: toastId,
      text: "Success!",
      varient: varientKeys.SUCCESS,
      duration: 3000,
    });
    setToastList(currToastList);
  }

  return (
    <button
      className="bg-gray-900 text-white p-5 rounded m-10 cursor-pointer"
      onClick={() => addToast()}
    >
      Toast Success
    </button>
  );
};
