import { combineReducers } from 'redux';


const GetDataReducer = (State ={Data: {}}, Action) => {
    switch (Action.type){
        case "FETCH_DATA":
            return {Data:Action.payload}
        default:
            return State;
    }
}


const UpdateUserInputReducer = (State={Input:{SearchTerm:''}}, Action) => {
    switch(Action.type){
        case "FETCH_USER_INPUT":
            return {Input:Action.payload}
        default:
            return State
    }
}

const InitalState = {
    FirstOption:'search',
    SecondOption:''
  }

const SelectOptionsReducer = (State = InitalState, Action) => {
    switch(Action.type){
        case "Option_Select":
            return {
                ...State,
                ...Action.payload
            }
        default:
            return State
    }
}

const initalState = {
    PageNumber:11
}

const PaginationReducer = (State = initalState, Action) =>{
    switch(Action.type){
        case "Change_in_end":
            return {...State, ...Action.payload}
        default:
            return State
    }
}




const rootreducer = combineReducers({GetDataReducer, UpdateUserInputReducer, SelectOptionsReducer, PaginationReducer})

export default rootreducer