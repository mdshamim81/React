import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setusers] = useState([
    { name: "Shamim", age: 22 },
    { name: "Wasim", age: 20 },
    { name: "Ahamd", age: 12 },
  ]);

  return (
    <div>
      <Create />
      <Read users={users} setusers={setusers} />
      {/*read(users,setusers)  */}
    </div>
  );
};

export default App;
