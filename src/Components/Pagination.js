import React from 'react'
import { connect } from 'react-redux'
import { GetData, PaginationAction } from '../React_Redux/Action'


/*
class Pagination extends React.Component {
    state = {
        end:11,
        over:0
    }
    
    RenderTestButtons = () =>{
        console.log(this.state.end)
        let x = []
        const nbPages = this.props.GetDataReducer.nbPages;
        if (nbPages > 10){
        for(let i = this.state.end-10; i < this.state.end; i++){
        x.push(<button key={i} onClick = {(e)=>{
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
            for(let i = 1; i < nbPages; i++){
                x.push(<button key={i} onClick = {(e)=>{
                    const SearchQuary = {
                        SearchTerm: this.props.UpdateUserInputReducer.SearchTerm,
                        FirstOption:this.props.SelectOptionsReducer.FirstOption,
                        SecondOption: this.props.SelectOptionsReducer.SecondOption,
                        PageNumber: i
                    }
                    this.props.GetData(SearchQuary)}}>{i}</button>)
        }

    }
        return x
    }

    



   RenderTestButtons = () =>{
    let x = []

    if(this.props.GetDataReducer.nbPages>10){
    for(let i = this.state.end - 10; i < this.state.end; i++){
    x.push(<button key={i} onClick = {(e)=>{
        const SearchQuary = {
            SearchTerm: this.props.UpdateUserInputReducer.SearchTerm,
            FirstOption:this.props.SelectOptionsReducer.FirstOption,
            SecondOption: this.props.SelectOptionsReducer.SecondOption,
            PageNumber: i
        }
        this.props.GetData(SearchQuary)}}>{i}</button>)
    }
    }
    return x
}

    PreviousClick = (e) => {
        if (this.state.end == 11){}
        else if(this.state.over > 0){
            const NewEnd = this.state.end - (this.state.over)
            this.setState({end:NewEnd, over:0})}
        else{
            const NewEnd = this.state.end - 10
            this.setState({end:NewEnd})}    
    }

    NextClick = () => {
        const End = this.state.end
        const NewEnd = End + 10
        if (NewEnd > this.props.GetDataReducer.nbPages){
            if(this.state.over>0){}
            else{
            this.setState({end:this.props.GetDataReducer.nbPages,over:this.props.GetDataReducer.nbPages-End})
            }}
        else{
        this.setState({end:NewEnd})
        }}


    render(){
        return (
            <div>
                {console.log(this.props.PaginationReducer)}
                <button onClick = {this.PreviousClick}> Previous </button> 
                {this.RenderTestButtons()}
                <button onClick = {this.NextClick}> Next </button>
            </div>
        )
    }

}*/



class Pagination extends React.Component {
   
    state = {
        over:0
    }

    renderButtons = () => {
        let x = []
        const nbPages = this.props.GetDataReducer.nbPages;
        if (nbPages > 10){
            for(let i = this.props.PaginationReducer.PageNumber - 10; i < this.props.PaginationReducer.PageNumber; i++){
                x.push(<button key={i} onClick = {(e)=>{
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
                x.push(<button key={i} onClick = {(e)=>{
                    const SearchQuary = {
                        SearchTerm: this.props.UpdateUserInputReducer.SearchTerm,
                        FirstOption:this.props.SelectOptionsReducer.FirstOption,
                        SecondOption: this.props.SelectOptionsReducer.SecondOption,
                        PageNumber: i
                    }
                    this.props.GetData(SearchQuary)}}>{i}</button>)
            }
        }
        return x
    }


    PreviousClick = (e) => {
        const over = this.state.over
        const Page_Number = this.props.PaginationReducer.PageNumber
        if(this.props.PaginationReducer.PageNumber > 11){
            if (this.state.over > 0){
                this.props.PaginationAction({PageNumber:Page_Number-over})
                this.setState({over:0})
            }
            else{
        const NbPages = this.props.GetDataReducer.nbPages
        const NewEnd = this.props.PaginationReducer.PageNumber - 10
        this.props.PaginationAction({PageNumber:NewEnd}) } 
            } 
    }

    NextClick = () => {
        const NbPages = this.props.GetDataReducer.nbPages
        const NewEnd = this.props.PaginationReducer.PageNumber + 10
        if(NewEnd > NbPages){
            if(this.state.over > 0 && this.props.PaginationReducer>11){}
            else{
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
        PaginationReducer:State.PaginationReducer
    }
}

export default connect(mapStateToProps, {GetData, PaginationAction})(Pagination)