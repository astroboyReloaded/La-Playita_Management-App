import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import textInput from './textInput.module.css';
import ValidationError from '../validation-error/ValidationError';

const TextInput = ({
  id,
  inputName,
  label,
  type,
  validation,
}) => {
  const {
    register,
    trigger,
    getFieldState,
    formState: { errors },
  } = useFormContext({
    defaultValues: {
      [inputName]: '',
    },
  });
  const { ref } = register(inputName);
  const { invalid } = getFieldState(inputName);
  const [wasVisited, setWasVisited] = useState(false);

  return (
    <div className={textInput.container}>
      <label htmlFor={id}>
        {`${label}:`}
      </label>
      <span>
        <input
          {...register(inputName, validation)}
          id={id}
          name={inputName}
          type={type}
          ref={ref}
          onBlur={() => { setWasVisited(true); }}
          onKeyUp={async () => {
            await trigger(inputName);
          }}
          aria-invalid={wasVisited && invalid}
        />
        {wasVisited && (
          <ValidationError
            errorMessage={errors[inputName]?.message}
            isValid={!invalid}
          />
        )}
      </span>
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validation: PropTypes.object.isRequired,
};

export default TextInput;
