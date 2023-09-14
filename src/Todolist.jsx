import Todoitem from "./Todoitem";

const Todolist = ({todo, setTodo}) => {
    return (
        <div className="myList">
            {todo.map((value, index) => <Todoitem item={value} key={index} index={index} setTodo={setTodo} />)}
        </div>
    )
};

export default Todolist;