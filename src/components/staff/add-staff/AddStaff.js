import { useForm, FormProvider } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import addStaff from './addStaff.module.css';
import FullName from './FullName';

const AddStaff = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log('addStaff', data);

  return (
    <section className={addStaff.container}>
      <h2>Agregar Staff</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <FullName />
        </form>
        <DevTool control={methods.control} />
      </FormProvider>
    </section>
  );
};

export default AddStaff;
