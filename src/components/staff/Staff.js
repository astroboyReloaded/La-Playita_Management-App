import AddStaff from './add-staff/AddStaff';
import staffCSS from './staff.module.css';

const Staff = () => (
  <main className={staffCSS.container}>
    <h1>Staff</h1>
    <AddStaff />
  </main>
);

export default Staff;
