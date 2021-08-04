import {createStore} from 'redux'
import reducer from '../reducer/Reducer'
const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(reducer,devtools)
export default store;