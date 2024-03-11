import { useForm, FormProvider } from 'react-hook-form';
import addStaff from './addStaff.module.css';
import FullName from './FullName';

const AddStaff = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className={addStaff.container}>
      <h2>Agregar Staff</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FullName />
        </form>
      </FormProvider>
    </section>
  );
};

export default AddStaff;
