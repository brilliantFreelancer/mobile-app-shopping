import {user_change} from "./types";
import {pass_change} from "./types";

export const userChange=(text)=>{
    return{
        type:'user_change',
        payload:text
    }
}

export const passChange=(text)=>{
    return{
        type:'pass_change',
        payload:text
    }
}



// const USERNAME='USERNAME';
// const PASSWORD='PASSWORD';
//
// export function username(text) {
//     return { type: USERNAME, text }
// }
//
// export function password(text) {
//     return { type: PASSWORD, text }
// }


// export const ADD_TODO = 'ADD_TODO'
// export function addTodo(text) {
//     return { type: ADD_TODO, text }
// }

// export const USERNAME = 'USERNAME'
// export function U (text) {
//     return { type: USERNAME, text }
// }

