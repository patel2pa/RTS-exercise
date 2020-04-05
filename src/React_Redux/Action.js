export const GetData = (SearchQuary= {
                        SearchTerm:'',
                        FirstOption:'search',
                        SecondOption:'',
                        PageNumber:''}) => dispatch => {
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


export const GetSearchQuary = (Searchquary) => dispatch =>{
  dispatch({
    type: "FETCH_QUARY",
    payload:Searchquary
  })
} 

export const UpdateInput = (Input) => dispatch=>{
dispatch({
  type:"FETCH_USER_INPUT",
  payload:Input
})
}



export const SelectOptions = (Option) => dispatch => {
  dispatch({
    type: "Option_Select",
    payload:Option
  })
}

export const PaginationAction = (test) => dispatch=>{
  dispatch({
    type: "TestPage",
    payload: test
  })
}