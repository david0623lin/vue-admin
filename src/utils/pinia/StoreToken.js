import { defineStore } from "pinia";

export const useTokenStore = defineStore({
  id: "token",
  persist: true, // 這個配置啟用持久化
  state: () => ({
    sessionID: "",
    permissions: {},
    tabs: [
      // 固定首頁在第一個
      {
        name: "Dashboard",
        path: "/dashboard/dashboard",
        del: false
      }
    ]
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
