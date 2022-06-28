import { getPosts } from "../data/catalogo_posts";
import CatalogoPost from "../components/catalogo/catalogoPost";
import FadeInMain from "../components/UI/fadeInMain";

const Catalogo = () => {
  const posts = getPosts();

  return (
    <FadeInMain>
      {posts.map((post) => (
        <CatalogoPost
          key={post.post_id}
          img={post.post_img}
          title={post.post_title}
          paragraphs={post.post_paragraphs}
        />
      ))}
    </FadeInMain>
  );
};

export default Catalogo;
