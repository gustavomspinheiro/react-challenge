import React, { useContext } from "react";
import { TodoContext } from "../../../../contexts/todo.context";
import useStyles from "../../styles/styles";
import { Button } from "@material-ui/core";

export default function Todo({ id, description, done }) {
  const classess = useStyles();
  const todoContext = useContext(TodoContext);

  const handleDoTodo = (e, _id) => {
    e.preventDefault();
    todoContext.dispatch({ type: "update", payload: _id });
    e.target.classList.add(classess.noDisplay);
  };

  const handleDeleteTodo = (e, _id) => {
    e.preventDefault();
    todoContext.dispatch({ type: "remove", payload: _id });
  };

  return (
    <article id={`container_${id}`}>
      <div className={`${id % 2 !== 0 ? classess.oddItems : ""} ${classess.toDoItem}`}>
        <div>
          {id} - {description}
        </div>
        <div>
          Feito?{" "}
          {done === true ? (
            <span className={classess.greenColor}>Sim</span>
          ) : (
            <span className={classess.redColor}>Não</span>
          )}
        </div>
      </div>
      <div>
        <button className={classess.marginRight} type="button" onClick={(e) => handleDoTodo(e, id)}>
          Ok
        </button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={(e) => handleDeleteTodo(e, id)}
        >
          Deletar
        </Button>
      </div>
    </article>
  );
}
