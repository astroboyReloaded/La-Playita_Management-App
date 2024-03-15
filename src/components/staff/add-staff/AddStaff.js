import { useForm, FormProvider } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import addStaff from './addStaff.module.css';
import PersonalInfo from './PersonalInfo';
import UserPassword from './UserPassword';

const AddStaff = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log('addStaff', data);

  return (
    <section className={addStaff.container}>
      <h2>Agregar Staff</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <PersonalInfo />
          <UserPassword />
        </form>
        <DevTool control={methods.control} />
      </FormProvider>
    </section>
  );
};

export default AddStaff;
