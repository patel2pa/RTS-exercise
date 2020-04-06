import React from 'react'
import { connect } from 'react-redux'
import { GetData, UpdateInput, SelectOptions, PaginationAction } from '../React_Redux/Action'

/*
The Search class is used to get user input and set the option
for the search quary, the search quary is then passed to the 
the GetData action to set url and fetch data   
*/


class Search extends React.Component {
    
    //sets options to new selected option
    onChangeSelectFirstOption = (e) =>{
        this.props.SelectOptions({
            FirstOption:e.target.value
            })
    }

    onChangeSelectSecondOption = (e) => {
        this.props.SelectOptions({
            SecondOption:e.target.value
            })
        }

    /*
    get input from the user and passes it to UpdateInput
    */
    UpdateInput = (e) =>{
        this.props.UpdateInput({SearchTerm:e.target.value})
        }

    //passes the search quary to GetData on button click
    onSubmit = (e) =>{
        e.preventDefault();
        const SearchQuary = {
            SearchTerm: this.props.UpdateUserInputReducer.SearchTerm,
            FirstOption:this.props.SelectOptionsReducer.FirstOption,
            SecondOption: this.props.SelectOptionsReducer.SecondOption,
            PageNumber: ''
        }
        this.props.GetData(SearchQuary)
        this.props.PaginationAction({PageNumber:11})
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.UpdateInput}/>
                <select value = {this.props.SelectOptionsReducer.FirstOption} onChange = {this.onChangeSelectFirstOption}>
                    <option value = "search">Popular</option>
                    <option value = "search_by_date">Lastest</option>
                </select>
                <select value = {this.props.SelectOptionsReducer.SecondOption} onChange = {this.onChangeSelectSecondOption}>
                    <option value = "">All</option>
                    <option value = "story">Stories</option>
                    <option value = "comment">Comments</option>
                </select>
                <button onClick = {this.onSubmit}>Search</button>
            </div>
        )
    }
}

const mapStateToProps = (State) =>{
    return{
        GetDataReducer:State.GetDataReducer.Data,
        UpdateUserInputReducer:State.UpdateUserInputReducer.Input,
        SelectOptionsReducer:State.SelectOptionsReducer
    }
}

export default connect(mapStateToProps, {GetData, UpdateInput, SelectOptions, PaginationAction})(Search)