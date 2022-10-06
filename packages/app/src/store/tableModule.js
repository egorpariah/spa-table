import axios from "axios";

export const tableModule = {
  state: () => ({
    rows: [],
    page: 1,
    limit: 5,
    totalPages: 0,
    isDataLoading: false,
  }),
  getters: {
    filteredRows(state, getters, rootState) {
      return state.rows.filter((row) => {
        if (
          rootState.filter.selectedCondition === "equal" &&
          rootState.filter.filterValue
        ) {
          return (
            row[rootState.filter.selectedCol] == rootState.filter.filterValue
          );
        }

        if (rootState.filter.selectedCondition === "contains") {
          return row[rootState.filter.selectedCol]
            .toString()
            .toLowerCase()
            .includes(rootState.filter.filterValue.toLowerCase());
        }

        if (
          rootState.filter.selectedCondition === "more" &&
          rootState.filter.filterValue
        ) {
          return (
            row[rootState.filter.selectedCol] > rootState.filter.filterValue
          );
        }

        if (
          rootState.filter.selectedCondition === "less" &&
          rootState.filter.filterValue
        ) {
          return (
            row[rootState.filter.selectedCol] < rootState.filter.filterValue
          );
        }

        return true;
      });
    },
  },
  mutations: {
    setRows(state, rows) {
      state.rows = rows;
    },
    setPage(state, page) {
      state.page = page;
    },
    setLimit(state, limit) {
      state.limit = limit;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setLoading(state, bool) {
      state.isDataLoading = bool;
    },
  },
  actions: {
    async fetchData({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get("/data", {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setRows", response.data);
      } catch (e) {
        alert(e.message);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
