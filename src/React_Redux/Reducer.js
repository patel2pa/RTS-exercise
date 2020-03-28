import { combineReducers } from 'redux';

const SearchTermStorage = []


const GetDataReducer = (State ={Data: {}}, Action) => {
    switch (Action.type){
        case "FETCH_DATA":
            return {Data:Action.payload}
        default:
            return State;
    }
}

const SaveSearchTermsReducer = (state, action) => {
    
    switch(action.type){
        case "FETCH_QUARY":
            SearchTermStorage.push(action.payload)
            return SearchTermStorage
        
        default:
            return SearchTermStorage;
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





const rootreducer = combineReducers({GetDataReducer, SaveSearchTermsReducer, UpdateUserInputReducer, SelectOptionsReducer})

export default rootreducer