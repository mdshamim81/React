// const App = () => {
//   let n = 12; //number
//   let s ="Hello World";//string
//   let b=true;//boolean
//   let nu=null;//null
//   let un=undefined;//undefined
//   let arr=[<h1>Hey</h1>,12,"hello",true,null,undefined,"hii"]
//   let obj={Name: "shamim",age: 23}

//   return (
//     <div >
//       <h1>Datatypes</h1>
//       <h2>Number: {n}</h2>
//       <h2>String: {s}</h2>
//       <h2>Boolean: {b}</h2>
//       <h2>Null: {nu}</h2>
//       <h2>Undefined: {un}</h2>
//       <h2>Array: {arr}</h2>
//       <h2>
//         Object: {obj.Name} | {obj.age}
//       </h2>

//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const profile = [
//     { Name: "shamim", age: 22 },
//     { Name: "maksud", age: 54 },
//     { Name: "Harsh", age: 25 },
//   ];

//   const updatedProfiles=profile.map((profile, index) => {
//     return (
//       <li key={index}>
//         <span>Name: {profile.Name}</span> |
//         <small>Age: {profile.age}</small>
//       </li>
//     );
//   });

//   return (
//     <div>
//       <h1>Readering json</h1>
//       <ol>{updatedProfiles}</ol>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {
  // let username="Sarthak";//useStete ke liye es variable ki need nhi hain
  const [username, setUsername] = useState("Sarthak");

  const changehandler = () => {
    setUsername("Shamim");
  };
  console.log(username);
  return (
    <div>
      <h1>Username</h1>
      <h2>{username}</h2>
      <button onClick={changehandler}>Change Name</button>
    </div>
  );
};

export default App;
