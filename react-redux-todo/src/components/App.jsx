import { connect } from "react-redux";

function App(props) {
  function handleChange(event) {
    if (event.keyCode === 13 && event.target.value) {
      props.dispatch({ type: "add", todo: event.target.value });
      event.target.value = "";
    }
  }

  function toggleComplete(event, i) {
    console.dir(event);
    props.dispatch({
      type: "toggleComplete",
      index: i,
      isChecked: event.target.checked,
    });
  }

  function handleDelete(event, i) {
    props.dispatch({
      type: "delete",
      index: i,
    });
  }

  return (
    <div className="container">
      <h1>Todo App Using Redux</h1>
      <input
        type="text"
        placeholder="Enter Your Todo"
        onKeyUp={handleChange}
        className="main"
      />
      <ul>
        {props.state &&
          props.state.map((todo, i) => (
            <li key={i} className="flex a-center">
              <div className="flex">
                <input
                  type="checkbox"
                  checked={todo.isCompleted ? true : false}
                  onClick={(event) => toggleComplete(event, i)}
                />
                <h2>{todo.payload}</h2>
              </div>
              <span
                className="pointer"
                onClick={(event) => handleDelete(event, i)}
              >
                ❌
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

function getState(state) {
  return {
    state: [...state],
  };
}

export default connect(getState)(App);
