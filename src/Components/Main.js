import React from 'react';
import { connect } from 'react-redux'
import { GetData } from '../React_Redux/Action'
import Pagination from './Pagination'
import Search from './Search'
import SearchResults from './SearchResults'

class Main extends React.Component{

    componentDidMount = () => {
        this.props.GetData()
    }
   
render(){  
    return(
        <div>
            {this.props.GetDataReducer.SearchURL}
            <Search/>
            <Pagination/>
            <SearchResults/>
        </div>
        )

    }

}


const mapStateToProps = (State) => {
    return {
        GetDataReducer:State.GetDataReducer.Data,
    }
}

export default connect(mapStateToProps,{ GetData })(Main)



/*
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetData } from './React_Redux/action'



function Test(props){  
        const count = useSelector(state => state)
        const dispatch = useDispatch()
    return(
        <div>
            <button onClick = {()=>{ 
                dispatch(GetData())}
                }/>
            <h1>{console.log(count, 'sgtr')}</h1>
        </div>
        )
    }

export default Test*/

/*<input type="text" name="SearchQuary" onChange = {this.onChange} value={this.state.SearchQuary}/>*/
