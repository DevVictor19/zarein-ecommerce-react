import { getPosts } from "../data/catalogo_posts";
import CatalogoPost from "../components/catalogo/catalogoPost";
import FadeIn from "../components/UI/fadeIn";

const Catalogo = () => {
  const posts = getPosts();

  return (
    <FadeIn>
      <main style={{ padding: "88px 64px" }}>
        {posts.map((post) => (
          <CatalogoPost key={post.post_id} post={post} />
        ))}
      </main>
    </FadeIn>
  );
};

export default Catalogo;
