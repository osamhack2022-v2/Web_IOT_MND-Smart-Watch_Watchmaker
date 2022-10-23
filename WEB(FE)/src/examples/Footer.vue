<!-- footer 설정 지저분해서 주석처리
<template>
  <footer class="py-3 footer">

    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="mb-4 col-lg-6 mb-lg-0">
          <div
            class="text-sm text-center copyright text-muted"
            :class="this.$store.state.isRTL ? 'text-lg-end' : 'text-lg-start'"
          >
            ©
            {{ new Date().getFullYear() }}, made with
            <i class="fa fa-heart"></i> by
            <a
              href="https://github.com/osamhack2022/Web_Iot_Cloud_MND-Smart-Watch_Watchmaker/tree/main"
              class="font-weight-bold"
              target="_blank"
              >MSW</a>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>
-->
<script>
export default {
  name: "app-footer",
};
</script>
