import { defineStore } from "pinia";

export const useTokenStore = defineStore({
  id: "token",
  state: () => ({
    sessionID: "",
    permissions: {}
  }),
  actions: {
    setSessionID(sessionID) {
      this.sessionID = sessionID;
    },
    setPermissions(permissions) {
      this.permissions = permissions;
    }
  },
  getters: {
    getSessionID() {
      return this.sessionID;
    },
    getPermissions() {
      return this.permissions;
    }
  }
});
