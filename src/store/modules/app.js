
const app = {
    namespaced: true,  
    state:{
        userName:"bb"
    },
    mutations:{
        SET_USERNAME(state,name){
           state.userName = name
        }
    },
    actions:{
        setUsername({commit},name){
            commit("SET_USERNAME",name);
        }
    }
    

}
export default app