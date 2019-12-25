import produce from 'immer';
import { action, ActionType, createReducer } from 'typesafe-actions';
import { CardType } from './card';

export const SHOW_FORM = "SHOW_FORM";
export const HIDE_FORM = "HIDE_FORM";

export const showForm = (card: CardType | null = null) => action(SHOW_FORM, { card });
export const hideForm = () => action(HIDE_FORM);

const actions = {
    showForm,
    hideForm
};

export { actions };

export interface FormState {
    isForm: boolean;
    card: CardType | null;
}

export type FormActions = ActionType<typeof actions>;

const initialState: FormState = {
    isForm: false,
    card: null
};

export default createReducer<FormState, FormActions>(initialState, {
    [SHOW_FORM]: (state, action) =>
        produce(state, draft => {
            draft.isForm = true;
            draft.card = action.payload.card;
        }),
    [HIDE_FORM]: state =>
        produce(state, draft => {
            draft.isForm = false;
            draft.card = null;
        })
});
