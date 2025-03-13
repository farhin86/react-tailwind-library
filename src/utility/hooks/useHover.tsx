import { useEffect, useRef, useState } from "react";

function useHover() {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseOver = () => setIsHover(true);
    const handleMouseOut = () => setIsHover(false);
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mouseover", handleMouseOver);
      currentRef.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      // it returns a function
      if (currentRef) {
        currentRef.removeEventListener("mouseover", handleMouseOver);
        currentRef.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);
  return [ref, isHover];
}

export default useHover;
