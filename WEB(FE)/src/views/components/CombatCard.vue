<template>
  <div class="card" style="height:100%;" >
    <div class="p-3 pb-0 card-header">
      <h6 class="mb-0">{{ cardTitle }}</h6>
    </div>
    <div class="p-3 card-body">
      <ul class="list-group" :class="this.$store.state.isRTL ? 'pe-0' : ''">
        <li v-for="user in userDataFromDashboard" v-bind:key="user.index"
          class="mb-2 border-0 list-group-item d-flex justify-content-between border-radius-lg"
          :class="this.$store.state.isRTL ? 'pe-0' : 'ps-0'"
        >
        
          <div class="d-flex align-items-center">
          <div v-if="user.heartrate == 0 " >
            <div
              class="text-center shadow icon icon-shape icon-sm bg-gradient-dark"
              :class="this.$store.state.isRTL ? 'ms-3' : 'me-3'"
            >

              <i class="ni ni-sound-wave text-white opacity-10"></i>
          </div>
          </div>
          <div v-else-if = "user.heartrate>200 || user.heartrate<35">
            <div
              class="text-center shadow icon icon-shape icon-sm bg-gradient-danger"
              :class="this.$store.state.isRTL ? 'ms-3' : 'me-3'"
            >

              <i class="ni ni-sound-wave text-white opacity-10"></i>
          </div>
          </div>
          <div v-else>
            <div
              class="text-center shadow icon icon-shape icon-sm bg-gradient-success"
              :class="this.$store.state.isRTL ? 'ms-3' : 'me-3'"
            >

              <i class="ni ni-sound-wave text-white opacity-10"></i>
          </div>
          </div>

            <div class="d-flex flex-column">
              <h6 class="mb-1 text-sm text-dark">{{ user.name }}</h6>
              <span class="text-xs">
                {{ user.heartrate }} bpm  
              </span>
              <span class="text-xs">
                {{user.spo2}} %
              </span>

            </div>
          </div>
          <div class="d-flex">

            <button
              class="my-auto btn btn-link btn-icon-only btn-rounded text-dark icon-move-right"
            >
            <div v-if="user.operation=='작전대기'">
              <span class="badge bg-gradient-secondary">{{user.operation}}</span> 
            </div>

            <div v-else>
              <span class="badge bg-gradient-success">{{user.operation}}</span>
            </div>

            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    userDataFromDashboard: Object,
    cardTitle: String,
  },
  created () {    

  },

  data(){
    return{
      users: {}
    }
  }
};
</script>
