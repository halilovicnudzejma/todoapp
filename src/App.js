import './App.css';

import {useState, useEffect} from 'react';
import Todolist from './Todolist';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    if(!task.length) {
      return;
    }
    console.log(e);
    //OPTION A
    const todoCopy = [...todo];
    todoCopy.push(task);
    setTodo(todoCopy);

    //OPTION B
    // setTodo((previousState) => [...previousState, task]);

    setTask("");

  };

  useEffect(() => {
    if(!isFetching) {
      localStorage.setItem("todo", JSON.stringify(todo));
    }

  }, [todo]);


  useEffect(() => {
    const storageToDo = localStorage.getItem("todo");
    if(storageToDo){
      setTodo(JSON.parse(storageToDo));
    }
    setIsFetching(false);

  }, []);

  return (
    <div className="App">
      <h2>To Do App</h2>
      <form onSubmit={handleAddButtonClick}>
        <input placeholder="To Do..." onChange={(e) => setTask(e.target.value)} value={task} />
        <button type="submit" className="addButton">Add</button>
      </form>
      <Todolist todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
