import SobreContent from "../components/sobre/sobreContent";
import FadeIn from "../components/UI/fadeIn";

const Sobre = () => {
  return (
    <FadeIn>
      <main style={{ padding: "88px 64px" }}>
        <SobreContent />
      </main>
    </FadeIn>
  );
};

export default Sobre;
