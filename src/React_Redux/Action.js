//gets data associated with the url, saves results in the payload
export const GetData = (SearchQuary= {SearchTerm:'', FirstOption:'search',SecondOption:'', PageNumber:''}) => dispatch => {
  const SearchURL = `https://hn.algolia.com/api/v1/${SearchQuary.FirstOption}?query=${SearchQuary.SearchTerm}&tags=${SearchQuary.SecondOption}&hitsPerPage=20&page=${SearchQuary.PageNumber}`
  fetch(SearchURL)
    .then(res => res.json())
    .then(results =>{ 
      results['SearchURL'] = SearchURL
      console.log(results)
      dispatch({
        type:"FETCH_DATA",
        payload: results
        })},
        (error) => {
          console.log(error)
        }  
    )
}


//get user input from the searchbar
export const UpdateInput = (Input) => dispatch=>{
dispatch({
  type:"FETCH_USER_INPUT",
  payload:Input
})
}


//used to change state of options
export const SelectOptions = (Option) => dispatch => {
  dispatch({
    type: "Option_Select",
    payload:Option
  })
}

//keeps track of state end  
export const PaginationAction = (End) => dispatch=>{
  dispatch({
    type: "Change_in_end",
    payload: End
  })
}