import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import textInput from '../text-input/textInput.module.css';
import ValidationError from '../validation-error/ValidationError';

const PasswordInput = ({
  id,
  inputName,
  label,
  defaultValues,
  maxLength,
  validation,
}) => {
  const {
    register,
    getFieldState,
    trigger,
    formState: { errors },
  } = useFormContext({ defaultValues });
  const { ref } = register(inputName);
  const { invalid } = getFieldState(inputName);
  const [wasVisited, setWasVisited] = useState(false);

  const handleKeyDown = (e) => {
    const { key, keyCode, which } = e;
    const KeyCode = keyCode || which;
    const allowedKeys = [8, 9, 12, 13, 16, 17, 18];
    const numericRegex = /^[0-9]$/;

    if (!numericRegex.test(key) && !allowedKeys.includes(KeyCode)) {
      e.preventDefault();
    }
  };

  if (wasVisited && !invalid) console.log('valid:', !invalid);

  return (
    <div className={textInput.container}>
      <label htmlFor={id}>
        {`${label}:`}
      </label>
      <input
        {...register(inputName, validation)}
        id={id}
        name={inputName}
        type="password"
        ref={ref}
        onKeyDown={handleKeyDown}
        onKeyUp={async () => {
          await trigger(inputName);
        }}
        onBlur={() => { setWasVisited(true); }}
        onSubmit={() => { setWasVisited(true); }}
        maxLength={maxLength}
        aria-invalid={wasVisited && invalid}
        autoComplete="off"
      />
      {wasVisited && (
        <ValidationError
          errorMessage={errors[inputName]?.message}
          isValid={!invalid}
        />
      )}
    </div>
  );
};

PasswordInput.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValues: PropTypes.object.isRequired,
  maxLength: PropTypes.number,
  validation: PropTypes.object.isRequired,
};

PasswordInput.defaultProps = {
  maxLength: 30,
};

export default PasswordInput;
