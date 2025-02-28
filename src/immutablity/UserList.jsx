import { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([
    {
      id: crypto.randomUUID(),
      name: "Akit",
      address: "Bangladesh",
    },
  ]);
  function changeUser(id, name) {
    console.log(id, name);
  }
  return (
    <div className="flex flex-col">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              {user.name} lives in {user.address}
            </p>
            <button
              className="underline"
              onClick={() => changeUser(user.id, "Random")}
            >
              Change
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
