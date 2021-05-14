import React from "react";
import TodoList from "./components/todoList";
import TodoHeader from "./components/todoHeader";
import useStyles from "./styles/styles";

export default function TodoIndex() {
  const classes = useStyles();

  return (
    <div className={`${classes.root}`}>
      <TodoHeader></TodoHeader>
      <hr></hr>
      <TodoList></TodoList>
    </div>
  );
}
