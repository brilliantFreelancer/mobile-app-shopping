import {user_change} from "../Action/types";
import {pass_change} from "../Action/types";

const Initial_state ={username:'',password:''}

 const AuthReducer =(state=Initial_state,action) =>{
    switch (action.type) {
        case user_change:
            return {...state,username: action.payload}
            break;

        case pass_change:
            return {...state,password: action.payload}
            break;
    default:
            return state
    }
}

export default AuthReducer






// import { combineReducers } from 'redux'
// import {USERNAME} from '../Action/action'
// import {PASSWORD} from '../Action/action'
//
//
//
//
// function todos(state = [], action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                 }
//             ]
//         default:
//             return state
//     }
// }
//
//
//
//
//
//
//
// const todoApp = combineReducers({
//     todos
// })
//
// export default todoApp










// function todos (state = [], action) {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     completed: false
//                 }
//             ]
//
//         default:
//             return state
//     }
// }
//
