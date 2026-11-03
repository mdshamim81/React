// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
//function call is replaced by it's return value
//a function component will always retun HTML
//we can not write anything after return
//we can only return single data/entity/variable/value
//there must be single return in a function and that must be the last statement

const App = () => {
  //js logic..
  //non-parameterized function
  const handleclick = (e) => {
    alert("Button Clicked!");
  };

  const handleparamclick = (msg) => {
    alert(msg);
  };
  // const wrapperhandler = () => handleparamclick("bhuj gye diye!");

  return (
    <>
      <h1>{2 + 3}</h1>
      <div>App</div>
      <div>Hello</div>
      <button onClick={handleclick}>Click</button>
      <button onClick={() => handleparamclick("bhuj gye diye!")}>
        Click (parameter)
      </button>
    </>
  );
};

export default App;

