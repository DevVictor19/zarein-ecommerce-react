import SacolaMenu from "../components/sacola/sacolaMenu";
import SacolaContent from "../components/sacola/sacolaContent";
import FadeInMain from "../components/UI/fadeInMain";

const Sacola = () => {
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
