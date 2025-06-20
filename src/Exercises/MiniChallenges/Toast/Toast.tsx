/**
 * Toast
 * ------
 * 6 positions- start with top-left
 * Varients-error, success
 * Style pass, classname
 * sting, num, component
 * show close btn
 * toast duration
 * multiple toast from top
 */

import { ReactNode, useEffect, useRef, useState } from "react";
import "./Toast.css";

export const varientKeys = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
};

export const positionKeys = {
  "TOP-LEFT": "top-left",
  "TOP-RIGHT": "top-right",
  "BOTTOM-LEFT": "bottom-left",
  "BOTTOM-RIGHT": "bottom-right",
};

type Toast = {
  varient?: string;
  position: string;
  customStyle: React.CSSProperties;
  customClassname: string;
  close: () => void;
  duration?: number;
  children: ReactNode;
};

export const Toast = ({
  varient,
  position,
  customStyle,
  customClassname,
  close,
  duration,
  children,
}: Toast) => {
  const [theme, setTheme] = useState<string>("bg-white");
  const closeRef = useRef(close);
  closeRef.current = close;

  useEffect(() => {
    if (duration) {
      const id = setTimeout(() => closeRef.current(), duration);
      return () => {
        console.log(" timeout clear", id);
        clearTimeout(id);
      };
    }
  }, [duration]);

  useEffect(() => {
    switch (varient) {
      case varientKeys.ERROR:
        setTheme("bg-red-200");
        break;
      case varientKeys.SUCCESS:
        setTheme("bg-green-200");
        break;
      case varientKeys.WARNING:
        setTheme("bg-yellow-200");
        break;
      default:
        break;
    }
  }, [varient]);

  return (
    <div
      style={customStyle}
      className={`toast-section mb-3 p-3 border border-gray-400 rounded  ${theme} ${customClassname}`}
    >
      <div className="flex justify-between">
        {children}
        <div className="cursor-pointer ml-4 text-red-500" onClick={close}>
          x
        </div>
      </div>
    </div>
  );
};
