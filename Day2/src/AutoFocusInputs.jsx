import { useRef } from "react";

function AutoFocusInputs() {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);

  const handleChange1 = (e) => {
    if (e.target.value.length === 4) {
      input2.current.focus();
    }
  };

  const handleChange2 = (e) => {
    if (e.target.value.length === 4) {
      input3.current.focus();
    }
  };

  return (
    <div>
      <input ref={input1} maxLength={4} onChange={handleChange1} />
      <input ref={input2} maxLength={4} onChange={handleChange2} />
      <input ref={input3} maxLength={4} />
    </div>
  );
}

export default AutoFocusInputs;