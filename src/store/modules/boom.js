
const boom = {
    namespaced: true,  
    state:{
        boom:"nboom"
    },
    mutations:{
        SET_BOOM(state,boom){
           state.boom = boom
        }
    },
    actions:{
        setBoom({commit},boom){
            commit("SET_BOOM",boom);
        }
    }

}
export default boom