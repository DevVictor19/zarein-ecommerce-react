import SacolaMenu from "../components/sacola/sacolaMenu";
import SacolaContent from "../components/sacola/sacolaContent";
import FadeInMain from "../components/UI/fadeInMain";

const Sacola = () => {
  return (
    <>
      <SacolaMenu />
      <FadeInMain style={{ padding: "88px 64px" }}>
        <SacolaContent />
      </FadeInMain>
    </>
  );
};

export default Sacola;
