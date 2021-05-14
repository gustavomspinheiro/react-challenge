import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 10,
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: "bold",
  },

  marginRight: {
    marginRight: "5px"
  },
  
  oddItems: {
    background: "#c1c1c1",
  },
  greenColor: {
    color: "green",
  },

  redColor: {
    color: "red",
  },

  noDisplay: {
    display: "none",
  },

  addTodoButton: {
    background: "#6aeda7",
    borderRadius: "15px 15px 15px 15px",
    marginLeft: "5px"
  },

  toDoItem: {
    margin: "15px 0",
    "&:hover": {
      cursor: "pointer",
      color: "#374fb2",
      fontWeight: "bold",
    },
  },
});

export default useStyles;
