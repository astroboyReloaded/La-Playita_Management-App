import React from 'react';
import TextInput from './TextInput';
import { firstName, lastName } from '../utils/validateAddStaff';

const FullName = () => (
  <fieldset id="fullName">
    <legend>Nombre y Rol</legend>
    <TextInput {...firstName} />
    <TextInput {...lastName} />
    <button style={{ width: 'fit-content' }} type="submit">next</button>
  </fieldset>
);

export default FullName;
