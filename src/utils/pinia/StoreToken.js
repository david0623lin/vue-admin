import { defineStore } from "pinia";

export const useTokenStore = defineStore({
  id: "token",
  state: () => ({
    sessionID: "",
    permissions: {},
    tabs: []
  }),
  actions: {
    setSessionID(sessionID) {
      this.sessionID = sessionID;
    },
    setPermissions(permissions) {
      this.permissions = permissions;
    },
    setTabs(tabs) {
      this.tabs = tabs;
    },
    delTabs(tabIndex) {
      this.tabs.splice(tabIndex, 1);
    },
  },
  getters: {
    getSessionID() {
      return this.sessionID;
    },
    getPermissions() {
      return this.permissions;
    },
    getTabs() {
      return this.tabs;
    },
  }
});
