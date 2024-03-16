import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { DevTool } from '@hookform/devtools';
import { addStaff } from '../../../slices/staffSlice';
import aScss from './addStaff.module.css';
import SelectInput from '../../layout/slect-input/SelectInput';
import { role } from '../utils/validateAddStaff';
import PersonalInfo from './PersonalInfo';
import UserPassword from './UserPassword';
import SubmitButton from '../../layout/submit-button/SubmitButton';

const AddStaff = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addStaff(data));
  };

  return (
    <section className={aScss.container}>
      <h2>Agregar Staff</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <SelectInput {...role} />
          <PersonalInfo />
          <UserPassword />
          <SubmitButton value="Agregar Staff" />
        </form>
        <DevTool control={methods.control} />
      </FormProvider>
    </section>
  );
};

export default AddStaff;
