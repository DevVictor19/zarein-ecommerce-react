import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux/es/exports";
import { showNotification, hideNotification } from "../../store/actions";

import classes from "./contatoForm.module.css";

const fieldIsNotEmpty = (value) => {
  return value.trim() !== "";
};

const messageIsBigEnough = (message) => {
  return message.trim().length > 20;
};

const ContatoForm = () => {
  const dispatch = useDispatch();

  const {
    inputValue: nameInputValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    onChangeHandler: nameOnChangeHandler,
    onBlurHandler: nameOnBlurHandler,
    reset: resetNameInput,
  } = useForm(fieldIsNotEmpty);

  const {
    inputValue: emailInputValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    onChangeHandler: emailOnChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    reset: resetEmailInput,
  } = useForm(fieldIsNotEmpty);

  const {
    inputValue: subjectInputValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    onChangeHandler: subjectOnChangeHandler,
    onBlurHandler: subjectOnBlurHandler,
    reset: resetSubjectInput,
  } = useForm(fieldIsNotEmpty);

  const {
    inputValue: messageInputValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    onChangeHandler: messageOnChangeHandler,
    onBlurHandler: messageOnBlurHandler,
    reset: resetMessageInput,
  } = useForm(messageIsBigEnough);

  const inputsErrorMessage = "não pode ficar vázio!";
  const textareaErrorMessage = "está muito curta! (min: 20 caracteres)";

  const formIsValid =
    nameIsValid && emailIsValid && subjectIsValid && messageIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      dispatch(
        showNotification({
          title: "Campos Inválidos",
          message:
            "Tenha certeza de inserir todos o valores corretamente no formulário",
        })
      );
      setTimeout(() => {
        dispatch(hideNotification());
      }, 5000);
      return;
    }

    dispatch(
      showNotification({
        title: "Mensagem Enviada!",
        message: "Aguarde o nosso feedback pelo e-mail",
      })
    );
    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);

    const formMessageData = {
      name: nameInputValue,
      email: emailInputValue,
      subject: subjectInputValue,
      message: messageInputValue,
    };

    console.log(formMessageData);

    resetNameInput();
    resetEmailInput();
    resetSubjectInput();
    resetMessageInput();
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="name">
        Nome {nameHasError ? inputsErrorMessage : "*"}
      </label>
      <input
        type="text"
        value={nameInputValue}
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
        value={emailInputValue}
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
        value={subjectInputValue}
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
        value={messageInputValue}
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
