<template>
  <div class="table">
    <table-filter class="table__filter" />
    <table v-if="!isDataLoading" class="table__main">
      <caption class="table__caption">SPA Table</caption>
      <thead class="table__head">
        <tr class="table__row">
          <th class="table__item">Date</th>
          <th class="table__item">Name</th>
          <th class="table__item">Amount</th>
          <th class="table__item">Distance</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr class="table__row" v-for="row in filteredRows" :key="row.name">
          <td class="table__item">{{ row.date }}</td>
          <td class="table__item">{{ row.name }}</td>
          <td class="table__item">{{ row.amount }}</td>
          <td class="table__item">{{ row.distance }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="table__preloader">Loading...</div>
    <basic-pagination v-if="totalPages !== 1" class="table__pagination" :pages="totalPages" :model-value="page"
      @update:model-value="setPage" />
  </div>
</template>

<script>
import TableFilter from '@/components/TableFilter.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  components: { TableFilter },
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations({
      setRows: 'table/setRows',
      setPage: 'table/setPage',
      setLimit: 'table/setLimit',
      setTotalPages: 'table/setTotalPages',
      setLoading: 'table/setLoading'
    }),
    ...mapActions({
      fetchData: 'table/fetchData',
    }),
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    ...mapState({
      rows: state => state.table.rows,
      page: state => state.table.page,
      limit: state => state.table.limit,
      totalPages: state => state.table.totalPages,
      isDataLoading: state => state.table.isDataLoading,
    }),
    ...mapGetters({
      filteredRows: 'table/filteredRows',
    }),
  },
  watch: {
    page() {
      this.fetchData();
    }
  }
}
</script>

<style lang="scss" scoped>
.table {

  &__main {
    width: 100%;
    border: 5px solid lightgreen;
    border-collapse: collapse;
    border-radius: 5px;
  }

  &__filter {
    margin-bottom: 20px;
  }

  &__caption {
    display: none;
  }

  &__item {
    text-align: left;
    padding: 15px;
    border: 1px solid lightgreen;
  }

  &__pagination {
    margin-top: 20px;
  }

  &__preloader {
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: lightgray;
    height: 20px;

    &::before {
      content: '';
      display: block;
      border-radius: 50%;
      margin-right: 10px;
      width: 15px;
      height: 15px;
      border: 2px solid lightgray;
      border-top-color: lightgreen;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>