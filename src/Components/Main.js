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


