<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <user-edit />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">

      </div>
    </div>
  </div>
</template>

<script>
import UserEdit from "./components/UserEdit.vue";

export default {
  name: "tables",
  components: {
    UserEdit,
  },
  data() {
    return {

    };
  },
};
</script>
