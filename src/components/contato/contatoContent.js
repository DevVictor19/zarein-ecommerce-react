import ContatoForm from "./contatoForm";
import classes from "./contatoContent.module.css";

const ContatoContent = () => {
  return (
    <section className={classes.contato}>
      <ContatoForm />
      <div className={classes.contatoTexts}>
        <h1>Entre em Contato</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
          finibus massa, ut iaculis arcu. Fusce maximus, arcu quis finibus
          sollicitudin, nulla turpis cursus ligula, id
        </p>
        <p>
          hendrerit sevm lectus in ipsum. Nulla varius nisl luctus mauris
          interdum, in ornare lectus maximus. Nunc placerat libero felis, a
          volutpat tellus tincidunt id. Proin interdum ornare diam vel feugiat.
          Integer ut vehicula turpis. In at tristique ligula.
        </p>
        <p>
          hendrerit sevm lectus in ipsum. Nulla varius nisl luctus mauris
          interdum, in ornare lectus maximus. Nunc placerat libero felis, a
          volutpat tellus tincidunt id. Proin interdum ornare diam vel feugiat.
          Integer ut vehicula turpis. In at tristique ligula.
        </p>
      </div>
    </section>
  );
};

export default ContatoContent;
