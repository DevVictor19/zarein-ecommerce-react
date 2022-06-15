import classes from "./fadeIn.module.css";

const FadeIn = (props) => {
  return <div className={classes.fade}>{props.children}</div>;
};

export default FadeIn;
