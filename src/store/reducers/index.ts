import { combineReducers } from "redux";
import card from './card';
import splash from './splash';

const rootReducer = combineReducers({
    card, splash
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
