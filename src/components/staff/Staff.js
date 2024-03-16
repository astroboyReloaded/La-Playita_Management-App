import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStaff } from '../../slices/staffSlice';
import AddStaff from './add-staff/AddStaff';
import staffCSS from './staff.module.css';

const Staff = () => {
  const staff = useSelector((state) => state.staff);
  const dispatch = useDispatch();
  console.log('Staff', staff);

  useEffect(() => {
    dispatch(fetchStaff());
  }, []);
  return (
    <main className={staffCSS.container}>
      <h1>Staff</h1>
      <AddStaff />
    </main>
  );
};

export default Staff;
