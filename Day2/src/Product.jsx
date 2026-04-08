import { useState } from "react";

function Product({ name, price }) {
  const [isEditing, setIsEditing] = useState(true);
  const [newName, setNewName] = useState(name);

  return (
    <div>
      {isEditing ? (
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <h1>{newName}</h1>
      )}

      <p>Price: ₹{price}</p>

      <button onClick={() => setIsEditing(!isEditing)}>
        Toggle Edit
      </button>
    </div>
  );
}

export default Product;