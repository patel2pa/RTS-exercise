import React from 'react'
import { connect } from 'react-redux'
import { GetData, PaginationAction } from '../React_Redux/Action'


class Pagination extends React.Component {
   
    state = {
        over:0
    }

    renderButtons = () => {
        let Buttons = []
        const nbPages = this.props.GetDataReducer.nbPages;
        const PaginationEnd = this.props.PaginationReducer
        if (nbPages > 11){
            for(let i = PaginationEnd - 10; i < PaginationEnd; i++){
                Buttons.push(<button key={i} onClick = {(e)=>{
                    const SearchQuary = {
                        SearchTerm: this.props.UpdateUserInputReducer.SearchTerm,
                        FirstOption:this.props.SelectOptionsReducer.FirstOption,
                        SecondOption: this.props.SelectOptionsReducer.SecondOption,
                        PageNumber: i
                    }
                    this.props.GetData(SearchQuary)}}>{i}</button>)
                }
            }
        else{
            for(let i = 1; i < nbPages+1; i++){
                Buttons.push(<button key={i} onClick = {(e)=>{
                    const SearchQuary = {
                        SearchTerm: this.props.UpdateUserInputReducer.SearchTerm,
                        FirstOption:this.props.SelectOptionsReducer.FirstOption,
                        SecondOption: this.props.SelectOptionsReducer.SecondOption,
                        PageNumber: i
                    }
                    this.props.GetData(SearchQuary)}}>{i}</button>)
            }
        }
        return Buttons
    }


    PreviousClick = (e) => {
        let over = this.state.over
        let CurrentEnd = this.props.PaginationReducer
        let NewEnd = this.props.PaginationReducer - 10
        if(CurrentEnd > 11){
            if (over > 0){
                this.props.PaginationAction({PageNumber:CurrentEnd-over})
                this.setState({over:0})
            }
            else{
                this.props.PaginationAction({PageNumber:NewEnd}) 
            } 
        } 
    }

    NextClick = () => {
        const NbPages = this.props.GetDataReducer.nbPages
        const NewEnd = this.props.PaginationReducer + 10
        let over = this.state.over
        if(NewEnd > NbPages){
            if(over==0){
            this.props.PaginationAction({PageNumber:NbPages})
            this.setState({over:10-(NewEnd-NbPages)})
            }
        }
        else{
        this.props.PaginationAction({PageNumber:NewEnd})
        }
    }


    render(){
        return (
            <div>
                <button onClick = {this.PreviousClick}>
                    Previous
                </button>
                {this.renderButtons()}
                <button onClick = {this.NextClick}>
                    Next
                </button>
                {console.log(this.state.over)}
            </div>
        )
    }

}

const mapStateToProps = (State) =>{
    return{
        GetDataReducer:State.GetDataReducer.Data,
        SelectOptionsReducer:State.SelectOptionsReducer,
        UpdateUserInputReducer:State.UpdateUserInputReducer.Input,
        PaginationReducer:State.PaginationReducer.PageNumber
    }
}

export default connect(mapStateToProps, {GetData, PaginationAction})(Pagination)