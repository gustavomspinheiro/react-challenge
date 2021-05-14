import React, {
  createContext,
  useMemo,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import repository from "../data/repository";
import TodoReducer from "../contexts/todo.reducer";

export const TodoContext = createContext();

export default function TodoProvider(props) {
  const data = useMemo(() => repository(), []);
  const list = useCallback(() => {
    let items = data.getItemParse("todos");
    if (!items) return [];
    return items;
  }, [data]);

  const [todos, dispatch] = useReducer(TodoReducer, list());

  useEffect(() => {
    data.setItemStringify("todos", todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
