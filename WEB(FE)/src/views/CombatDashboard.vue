<!-- 실시간 병력 확인 페이지 -->
<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8">
          <div class="row mt-4">
            <div class="col-xl-12 mb-xl-0 mb-4">
              <combat-card />
            </div>
          </div>
        </div>
      </div>
    </div>
  
</template>

<script>
import CombatCard from "./components/CombatCard.vue";

    
export default {
  name: "Combat",
  components: {
    CombatCard,
  },
  data() {
    return {
    };
  },
};
</script>
