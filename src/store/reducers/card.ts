import produce from 'immer';
import { action, ActionType, createReducer } from 'typesafe-actions';
import uuid from "uuid";

export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD"

export const addCard = (url: string) => {
    const id: string = uuid.v4();
    return action(ADD_CARD, { id, url });
};

export const removeCard = (id: string) => action(REMOVE_CARD, { id });

const actions = {
    addCard,
    removeCard
};

export { actions };

export interface CardType {
    id: string;
    url: string;
}

export interface CardState {
    cards: CardType[];
}

export type CardActions = ActionType<typeof actions>;

const initialState: CardState = {
    cards: []
};

export default createReducer<CardState, CardActions>(initialState, {
    [ADD_CARD]: (state, action) =>
        produce(state, draft => {
            draft.cards = [...draft.cards, { url: action.payload.url, id: action.payload.id }];
        }),
    [REMOVE_CARD]: (state, action) =>
        produce(state, draft => {
            draft.cards = draft.cards.filter(card => card.id !== action.payload.id)
        })
});
