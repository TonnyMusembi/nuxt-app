import { defineStore } from "pinia";

export const useHabitStore = defineStore("habit-storexs", {
  state: () => ({
    habits: [],
    error: "",
    pending: false,
  }),

  actions: {},
});
