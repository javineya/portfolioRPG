import { createStore, combineReducers } from 'redux';
// import reducers to combine
import questReducer from './reducers';

export default () => {
    const store = createStore(
        // list reducers to combine in object as key:value
        combineReducers({
            quests: questReducer
        })
    );
    // return store by default
    return store;
};