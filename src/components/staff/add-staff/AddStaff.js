import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addStaff } from '../../../slices/staffSlice';
import aScss from './addStaff.module.css';
import SelectInput from '../../layout/slect-input/SelectInput';
import { role } from '../utils/validateAddStaff';
import PersonalInfo from './PersonalInfo';
import UserPassword from './UserPassword';
import SubmitButton from '../../layout/submit-button/SubmitButton';

const AddStaff = () => {
  const methods = useForm({
    defaultValues: {
      role: 'Selecciona uno',
      first: '',
      last: '',
      phone: '',
      email: '',
      staffName: '',
      password: '',
      confirmPassword: '',
    },
  });
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
      </FormProvider>
    </section>
  );
};

export default AddStaff;
