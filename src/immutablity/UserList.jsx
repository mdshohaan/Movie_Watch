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
    const newUser = [...users]; // shallow copy  of users
    const found = newUser.find((user) => user.id === id);
    found.name = name;
    setUsers(newUser);
  }
  function addUser() {
    const newUser = {
      id: crypto.randomUUID(),
      name: "Jack",
      address: "Titanic",
    };
    setUsers([...users, newUser]);
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
      <button className="cursor-pointer" onClick={addUser}>
        Add
      </button>
    </div>
  );
};

export default UserList;
