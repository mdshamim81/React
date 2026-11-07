import { useState } from "react"

const App = () => {
  const [todos,settodo] = useState([
    {id:1, title:"kam krle bhai",isCompleted:false}
  ])
  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input type="text" placeholder="title"/>
        <input type="checkbox" /> completed
      </form>
    </div>
  )
}

export default App