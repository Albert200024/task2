import {loadCurrentUser}  from "./currentUserAPI"

// Reducers
export const initialCurrentUser = {
    name:"Albert Ghumashyan"
}

export  function currentUsersReducer  (state={}, action) {
    if(action.type == "edit-current-user-name"){
        return {
            ...state,
             name : action.payload.name
        }
    }
    return state
}
// ====

// Action
export function editName(newName){
    return {
        type:"edit-current-user-name",
        payload:{
           name:newName
        }
    }
}

export function selectName(state){
    return state.currentUsers.name
}


export function loadUser(){
    return (dispatch, getState)=> {
        return loadCurrentUser().then((user) => {
            dispatch(editName(user.name));
        })
    }
}
// ====