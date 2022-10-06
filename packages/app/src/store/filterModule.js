export const filterModule = {
  state: () => ({
    filterValue: "",
    selectedCol: "",
    selectedCondition: "",
  }),
  mutations: {
    setSelectedCol(state, selectedCol) {
      state.selectedCol = selectedCol;
    },
    setSelectedCondition(state, selectedCondition) {
      state.selectedCondition = selectedCondition;
    },
    setFilterValue(state, filterValue) {
      state.filterValue = filterValue;
    },
  },
  namespaced: true,
};
