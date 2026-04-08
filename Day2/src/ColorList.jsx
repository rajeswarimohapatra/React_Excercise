import { useRef } from "react";

function ColorList() {
  const colors = [
    "Red", "Blue", "Green", "Yellow", "Purple",
    "Orange", "Pink", "Brown", "Black", "White"
  ];

  const refs = useRef([]);

  const highlight = (index) => {
    refs.current[index].style.fontWeight = "bold";
  };

  return (
    <div>
      {colors.map((color, index) => (
        <div key={index}>
          <span ref={(el) => (refs.current[index] = el)}>
            {color}
          </span>
          <button onClick={() => highlight(index)}>
            Highlight
          </button>
        </div>
      ))}
    </div>
  );
}

export default ColorList;