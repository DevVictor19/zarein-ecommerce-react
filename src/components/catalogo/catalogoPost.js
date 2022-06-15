import classes from "./catalogoPost.module.css";

const CatalogoPost = (props) => {
  const { post } = props;

  console.log(props.post);
  return (
    <div className={classes.post}>
      <img src={post.post_img} alt={post.post_title} />
      <div className={classes.text}>
        <h1>{post.post_title}</h1>
        {post.post_paragraphs.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </div>
    </div>
  );
};

export default CatalogoPost;
