<!-- 특이사항 카드 -->
<template>
    <div class="card">
      <div class="card-header pb-0 px-3">
        <h6 class="mb-0">32전대</h6>
      </div>
      <div class="card-body pt-4 p-3">
        <ul class="list-group">
          <li class="mb-2 border-0 list-group-item d-flex justify-content-start border-radius-lg">
            <div class="text-center shadow icon icon-shape icon-sm bg-gradient-dark">
              <i class="ni ni-circle-08 text-white opacity-10"></i>
            </div>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-sm text-dark">병장 최수호</h6>
              <span class="text-xs">
                심박수 : 90bpm 산소포화도 : 97%
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "combat-card",
  };
  </script>
  