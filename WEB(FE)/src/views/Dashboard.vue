<template>
  <div class="py-4 container-fluid h-75">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3">
            <card
              :title="stats.user.title"
              :value="users.length"
              :percentage="stats.user.percentage"
              :iconClass="stats.user.iconClass"
              :iconBackground="stats.user.iconBackground"
              :detail="stats.user.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3">
            <card
              :title="stats.vacation.title"
              :value="users.filter(user => user.location =='휴가').length"
              :percentage="stats.vacation.percentage"
              :iconClass="stats.vacation.iconClass"
              :iconBackground="stats.vacation.iconBackground"
              :detail="stats.vacation.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3">
            <card
              :title="stats.out.title"
              :value="users.filter(user => user.location =='외출').length"
              :percentage="stats.out.percentage"
              :iconClass="stats.out.iconClass"
              :iconBackground="stats.out.iconBackground"
              :percentageColor="stats.out.percentageColor"
              :detail="stats.out.detail"
              directionReverse
            ></card>
          </div>
          <div class="col-lg-3">
            <card
              :title="stats.working.title"
              :value="users.filter(user => user.working =='근무On').length"
              :percentage="stats.working.percentage"
              :iconClass="stats.working.iconClass"
              :iconBackground="stats.working.iconBackground"
              :detail="stats.working.detail"
              directionReverse
            ></card>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-3">
          <row style="height:100%;">
            <div class="row-md-3">
            <categories-card v-bind:userDataFromDashboard="users.filter(user => user.location =='생활관')" cardTitle="생활관"/>
            </div>
            <div class="row-md-1"> <br> </div>
            <div class="row-md-3">
            <categories-card v-bind:userDataFromDashboard="users.filter(user => user.location =='복지시설')" cardTitle="복지시설"/>
            </div>
            <div class="row-md-3">
            <div class="row-md-1"> <br> </div>
            <categories-card v-bind:userDataFromDashboard="users.filter(user => user.location =='체력단련시설')" cardTitle="체력단련시설"/>
            </div>
          </row>
          </div>
          <div class="col-md-3">
            <categories-card v-bind:userDataFromDashboard="users.filter(user => user.location =='휴가')" cardTitle="휴가"/>    
          </div>
          <div class="col-md-3">
            <categories-card v-bind:userDataFromDashboard="users.filter(user => user.location =='외출')" cardTitle="외출"/>
          </div>
          <div class="col-md-3">
            <categories-card v-bind:userDataFromDashboard="users.filter(user => user.working =='근무On')" cardTitle="근무"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import Card from "@/examples/Cards/Card.vue";
import CategoriesCard from "./components/CategoriesCard.vue";

import axios from "axios";
export default {
  name: "dashboard-default",
  created () {    
    axios.get('/api/users') 
        .then((response) => {
          this.users = response.data
          
        })
  }
  ,
  data() {
    return {
      stats: {
        user: {
          title: "총 인원",
          value: "",
          percentage: "",
          iconClass: "ni ni-users",
          detail: "",
          iconBackground: "bg-gradient-primary",
        },
        vacation: {
          title: "휴가",
          value: "",
          percentage: "",
          iconClass: "ni ni-world",
          iconBackground: "bg-gradient-danger",
          detail: "",
        },
        out: {
          title: "외출",
          value: "",
          percentage: "",
          iconClass: "ni ni-paper-diploma",
          percentageColor: "text-danger",
          iconBackground: "bg-gradient-success",
          detail: "",
        },
        working: {
          title: "근무",
          value: "",
          percentage: "",
          iconClass: "ni ni-cart",
          iconBackground: "bg-gradient-warning",
          detail: "",
        }
      },

      users:{},
    };
  },
  components: {
    CategoriesCard,
    Card
  },
};


</script>
