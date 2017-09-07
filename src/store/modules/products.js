import $http from "@/utils/fetch"

const products = {
  namespaced: true,

  state: {
    productList : []
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code;
    }
  },

  actions: {
    // 获取保险列表
    GetProductList({ commit, state }, { page, page_size,car_id } ) {
      var that = this;
      return new Promise((resolve, reject) => {
        $http.get('/product/list',{
          params: {
            page,
            page_size,
            car_id
          }
        }).then(function (response) {
          var data = response.data;
          resolve(response.data)
        }).catch(function (response) {
          reject(response)
        });
      })
    },

    GetProductDetail( { commit, state }, { product_id } ) {
      var that = this;
      return new Promise((resolve, reject) => {
        $http.get('/product/view',{
          params: {
            product_id
          }
        }).then(function (response) {
          var data = response.data;
          resolve(response.data)
        }).catch(function (response) {
          reject(response)
        });
      })
    },


    GetTypeList({ commit, state }, config) {
      var that = this;
      return new Promise((resolve, reject) => {
        $http.get('/home/index',{}).then(function (response) {
          var data = response.data;
          resolve(response.data)
        }).catch(function (response) {
          reject(response)
        });
      })
    },


    GetHealthState({ commit, state }, config) {
      var that = this;
      return new Promise((resolve, reject) => {
        $http.get('/health-state/view',{
          params: {
            product_id: config.product_id
          }
          
        }).then(function (response) {
          var data = response.data;
          resolve(response.data)
        }).catch(function (response) {
          reject(response)
        });
      })
    }

  }
}

export default products
