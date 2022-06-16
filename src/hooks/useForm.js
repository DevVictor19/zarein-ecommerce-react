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

  const isValid = validationFn(inputValue);
  const hasError = !isValid && wasTouched;

  return {
    inputValue,
    hasError,
    onChangeHandler,
    onBlurHandler,
  };
};

export default useForm;
