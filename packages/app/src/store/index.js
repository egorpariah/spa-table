import { createStore } from "vuex";
import { tableModule } from "@/store/tableModule.js";
import { filterModule } from "@/store/filterModule.js";

export default createStore({
  modules: {
    table: tableModule,
    filter: filterModule,
  },
});
