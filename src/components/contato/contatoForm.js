import useForm from "../../hooks/useForm";

import classes from "./contatoForm.module.css";

const fieldIsNotEmpty = (value) => {
  return value.trim() !== "";
};

const messageIsBigEnough = (message) => {
  return message.trim().length > 20;
};

const ContatoForm = () => {
  const {
    inputValue: nameInputValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    onChangeHandler: nameOnChangeHandler,
    onBlurHandler: nameOnBlurHandler,
  } = useForm(fieldIsNotEmpty);

  const {
    inputValue: emailInputValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    onChangeHandler: emailOnChangeHandler,
    onBlurHandler: emailOnBlurHandler,
  } = useForm(fieldIsNotEmpty);

  const {
    inputValue: subjectInputValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    onChangeHandler: subjectOnChangeHandler,
    onBlurHandler: subjectOnBlurHandler,
  } = useForm(fieldIsNotEmpty);

  const {
    inputValue: messageInputValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    onChangeHandler: messageOnChangeHandler,
    onBlurHandler: messageOnBlurHandler,
  } = useForm(messageIsBigEnough);

  const inputsErrorMessage = "não pode ficar vázio!";
  const textareaErrorMessage = "está muito curta! (min: 20 caracteres)";

  const formIsValid =
    nameIsValid && emailIsValid && subjectIsValid && messageIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      // disparar notificacao de error
      return;
    }
    // disparar notificacao de mensagem enviada

    const formMessageData = {
      name: nameInputValue,
      email: emailInputValue,
      subject: subjectInputValue,
      message: messageInputValue,
    };

    console.log(formMessageData);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="name">
        Nome {nameHasError ? inputsErrorMessage : "*"}
      </label>
      <input
        type="text"
        onChange={nameOnChangeHandler}
        onBlur={nameOnBlurHandler}
        className={nameHasError ? classes.error : ""}
        id="name"
        name="name"
      />
      <label htmlFor="email">
        Email {emailHasError ? inputsErrorMessage : "*"}
      </label>
      <input
        type="email"
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
        className={emailHasError ? classes.error : ""}
        id="email"
        name="email"
      />
      <label htmlFor="subect">
        Assunto {subjectHasError ? inputsErrorMessage : "*"}
      </label>
      <input
        type="text"
        onChange={subjectOnChangeHandler}
        onBlur={subjectOnBlurHandler}
        className={subjectHasError ? classes.error : ""}
        id="subject"
        name="subject"
      />
      <label htmlFor="textarea">
        Mensagem {messageHasError ? textareaErrorMessage : "*"}
      </label>
      <textarea
        onChange={messageOnChangeHandler}
        onBlur={messageOnBlurHandler}
        className={messageHasError ? classes.error : ""}
        id="textarea"
        name="message"
        rows={4}
        cols={50}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContatoForm;
