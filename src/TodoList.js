import React, { useState } from "react";

const TodoList = props =>{

    const [todolist, setTodoList]=useState([
        // {title: "first Task", content:"kenedy is the first task",complete:false},
        // {title: "Second Task", content:"James is the second task",complete:true},
        // {title: "Third Task", content:"Jason is the third task",complete:false},
    ]);
    const unfinish = e =>{
        let alter= [...todolist];
        alter[e.target.value].complete = true;
        setTodoList(alter);
    }
    const deleteTask = e => {
        let Tasky = [...todolist];
        Tasky.splice(e.value , 1 )
        setTodoList(Tasky)
    }

    const finish = e => {
        let alter = [e.target.value, 1 ];
        setTodoList(alter);
    }
    const [ formState, setFormState] = useState({
        title: "",
        content: ""
    })
    const onChangeHandler = e => {
        setFormState({
            ...formState, [e.target.name] : e.target.value
        });
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        let title = formState.title;
        let content = formState.content;
        let completed = false;
        let newBox = { title, content, completed };
        setTodoList([...todolist, newBox]);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Task Name:</label>
                <input type="text" name="title" onChange={onChangeHandler}/>
                <br/>
                <label>Description:</label>
                <input type="text" name="content" onChange={onChangeHandler}/>
                <br/>
                <input type="submit" />
            </form>
            {todolist.map((item, i) =>
                <div>
                    {item.completed === true ? <p style={{textDecoration:"line-through"}}>{item.title}</p>:<p>{item.title}</p>}
                    {item.completed === true ? <p style={{textDecoration:"line-through"}}>{item.content}</p>:<p>{item.content}</p>}
                    {item.completed ? <button onClick={unfinish} value={i}>Not Done</button>: <button onClick={finish} value={i}>Done</button>}
                    <button onClick={deleteTask} value={i}>Delete</button>
                </div>
            )}
        </div>

    )

}
export default TodoList;