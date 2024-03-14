import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import textInput from './textInput.module.css';
import ValidationError from '../validation-error/ValidationError';

const TextInput = ({
  id,
  name,
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
      [name]: '',
    },
  });
  const { ref } = register(name);
  const { invalid } = getFieldState(name);
  const [wasVisited, setWasVisited] = useState(false);

  return (
    <div className={textInput.container}>
      <label htmlFor={id}>
        {`${label}:`}
      </label>
      <span>
        <input
          {...register(name, validation)}
          id={id}
          name={name}
          type={type}
          ref={ref}
          onBlur={() => { setWasVisited(true); }}
          onKeyUp={async () => {
            await trigger(name);
          }}
          aria-invalid={wasVisited && invalid}
        />
        {wasVisited && (
          <ValidationError
            errorMessage={errors[name]?.message}
            isValid={!invalid}
          />
        )}
      </span>
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validation: PropTypes.object.isRequired,
};

export default TextInput;
