import React from 'react'
import { connect } from 'react-redux'

class Results extends React.Component {
    RenderResults = () => {
        if(this.props.GetDataReducer.Data['hits'] !== undefined){
            const Data = this.props.GetDataReducer.Data['hits']
            return Data.map((results, index) => (
                <div key = {index}>
                    {results.title ? 
                        <div>
                            <h1>Title: {results.title}{results.story_title}</h1>
                        </div>:<div>
                            <h1>Title: None</h1>
                        </div>}

                    {results.url ? 
                        <div>
                            <a href = {results.url}>
                                {results.url}
                            </a>
                        </div>:<div>
                            <a href = {results.story_url}>
                                {results.story_url}
                            </a>
                        </div>}

                    {results.story_text ? 
                        <div>{results.comment_text}
                        </div>:<div>
                            {results.story_text}
                        </div>}

                    <h2>Author | {results.author}</h2>
                ---------------------------------------------------------------
                </div>
        ))}  
    }

    render(){
        return(
        <div>
            {this.RenderResults()}
        </div>
        )
    }
}
        

const mapStateToProps = (State) =>{
    return{
        GetDataReducer:State.GetDataReducer
    }
}

export default connect(mapStateToProps)(Results)


