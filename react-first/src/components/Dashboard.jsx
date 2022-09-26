import { useState } from "react";

function Dashboard() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const item = e.target.todo.value;
    if (item) {
      let id;
      if (todos.length === 0) {
        id = 0;
      } else {
        let tmp = todos.pop();
        id = tmp.id + 1;
        todos.push(tmp);
      }
      setTodos([...todos, { item, id }]);
    }
  }

  function handleDelete(index) {
    setTodos(todos.filter((el, i) => i !== index));
  }

  return (
    <div className="todos">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" />
        <button type="submit">submit</button>
      </form>
      <ul>
        {todos.map((el, index) => (
          <li key={el.id}>
            {el.item}
            <button
              style={{ margin: "5px" }}
              onClick={() => handleDelete(index)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
