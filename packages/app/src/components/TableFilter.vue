<template>
  <div class="filter">
    <basic-select class="filter__select" :model-value="selectedCol" @update:model-value="setSelectedCol"
      :options="colSortOptions" :description="'Sort by'" />
    <basic-select class="filter__select" :model-value="selectedCondition" @update:model-value="setSelectedCondition"
      :options="conditionSortOptions" :description="'Condition'" />
    <basic-input class="filter__input" :model-value="filterValue" @update:model-value="setFilterValue" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      colSortOptions: [
        { value: 'name', name: 'Name' },
        { value: 'amount', name: 'Amount' },
        { value: 'distance', name: 'Distance' },
      ],
      conditionSortOptions: [
        { value: 'equal', name: 'equal' },
        { value: 'contains', name: 'contains' },
        { value: 'more', name: 'more than' },
        { value: 'less', name: 'less than' },
      ],
    }
  },
  methods: {
    ...mapMutations({
      setSelectedCol: 'filter/setSelectedCol',
      setSelectedCondition: 'filter/setSelectedCondition',
      setFilterValue: 'filter/setFilterValue',
    })
  },
  computed: {
    ...mapState({
      selectedCol: state => state.filter.selectedCol,
      selectedCondition: state => state.filter.selectedCondition,
      filterValue: state => state.filter.filterValue,
    }),
  }
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  justify-content: flex-start;

  &__select {
    margin-right: 10px;
  }
}
</style>