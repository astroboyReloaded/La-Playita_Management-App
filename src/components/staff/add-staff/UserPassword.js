import { useFormContext } from 'react-hook-form';
import TextInput from '../../layout/text-input/TextInput';
import { userName, userPassword, confirmPassword } from '../utils/validateAddStaff';

const UserPassword = () => {
  const { formState: { isValid } } = useFormContext();
  console.log('UserPassword', isValid);
  return (
    <fieldset>
      <legend>Usuario y Contraseña</legend>
      <TextInput {...userName} />
      <TextInput {...userPassword} />
      <TextInput {...confirmPassword} />
      <button style={{ width: 'fit-content' }} type="submit">next</button>
    </fieldset>
  );
};

export default UserPassword;
