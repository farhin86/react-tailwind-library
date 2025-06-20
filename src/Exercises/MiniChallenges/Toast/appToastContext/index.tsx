import { useCallback, useContext, useEffect, useState } from "react";
import { positionKeys, Toast, varientKeys } from "../Toast";
import "./index.css";
import { createPortal } from "react-dom";
import { createContext } from "react";
import { SuccessButtons } from "./successButtons";
import { WarningButtons } from "./warningButtons";

export const ToastContext = createContext(null);

export const ToastProvider = () => {
  const [toastList, setToastList] = useState([]);

  return (
    <ToastContext.Provider
      value={{
        toastList,
        setToastList,
      }}
    >
      <div className="bg-green-50 w-screen h-screen">
        <WarningButtons />
        <SuccessButtons />
      </div>
      <ToastTrigger position={positionKeys["BOTTOM-RIGHT"]} />
    </ToastContext.Provider>
  );
};

export const ToastTrigger = ({ position }: { position: string }) => {
  const { toastList, setToastList } = useContext(ToastContext);
  const [toastPosition, setToastPosition] = useState<string>("top-5 right-5");

  const closeToast = useCallback(
    (toastId: number) => {
      let currToastList = [...toastList];
      // console.log(currToastList);
      let currToastListUpdated = currToastList.filter(
        (toast) => toast.id !== toastId
      );
      // console.log(currToastListUpdated, toastId);
      setToastList(currToastListUpdated);
    },
    [toastList]
  );

  useEffect(() => {
    switch (position) {
      case positionKeys["TOP-LEFT"]:
        setToastPosition("top-5 left-5");
        break;
      case positionKeys["TOP-RIGHT"]:
        setToastPosition("top-5 right-5");
        break;
      case positionKeys["BOTTOM-LEFT"]:
        setToastPosition("bottom-5 left-5");
        break;
      case positionKeys["BOTTOM-RIGHT"]:
        setToastPosition("bottom-5 right-5");
        break;
      default:
        break;
    }
  }, [position]);

  return (
    <div className="">
      {createPortal(
        <div className={`absolute ${toastPosition}`}>
          {toastList &&
            toastList.map((toast) => {
              return (
                <Toast
                  close={() => closeToast(toast.id)}
                  duration={toast.duration}
                  varient={toast.varient}
                  position={toast.positionKeys}
                  // customClassname={"work-toast"}
                  // customStyle={{ border: "none" }}
                >
                  <div>{toast.text}</div>
                </Toast>
              );
            })}
        </div>,
        document.body
      )}
    </div>
  );
};
