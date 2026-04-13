import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursor.style.opacity = 1;
    };

    const hide = () => {
      cursor.style.opacity = 0;
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", move); // show again on re-entry

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CustomCursor;
