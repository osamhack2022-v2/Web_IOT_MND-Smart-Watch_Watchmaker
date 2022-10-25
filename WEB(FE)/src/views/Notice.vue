<template>
  <div class="py-5 container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <output-card />
      </div>
      <div class="col-lg-6">
        <input-card />
      </div>
      <!--
      <div class="col-lg-4">
        <invoice-card class="mt-4" />
      </div>
      -->
    </div>
  </div>

</template>

<script>

//import InvoiceCard from "./components/InvoiceCard.vue";
import OutputCard from "./components/OutputCard.vue";
import InputCard from "./components/Inputcard.vue";

export default {
  name: "Billing",
  components: {
    OutputCard,
    InputCard,
  },
  data() {
    return {
    };
  },
};
</script>
