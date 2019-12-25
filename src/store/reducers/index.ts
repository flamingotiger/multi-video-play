import { combineReducers } from "redux";
import card from './card';
import splash from './splash';
import form from './form';

const rootReducer = combineReducers({
    card, splash, form
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
