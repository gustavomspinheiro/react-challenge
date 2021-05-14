import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 10,
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: "bold",
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
    borderRadius: "15px 15px 15px 15px"
  }
});

export default useStyles;
