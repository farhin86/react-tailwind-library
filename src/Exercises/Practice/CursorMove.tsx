import React, { useRef, useEffect } from "react";

function CursorMove() {
  const cursorRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.pageX}px`;
        cursorRef.current.style.top = `${e.pageY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "absolute",
        width: "30px",
        height: "30px",
        borderRadius: "20px",
        backgroundColor: "red",
      }}
    />
  );
}
export default CursorMove;
