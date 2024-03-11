const DB_NAME = 'staffDB';
const DB_VERSION = 1;
const staff = 'staff';
let DB;

const initStaffDB = () => new Promise((res, rej) => {
  const req = window.indexedDB.open(DB_NAME, DB_VERSION);
  req.onerror = (e) => {
    console.log(`Error initiating ${DB_NAME}`, e.target.error);
    rej(e.target.errorCode);
  };
  req.onsuccess = (e) => {
    DB = e.target.result;
    res(DB);
  };
  req.onupgradeneeded = (e) => {
    DB = e.target.result;
    const store = DB.createObjectStore(staff, { keyPath: 'id' });
    store.createIndex('name', 'name', { unique: false });
    store.createIndex('role', 'role', { unique: false });
  };
});

function newPromise(req) {
  return new Promise((res, rej) => {
    req.onsuccess = (e) => res(e.target.result);
    req.onerror = (e) => rej(e.target.error);
  });
}

export const getAllStaff = async () => {
  await initStaffDB();
  try {
    const tx = DB.transaction(staff)
      .objectStore(staff)
      .getAll();
    return newPromise(tx);
  } catch (err) {
    return err;
  }
};

export const addStaff = async (member) => {
  await initStaffDB();
  try {
    const tx = DB.transaction(staff, 'readwrite')
      .objectStore(staff)
      .add(member);
    return newPromise(tx);
  } catch (err) {
    return err;
  }
};

export const getStaff = async (id) => {
  await initStaffDB();
  try {
    const tx = DB.transaction(staff)
      .objectStore(staff)
      .get(id);
    return newPromise(tx);
  } catch (err) {
    return err;
  }
};
