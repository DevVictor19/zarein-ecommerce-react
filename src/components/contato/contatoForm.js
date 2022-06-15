import classes from "./contatoForm.module.css";

const ContatoForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="name">Nome *</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email *</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="subect">Assunto *</label>
      <input type="text" id="subject" name="subject" />
      <label htmlFor="textarea">Mensagem *</label>
      <textarea id="textarea" name="message" rows={4} cols={50}></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContatoForm;
