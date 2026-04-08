import { useState } from "react";

function UsersList() {
  const [showAdmins, setShowAdmins] = useState(false);

  const users = [
    { id: 1, name: "Alice", isAdmin: true },
    { id: 2, name: "Bob", isAdmin: false },
    { id: 3, name: "Charlie", isAdmin: true },
    { id: 4, name: "David", isAdmin: false },
    { id: 5, name: "Eve", isAdmin: true },
  ];

  const filteredUsers = showAdmins
    ? users.filter((u) => u.isAdmin)
    : users;

  return (
    <div>
      <button onClick={() => setShowAdmins(!showAdmins)}>
        Show Admins
      </button>

      {filteredUsers.map((user) => (
        <p key={user.id}>
          {user.name} {user.isAdmin && "(Admin)"}
        </p>
      ))}
    </div>
  );
}

export default UsersList;