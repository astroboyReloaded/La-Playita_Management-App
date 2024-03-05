import { createSlice } from '@reduxjs/toolkit';

const serversSlice = createSlice({
  name: 'servers',
  initialState: {
    servers: JSON.parse(localStorage.getItem('servers')) || [],
  },
  reducers: {
    addNewServer: (state, { payload }) => {
      const newServer = {
        id: payload.id,
        name: payload.name,
        password: payload.password,
        roll: payload.roll,
        isLogged: false,
        logs: [],
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
    logOut: (state, { payload }) => {
      state.servers = state.servers.map((server) => {
        if (server.id === payload.id) {
          server.logs[server.logs.length - 1].logout = Date.now();
          return {
            ...server,
            isLogged: false,
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
} = serversSlice.actions;

export default serversSlice.reducer;
