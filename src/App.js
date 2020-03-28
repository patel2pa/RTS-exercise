import React from 'react';
import Test from './Components/Main'
import { Provider } from 'react-redux';
import store from "./React_Redux/Index"

class App extends React.Component{
  render () {
    return (
      <Provider store={store}>
        <div>
          <Test/>
        </div>
      </Provider>
  )}
}



export default App;
