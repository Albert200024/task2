import { applyMiddleware, combineReducers, createStore } from "redux";
import { currentUsersReducer, initialCurrentUser } from "./reducers/currentUser/currentUsersReducer";
import { todosReducer, initialTodos } from "./reducers/todo/todosReducer";
import { thunk } from "redux-thunk";

// function logger(store){
//     return function (next){
//         return function(action ){
     
//             action.payload.name += "Z"
//             setTimeout(() => {
//                 next(action)
//             }, 2000)
//         }
//     }
// }

// const logger2 = (store) => (next) => (action) => {
//     action.payload.name += "U"
//     return next(action)
// }

const store = createStore(combineReducers({
    todos:todosReducer,
    currentUsers:currentUsersReducer
}), {
    friends:[],
    posts:[],
    todos:initialTodos,
    currentUsers: initialCurrentUser
}, applyMiddleware(thunk))

export default store