import { useState } from "react";

const useForm = (validationFn) => {
  const [inputValue, setInputValue] = useState("");
  const [wasTouched, setWasTouched] = useState(false);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = () => {
    setWasTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setWasTouched(false);
  };

  const validation = validationFn(inputValue);
  const hasError = !validation && wasTouched;
  const isValid = validation && !hasError;

  return {
    inputValue,
    isValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useForm;
