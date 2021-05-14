export default function reducer(state, action) {
  const addTodo = (todo) => {
    let todoItem = { id: Date.now(), description: todo, done: false };
    return [...state, todoItem];
  };

  const updateTodo = (_id) => {
    let updatedState = [];
    state.forEach((todo) => {
      if (todo.id == _id) {
        let updatedTodo = {
          ...todo,
          done: !todo.done,
        };
        updatedState.push(updatedTodo);
      } else {
        updatedState.push(todo);
      }
    });
    return updatedState;
  };

  const deleteTodo = (_id) => {
    let updatedState = [];
    state.forEach((todo) => {
      if (todo.id !== _id) {
        updatedState.push(todo);
      }
    });
    return updatedState;
  };

  switch (action.type) {
    case "add":
      return addTodo(action.payload);
    case "update":
      return updateTodo(action.payload);
    case "remove":
      return deleteTodo(action.payload);
    default:
      return null;
  }
}
