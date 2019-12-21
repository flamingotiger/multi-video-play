import produce from 'immer';
import { action, ActionType, createReducer } from 'typesafe-actions';
import uuid from "uuid";

export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";
export const MOVE_CARD = "MOVE_CARD";

export const addCard = (url: string, measure: [number, number]) => {
    const id: string = uuid.v4();
    return action(ADD_CARD, { id, url, measure });
};

export const removeCard = (id: string) => action(REMOVE_CARD, { id });

export const moveCard = (id: string, measure: [number, number]) => action(MOVE_CARD, { id, measure });

const actions = {
    addCard,
    removeCard,
    moveCard
};

export { actions };

export interface CardType {
    id: string;
    url: string;
    measure: [number, number]
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
            draft.cards = [...state.cards, { url: action.payload.url, id: action.payload.id, measure: action.payload.measure }];
        }),
    [REMOVE_CARD]: (state, action) =>
        produce(state, draft => {
            draft.cards = state.cards.filter(card => card.id !== action.payload.id)
        }),
    [MOVE_CARD]: (state, action) =>
        produce(state, draft => {
            draft.cards = state.cards.map(card => {
                if (card.id === action.payload.id) {
                    card = { ...card, measure: action.payload.measure };
                }
                return card;
            });
        })
});
