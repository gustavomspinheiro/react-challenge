import React, { useState, useContext, useMemo } from 'react';
import { TodoContext } from '../../../../contexts/todo.context';
import useStyles from '../../styles/styles';

export default function TodoHeader() {

    const classess = useStyles();
    const todoContext = useContext(TodoContext);
    const [todo, setTodo] = useState(() => "");

    const handleAddTodo = (e) => {
        e.preventDefault()
        todoContext.dispatch({ type: 'add', payload: todo });
        let textInput = document.getElementById("input_add_item");
        textInput.value = '';
    }

    return (
        <div>
            <p>Lista de Atividades</p>
            <div >
                <input id="input_add_item" type="text" onChange={(e) => { setTodo(e.target.value) }} placeholder="digite para filtrar"></input>
                <button type="button" className={classess.addTodoButton} onClick={(e) => handleAddTodo(e)}>Adicionar</button>
            </div>
        </div>
    )
}