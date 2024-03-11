import AddStaff from './add-staff/forms/AddStaff';
import staff from './staff.module.css';

const Staff = () => {
  console.log('Staff');
  return (
    <main className={staff.container}>
      <h1>Staff</h1>
      <AddStaff />
    </main>
  );
};

export default Staff;
