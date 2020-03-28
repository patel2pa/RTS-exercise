import React from 'react'
import { connect } from 'react-redux'
import { GetData } from '../React_Redux/Action'

class Pagination extends React.Component {
    state = {
        end:11,
        over:0
    }

    RenderTestButtons = () =>{
        let x = []
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
                <button onClick = {this.PreviousClick}> 
                Previous </button> 
                {this.RenderTestButtons()}
                <button onClick = {this.NextClick}> Next </button>
            </div>
        )
    }

}

const mapStateToProps = (State) =>{
    return{
        GetDataReducer:State.GetDataReducer.Data,
        SelectOptionsReducer:State.SelectOptionsReducer,
        UpdateUserInputReducer:State.UpdateUserInputReducer.Input
    }
}

export default connect(mapStateToProps, {GetData})(Pagination)