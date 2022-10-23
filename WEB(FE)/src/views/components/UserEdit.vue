<!-- 병력 수동 관리 -->
<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <div class="col-md-6">
                <h4>Edit Profile</h4>
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
                  <argon-input type="text" v-bind:value="user.rank" @input="changeRank" />
                  
                </div>

                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >이름</label
                  >
                  <argon-input type="text" v-bind:value="user.name" @input="changeName"/>
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >군번</label
                  >
                  <argon-input type="email" v-bind:value="user.number" @input="changeNumber" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >소속</label
                  >
                  <argon-input type="text" v-bind:value="user.belong" @input="changeBelong"/>
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >태그 ID</label
                  >
                  <argon-input type="text" v-bind:value="user.tagID" @input="changeTagID"/>
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
                    @input="changeLocation"
                  />
                </div>


                <div class="col-md-1">
                  <label for="example-text-input" class="form-control-label"
                    >근무</label
                  >
                <div v-if = "user.working == '근무On'"> 
                  <argon-switch v-bind:v-model="newInfo.working" checked/>
                </div>
                <div v-else>
                  <argon-switch v-bind:v-model="newInfo.working"/>
                </div>
                  
                </div>
                <div class="col-md-1">
                  <label for="example-text-input" class="form-control-label"
                    >휴가</label
                  >
                  <div v-if = "user.location == '휴가'"> 
                    <argon-switch checked/>
                  </div>
                  <div v-else>
                    <argon-switch />
                  </div>
                </div>
                <div class="col-md-1">
                  <label for="example-text-input" class="form-control-label"
                    >외출</label
                  >
                  <div v-if = "user.location == '외출'"> 
                    <argon-switch checked/>
                  </div>
                  <div v-else>
                    <argon-switch/>
                  </div>
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
    components: { ArgonInput, ArgonButton, ArgonSwitch, },
    created () {    
    axios.get('/api/users') 
        .then((response) => {
          this.user = response.data[this.$route.params.id]
        })
  },

    data(){
      return {
        user : {},
        newInfo : {
          number: null,
          name: null,
          new_number: null,
          rank: null,
          belong: null,
          location: null,
          working: null,
          tagID: null
        }
      }
    },

    methods:{
      cancel(){
        //console.log(this.user.number)
        this.$router.back()
      },
      changeName(e){
        this.newInfo.name=e.target.value
      },
      changeBelong(e){
        this.newInfo.belong=e.target.value
      },
      changeNumber(e){
        this.newInfo.new_number=e.target.value
      },
      changeRank(e){
        this.newInfo.rank=e.target.value
      },
      changeLocation(e){
        this.newInfo.location=e.target.value
      },
      changeTagID(e){
        this.newInfo.tagID=e.target.value
      }, 
      changeWorking(e){
        this.newInfo.working=e.target.value
        console.log(e.target.value)
      }, 

      apply(){
        // 수정사항 반영
        //console.log(this.$route.params.id)
        console.log(this.user.tagID)
        console.log(this.newInfo.tagID)
        this.newInfo.number=this.user.number
        axios.post('/api/update', this.newInfo ).then((res)=>{
                console.log(res);
            }).catch(error=>{
                console.log(error);
                throw new Error(error);
            });

        this.$router.back()
      }

    }
};
</script>
<!--

  스위치(체크박스인풋)에서 값 받아오는데 문제 있음.

-->