<template>

<div class="py-4 container-fluid h-75">
    <div class="row">

      <div class="row-md-4">

      <div class="input-group">
            <span class="input-group-text text-body">
              
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input @keyup.enter="apply()"
              type="text"
              class="form-control"
              v-model="keyword"
              placeholder="표시할 부대명을 입력하세요"
            />

      </div>
    <br>
    </div>

            <div class="col-lg-3" v-for="group in searchResult" v-bind:key="group.index">
                <div>
                <combat-card v-bind:userDataFromDashboard="users.filter(user => user.belong.indexOf(group.name)!=-1)" v-bind:cardTitle="group.name" v-bind:leader="group.leaderRank+' '+group.leader" />
                </div>
            </div>

  </div>
</div>
</template>

<script>

import CombatCard from "./components/CombatCard.vue";

import axios from "axios";

export default {
name: "SelectCombatGroup",
components: {
  CombatCard,
},
methods:{
  apply(){
      
      this.searchResult =  [ ];
      axios.get('/api/combatBelong/'+this.keyword).then((res)=>{
              
              console.log(res.data);
               this.searchResult = res.data;

           }).catch(error=>{
               console.log(error);
               throw new Error(error);
           });
        axios.get('/api/users') 
        .then((response) => {
          this.users = response.data
          
        })

   }
},
data() {
  return {
    keyword:'',
    searchResult: [],
    users: null
  };
},
};
</script>
