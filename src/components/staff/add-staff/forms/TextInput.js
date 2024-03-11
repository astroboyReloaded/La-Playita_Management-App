import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const TextInput = ({
  id,
  name,
  label,
  type,
  placeholder,
  validation,
}) => {
  const {
    register,
    watch,
  } = useFormContext();
  console.log(watch());
  return (
    <label htmlFor={id}>
      {`${label}: `}
      <input
        {...register(name, validation)}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  validation: PropTypes.object.isRequired,
};

export default TextInput;
