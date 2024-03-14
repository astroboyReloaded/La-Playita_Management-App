import React from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput from '../../layout/text-input/TextInput';
import SelectInput from '../../layout/slect-input/SelectInput';
import { firstName, lastName, role } from '../utils/validateAddStaff';

const FullName = () => {
  const { formState: { isValid } } = useFormContext();
  console.log('isValid', isValid);
  return (
    <fieldset id="fullName">
      <legend>Nombre y Rol</legend>
      <TextInput {...firstName} />
      <TextInput {...lastName} />
      <SelectInput {...role} />
      <button style={{ width: 'fit-content' }} type="submit">next</button>
    </fieldset>
  );
};

export default FullName;
