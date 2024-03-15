import React from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput from '../../layout/text-input/TextInput';
import SelectInput from '../../layout/slect-input/SelectInput';
import {
  role,
  firstName,
  lastName,
  cellphone,
  email,
} from '../utils/validateAddStaff';

const PersonalInfo = () => {
  const { formState: { isValid } } = useFormContext();
  console.log('isValid', isValid);
  return (
    <fieldset>
      <legend>Info Personal</legend>
      <TextInput {...firstName} />
      <TextInput {...lastName} />
      <TextInput {...cellphone} />
      <TextInput {...email} />
      <SelectInput {...role} />
      <button style={{ width: 'fit-content' }} type="submit">next</button>
    </fieldset>
  );
};

export default PersonalInfo;
