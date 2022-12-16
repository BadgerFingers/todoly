import { useState, useEffect } from "react";
import Nav from "../Components/Nav/Nav";
import Auth from "../Components/Auth/Auth";

export default function Root() {
  const token = localStorage.getItem("token");

  const [todoEntry, setTodoEntry] = useState();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (item) => {
    setTodos([...todos, item]);
    document.getElementById("todo-input").value = "";
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const filterTodos = (filter) => {
    setFilter(filter);
    console.log(filter);
  };

  useEffect(() => {
    console.log("todos changed");
  }, [todos]);

  return (
    <>
      {!token ? (
        <Auth />
      ) : (
        <div className="flex flex-col md:h-screen md:flex-row">
          <Nav />

          <div id="dash-container">
            <div className="flex flex-col w-full md:w-[40vw] max-w-[600px]">
              <h1 className="text-2xl text-white font-bold">My Todo List:</h1>
              <p className="text-right mb-4 text-white font-bold">
                <span className="text-gray-300 font-normal">Total: </span>
                {todos.length}
              </p>
              <input
                id="todo-input"
                type="text"
                onInput={(e) => setTodoEntry(e.target.value)}
                placeholder="Add a task..."
              />
              <button
                className="btn btn-info mt-4"
                onClick={() => addTodo({ title: todoEntry, completed: false })}
              >
                Add Todo
              </button>
            </div>

            <div className="mt-10">
              {
              todos.length > 0 &&
              <div className="flex flex-row w-full justify-between md:w-[40vw] max-w-[600px]">
                <div>Filter by:</div>
                <div>
                  <span
                    onClick={() => filterTodos("all")}
                    className="cursor-pointer text-white transition-colors hover:text-yellow-400"
                  >
                    All
                  </span>
                  ,{" "}
                  <span
                    onClick={() => filterTodos("complete")}
                    className="cursor-pointer text-white transition-colors hover:text-yellow-400"
                  >
                    Completed
                  </span>
                  ,{" "}
                  <span
                    onClick={() => filterTodos("incomplete")}
                    className="cursor-pointer text-white transition-colors hover:text-yellow-400"
                  >
                    Incomplete
                  </span>
                </div>
              </div>
              }

              <div className={todos.length < 0 && "p-3 rounded-md bg-slate-500 mt-5"}>
              {todos.map((todo, index) => (
                <div
                  key={index}
                  className={
                    (filter === "all") && (todo.completed || !todo.completed) ? "flex flex-row justify-between items-center w-full md:w-[40vw] max-w-[600px] border-t-[1px] px-3 mt-2"
                    :(filter === "complete") && (todo.completed) ? "flex flex-row justify-between items-center w-full md:w-[40vw] max-w-[600px] border-t-[1px] px-3 mt-2"
                    :(filter === "incomplete") && (!todo.completed) ? "flex flex-row justify-between items-center w-full md:w-[40vw] max-w-[600px] border-t-[1px] px-3 mt-2"
                  : "hidden"}
                  id={todo.completed ? "completed" : "not-completed"}
                >
                  {index + 1 + ") "}
                  {todo.title}
                  {!todo.completed && (
                    <span
                      className="btn btn-success"
                      onClick={() => completeTodo(index)}
                    >
                      Complete
                    </span>
                  )}
                </div>
              ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
