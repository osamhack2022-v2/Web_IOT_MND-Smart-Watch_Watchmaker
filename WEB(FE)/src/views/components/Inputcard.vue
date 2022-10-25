<!-- 특이사항 카드 -->
<template>
    <div class="card">
      <div class="card-header pb-0 px-3">
        <h6 class="mb-0">특이사항</h6>
      </div>
      <div class="card-body pt-4 p-3">
        <ul class="list-group">
          <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
            <div class="d-flex flex-column">
              <h6 class="mb-3 text-sm">병장 최수호</h6>
              <span class="mb-2 text-xs">
                특이사항:
                <span class="text-dark font-weight-bold ms-sm-2"> 208호 코로나 결과 양성 입니다. </span>
              </span>
            </div>
            <div class="ms-auto text-end">
              <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;">
                <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
              </a>
              <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;">
                <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "billing-card",
  };
  </script>
  