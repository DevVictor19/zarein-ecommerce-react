import SacolaMenu from "../components/sacola/sacolaMenu";
import SacolaContent from "../components/sacola/sacolaContent";
import FadeInMain from "../components/UI/fadeInMain";

const Sacola = () => {
  // style={{ padding: "88px 64px" }}

  return (
    <>
      <SacolaMenu />
      <FadeInMain>
        <SacolaContent />
      </FadeInMain>
    </>
  );
};

export default Sacola;
