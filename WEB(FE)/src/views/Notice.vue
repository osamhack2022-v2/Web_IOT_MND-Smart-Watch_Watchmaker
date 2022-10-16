<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <div class="row mt-4">
          <div class="col-xl-12 mb-xl-0 mb-4">
            <billing-card />
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
import BillingCard from "./components/BillingCard.vue";

export default {
  name: "Billing",
  components: {
    InvoiceCard,
    BillingCard,
  },
  data() {
    return {
    };
  },
};
</script>
