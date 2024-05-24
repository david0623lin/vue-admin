import { defineStore } from "pinia";

export const useRouterStore = defineStore({
  id: "router",
  state: () => ({
    routes: []
  }),
  actions: {
    setRoutes(newRoutes) {
      this.routes = newRoutes;
    }
  },
  getters: {
    getRoutes() {
      return this.routes;
    }
  }
});
