const Read = (props) => {
  const users = props.users;
  // const setusers = props.setusers;

  console.log(props);

  const rederuser = users.map((user, index) => {
    return <li key={index}> {user.name}</li>;
  });

  return (
    <div>
      <h1>User Data</h1>
      <ol>{rederuser}</ol>
    </div>
  );
};

export default Read;
