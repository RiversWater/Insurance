import $http from "@/utils/fetch"

const products = {
  namespaced: true,

  state: {
    userInfor : ''
  },

  getters: {
    GetUserInfor: ( state ) => {
      if( !state.userInfor ){
        state.userInfor = JSON.parse( window.localStorage.getItem("userInfor") );
      }

      return state.userInfor;
    }
  },

  mutations: {
    SET_USET_INFOR: (state, userInfor) => {
      state.userInfor = userInfor;
      window.localStorage.setItem("userInfor", JSON.stringify( userInfor ) )
    }
  },

  actions: {
    // 获取保险列表
    setUserInfor ({ commit, state }, userInfor) {
      var that = this;
      return new Promise((resolve, reject) => {
        commit( "SET_USET_INFOR", userInfor )
      })
    }

  }
}

export default products
