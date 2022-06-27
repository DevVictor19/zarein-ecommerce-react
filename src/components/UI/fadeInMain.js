import classes from "./fadeInMain.module.css";

const FadeInMain = (props) => {
  return (
    <main style={props.style || {}} className={classes.fade}>
      {props.children}
    </main>
  );
};

export default FadeInMain;
