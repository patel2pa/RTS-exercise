import React from 'react'
import { connect } from 'react-redux'

/*
The Results class is used to render the results,
renders four main peices of information depending on
if its a story or a comment, 
1. title or story title
2. associated url or story url
3. story text or comment text
4. the author
*/

class Results extends React.Component {
    RenderResults = () => {

        if(this.props.GetDataReducer.Data['hits'] !== undefined){
            const Data = this.props.GetDataReducer.Data['hits']
            
            return Data.map((results, index) => (
                <div key = {index}>
                    {results._highlightResult.title ? 
                        <div>
                            <h1>Title: {results.title}</h1>
                        </div>:<div>
                            <h1>Title: {results.story_title}</h1>
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
                        <div> {results.story_text}
                        </div>:<div>
                            {results.comment_text}
                        </div>}

                    <h2>Author | {results.author}</h2>
                ---------------------------------------------------------------
                </div>
            ))
        }  
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


