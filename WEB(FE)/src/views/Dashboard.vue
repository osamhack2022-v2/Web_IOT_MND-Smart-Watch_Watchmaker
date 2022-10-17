<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
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
          <div class="col-lg-3 col-md-6 col-12">
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
          <div class="col-lg-3 col-md-6 col-12">
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
          <div class="col-lg-3 col-md-6 col-12">
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
        <div class="row">
          <div class="col-lg-12 mb-lg">
            <!-- line chart -->
            <div class="card z-index-2">
              <gradient-line-chart />
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-5">
            <categories-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/examples/Cards/Card.vue";
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import CategoriesCard from "./components/CategoriesCard.vue";

import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";
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
          title: "부대 총 인원",
          value: "141",
          percentage: "",
          iconClass: "ni ni-users",
          detail: "",
          iconBackground: "bg-gradient-primary",
        },
        vacation: {
          title: "휴가",
          value: "17",
          percentage: "",
          iconClass: "ni ni-world",
          iconBackground: "bg-gradient-danger",
          detail: "",
        },
        out: {
          title: "외출",
          value: "6",
          percentage: "",
          iconClass: "ni ni-paper-diploma",
          percentageColor: "text-danger",
          iconBackground: "bg-gradient-success",
          detail: "",
        },
        working: {
          title: "근무",
          value: 0,
          percentage: "",
          iconClass: "ni ni-cart",
          iconBackground: "bg-gradient-warning",
          detail: "",
        },
      },

      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
      users:{},
    };
  },
  components: {
    Card,
    GradientLineChart,
    CategoriesCard,
  },
};


</script>
