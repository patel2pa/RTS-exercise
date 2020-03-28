import { createStore, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rootreducer from './Reducer'


const store = createStore( 
        
            rootreducer,
         
        applyMiddleware(thunkMiddleWare)
)

export default store;