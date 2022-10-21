<!-- 인원 관리 시스템의 병사 근무 현황 vue-->
<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>병사 근무 현황</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">병사</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >계급</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >근무현황</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >현위치</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user in users" v-bind:key="user.index">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{user.name}}</h6>
                    <p class="text-xs text-secondary mb-0">{{user.number}}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{user.rank}}</p>
                <p class="text-xs text-secondary mb-0"></p>
              </td>
              <td class="align-middle text-center text-sm">
                <div v-if = "user.working == '근무On'"> 
                  <span class="badge badge-sm bg-gradient-success">{{user.working}}</span>
                </div>
                <div v-else>
                  <span class="badge badge-sm bg-gradient-secondary">{{user.working}}</span>
                </div>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{user.location}}</span>
                <p class="text-xs text-secondary mb-0">22/10/18 17:57:08</p>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  @click = "edit(user.index)" 
                >관리</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "authors-table"
  ,
  created () {    
    axios.get('/api/users') 
        .then((response) => {
          this.users = response.data

        })
  }
  ,
  data(){
    return{
      users: {}
    }
  },
  methods:{
    edit(number){
    this.$router.push({
      name: "TableEdit",
      params: {
        id: number
      },

    })
    console.log(this.users[number].name)
  }
  }


  
};
</script>
