import produce from 'immer';
import { action, ActionType, createReducer } from 'typesafe-actions';

export const SHOW_FORM = "SHOW_FORM";
export const HIDE_FORM = "HIDE_FORM";

export const showForm = () => action(SHOW_FORM);
export const hideForm = () => action(HIDE_FORM);

const actions = {
    showForm,
    hideForm
};

export { actions };

export interface SplashState {
    isForm: boolean;
}

export type SplashActions = ActionType<typeof actions>;

const initialState: SplashState = {
    isForm: false
};

export default createReducer<SplashState, SplashActions>(initialState, {
    [SHOW_FORM]: state =>
        produce(state, draft => {
            draft.isForm = true;
        }),
    [HIDE_FORM]: state =>
        produce(state, draft => {
            draft.isForm = false;
        })
});
