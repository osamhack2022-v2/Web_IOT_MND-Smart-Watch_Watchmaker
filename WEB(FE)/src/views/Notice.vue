<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <div class="row mt-4">
          <div class="col-xl-12 mb-xl-0 mb-4">
            <output-card />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-xl-12 mb-xl-0 mb-4">
            <input-card />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <invoice-card class="mt-4" />
      </div>
    </div>
  </div>

</template>

<script>

import InvoiceCard from "./components/InvoiceCard.vue";
import OutputCard from "./components/OutputCard.vue";
import InputCard from "./components/Inputcard.vue";

export default {
  name: "Billing",
  components: {
    InvoiceCard,
    OutputCard,
    InputCard,
  },
  data() {
    return {
    };
  },
};
</script>
