import { useState } from "react";

const Create = (props) => {
  console.log(props);
  const [FullName, setFullName] = useState("");
  const [Age, setAge] = useState('');

  const submithandler = (e) => {
    e.preventDefault();
    const newuser = { FullName, Age };
    console.log(newuser); //api-backend- database
    //set the user in the setusers
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submithandler}>
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={FullName}
          type='text'
          placeholder='Full Name'
        />

        <input
          onChange={(e) => setAge(e.target.value)}
          value={Age}
          type='number'
          placeholder='Age'
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
