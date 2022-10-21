<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <div class="col-md-6">
                Edit Profile
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">기본 정보</p>
              <div class="row">

                <div class="col-md-2">
                  <label for="example-text-input" class="form-control-label"
                    >계급</label
                  >
                  <!--
                  <div>
                    <select v-model="selected">
                        <option selected> 병장 </option>
                        <option> 상병 </option>
                        <option> 일병 </option>
                        <option> 이병 </option>
                    </select>
                  </div>
                  -->
                  <argon-input type="text" v-bind:value="user.rank" />
                </div>

                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >이름</label
                  >
                  <argon-input type="text" v-bind:value="user.name" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >군번</label
                  >
                  <argon-input type="email" v-bind:value="user.number" />
                </div>

              </div>
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">현재상태 정보</p>
              <div class="row">
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >현위치</label
                  >
                  <argon-input
                    type="text"
                    v-bind:value="user.location"
                  />
                </div>


                <div class="col-md-1">
                  <label for="example-text-input" class="form-control-label"
                    >근무</label
                  >
                  <argon-switch />
                </div>
                <div class="col-md-1">
                  <label for="example-text-input" class="form-control-label"
                    >휴가</label
                  >
                  <argon-switch />
                </div>
                <div class="col-md-1">
                  <label for="example-text-input" class="form-control-label"
                    >외출</label
                  >
                  <argon-switch />
                </div>

              </div>
              <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-3">
                <argon-button color="fail" size="sm" class="ms-auto" @click = "cancel()"
                  >취소</argon-button>
                </div>
                <div class="col-md-3">
                <argon-button color="success" size="sm" class="ms-auto" d="" align="right" @click = "apply()" 
                  >확인</argon-button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

</template>

<script>
//import setNavPills from "@/assets/js/nav-pills.js";
//import setTooltip from "@/assets/js/tooltip.js";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import axios from "axios";
import ArgonSwitch from "@/components/ArgonSwitch.vue";

export default {
    name: "user-edit",
    components: { ArgonInput, ArgonButton, ArgonSwitch },
    created () {    
    axios.get('/api/users') 
        .then((response) => {
          this.user = response.data[this.$route.params.id]
        })
  },

    data(){
      return {
        user : {},
        rank:[
          {
            text:"병장"
          },
          {
            text:"상병"
          },
          {
            text:"일병"
          },
          {
            text:"이병"
          }
        ]
      }
    },

    methods:{
      cancel(){
        console.log(this.user.number)
        this.$router.back()
      },

      apply(){
        // 수정사항 반영
        console.log(this.$route.params.id)
        this.$router.back()
      }

    }

};
</script>
