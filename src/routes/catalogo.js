import { getPosts } from "../data/catalogo_posts";
import CatalogoPost from "../components/catalogo/catalogoPost";
import FadeInMain from "../components/UI/fadeInMain";

const Catalogo = () => {
  const posts = getPosts();

  return (
    <FadeInMain style={{ padding: "88px 64px" }}>
      {posts.map((post) => (
        <CatalogoPost key={post.post_id} post={post} />
      ))}
    </FadeInMain>
  );
};

export default Catalogo;
