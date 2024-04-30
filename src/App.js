import React, { useState } from "react";
import NewUser from "./components/userData/NewUser";
import UserList from "./components/userInterface/UserList";

function App() {
  const [userList, setUsersList] = useState([])

  const addUserHandler = (user) => {
    setUsersList((prevState) => {
      return [...prevState, user]
    })
  }

  return (
    <div>
      <NewUser onAddUser={addUserHandler}/>
      <UserList users = {userList}/>
    </div>
  );
}

export default App;
