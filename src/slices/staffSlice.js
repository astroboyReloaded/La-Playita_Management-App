import { createSlice } from '@reduxjs/toolkit';
import { getAllStaff } from '../db/staffDBUtils';

const staffSlice = createSlice({
  name: 'servers',
  initialState: {
    servers: getAllStaff() || [],
  },
  reducers: {
    addNewServer: (state, { payload }) => {
      const newServer = {
        id: payload.id,
        name: payload.name,
        password: payload.password,
        roll: payload.roll,
      };
      state.servers.push(newServer);
      localStorage.setItem('servers', JSON.stringify(state.servers));
    },
    edditServer: (state, { payload }) => {
      state.servers = state.servers.map((server) => {
        if (server.id === payload.id) {
          return {
            ...server,
            ...payload,
          };
        }
        return server;
      });
      localStorage.setItem('servers', JSON.stringify(state.servers));
    },
    removeServer: (state, { payload }) => {
      state.servers = state.servers.map((server) => server.id !== payload.id);
      localStorage.setItem('servers', JSON.stringify(state.servers));
    },
    logIn: (state, { payload }) => {
      state.servers = state.servers.map((server) => {
        if (server.id === payload.id) {
          server.logs.push({
            login: Date.now(),
            logout: null,
          });
          return {
            ...server,
            isLogged: true,
            cashier: [],
          };
        }
        return server;
      });
      localStorage.setItem('servers', JSON.stringify(state.servers));
    },
  },
});

export const {
  addNewServer,
  removeServer,
  logIn,
  logOut,
} = staffSlice.actions;

export default staffSlice.reducer;
