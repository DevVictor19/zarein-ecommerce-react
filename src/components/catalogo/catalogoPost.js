import classes from "./catalogoPost.module.css";

const CatalogoPost = (props) => {
  return (
    <div className={classes.post}>
      <img src={props.img} alt={props.title} />
      <div className={classes.text}>
        <h1>{props.title}</h1>
        {props.paragraphs.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </div>
    </div>
  );
};

export default CatalogoPost;
