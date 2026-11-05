import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Shamim", age: 22 },
    { name: "Wasim", age: 20 },
    { name: "Ahamd", age: 12 },
  ]);

  const rederuser = users.map((user, index) => {
    return <li key={index}> {user.name}</li>;
  });
  const [FullName, setFullName] = useState("");
  const [Age, setAge] = useState(18);

  const submithandler =(e)=>{
    e.preventDefault()
    const newuser={FullName,Age};
    console.log(newuser);//api-backend- database 
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submithandler}>
        <input 
          onChange={(e)=> setFullName(e.target.value)}
          value={FullName}
          type='text' 
          placeholder='Full Name' 
        />


        <input 
        onChange={(e)=> setAge(e.target.value)}
        value={Age}
        type='number' 
        placeholder='Age' 
        />
        <button>Submit</button>
      </form>
      <hr />
      <h1>User Data</h1>
      <ol>{rederuser}</ol>
    </div>
  );
};

export default App;
