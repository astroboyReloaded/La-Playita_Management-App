// import { useForm } from 'react-hook-form';
import TextInput from './TextInput';
import { firstName, lastName } from './utils/validateAddStaff';

const FullName = () => {
  // const { formState } = useForm();
  console.log('full name');
  return (
    <fieldset id="fullName">
      <legend>Nombre Completo</legend>
      <TextInput {...firstName} />
      <TextInput {...lastName} />
    </fieldset>
  );
};

export default FullName;
