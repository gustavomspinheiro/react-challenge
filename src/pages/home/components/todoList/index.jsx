import React, { useContext } from 'react';
import { TodoContext } from '../../../../contexts/todo.context';
import Todo from "../todoItem"
import useStyles from "../../styles/styles";

export default function TodoList() {
    const todoContext = useContext(TodoContext);
    const classess = useStyles();
    return (<div>
        {todoContext.todos.map((todo) => (
            <Todo
                key={todo.id}
                id={todo.id}
                description={todo.description}
                done={todo.done}
            ></Todo>
        ))}
    </div >)
}