import {createStore} from "redux";
const init = { coctails:["1","2","3"]};
const store = createStore(callback,init);
function callback(state,action){
    if(action.type == "тест"){
        return {value:action.value}
    }

}
export default store;