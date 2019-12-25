import produce from 'immer';
import { action, ActionType, createReducer } from 'typesafe-actions';

export const SHOW_FORM = "SHOW_FORM";
export const HIDE_FORM = "HIDE_FORM";

export const showForm = () => {
    console.log(SHOW_FORM)
    return action(SHOW_FORM);
}
export const hideForm = () => {
    console.log(HIDE_FORM)
    return action(HIDE_FORM);
}

const actions = {
    showForm,
    hideForm
};

export { actions };

export interface FormState {
    isForm: boolean;
}

export type FormActions = ActionType<typeof actions>;

const initialState: FormState = {
    isForm: false
};

export default createReducer<FormState, FormActions>(initialState, {
    [SHOW_FORM]: state =>
        produce(state, draft => {
            draft.isForm = true;
        }),
    [HIDE_FORM]: state =>
        produce(state, draft => {
            draft.isForm = false;
        })
});
