import classes from "./fadeIn.module.css";

const FadeInMain = (props) => {
  return (
    <main style={props.style || {}} className={classes.fade}>
      {props.children}
    </main>
  );
};

export default FadeInMain;
