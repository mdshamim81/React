// import { useState } from "react";

// const App = () => {
//   const [todos, settodo] = useState([
//     { id: 1, title: "kam krle bhai", isCompleted: false },
//   ]);

//   const [title, settitle] = useState("");
//   const [completed, setcompleted] = useState(false)
//   const [gender, setgender] = useState("male")
//   const [city, setcity] = useState("kolkata")

//   return (
//     <div>
//       <h1>Create Task</h1>
//       <form>
//         <input
//           onChange={(e) => settitle(e.target.value)}
//           value={title}
//           type='text'
//           placeholder='title'
//         />
//         <br />
//         <br />
//         <input
//           checked={completed}
//           onChange={(e) => setcompleted(e.target.checked)}
//           type='checkbox'
//         />
//         completed
//         <br />
//         <br />
//         <input
//         value="male"
//         onChange={(e) => setgender(e.target.value)}
//         checked={gender=="male" && true}
//         type='radio' />
//         male
//         <input
//         value="female"
//         onChange={(e) =>setgender(e.target.value)}
//         checked={gender=="female" && true}
//         type='radio' />
//         Female
//         <br />
//         <br />
//         <select value={city} onChange={(e)=>setcity(e.target.value)}>
//           <option value="delhi">Delhi</option>
//           <option value="mumbai">Mumbai</option>
//           <option value="kolkata">Kolkata</option>
//         </select>
//         <button>Create Todo</button>
//       </form>
//     </div>
//   );
// };

//

import { useState } from "react";

const App = () => {
  const [todos, settodo] = useState([
    { id: 1, title: "kam krle bhai", isCompleted: false },
  ]);

  const [title, settitle] = useState("");

  const Submithandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: title,
      isCompleted: false,
    };
    console.log(newtodo);
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={Submithandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type='text'
          placeholder='title'
        />
        <br />
        <br />

        <button>Create Todo</button>
      </form>
    </div>
  );
};
export default App;
