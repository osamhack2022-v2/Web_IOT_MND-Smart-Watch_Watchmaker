<template>

<div class="py-4 container-fluid h-75">
    <div class="row">

      <div class="row md-4">

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

      


    </div>
  </div>
</div>
</template>

<script>

import axios from "axios";
export default {
name: "SelectCombatGroup",
components: {

},
methods:{
  apply(){
      
      this.searchResult =  [ ];
      axios.get('/api/combatBelong/'+this.keyword).then((res)=>{
               this.searchResult = res.data;

           }).catch(error=>{
               console.log(error);
               throw new Error(error);
           });

   }
},
data() {
  return {
    keyword:'',
    searchResult: []
  };
},
};
</script>
