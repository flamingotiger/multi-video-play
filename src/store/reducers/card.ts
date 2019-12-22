import produce from 'immer';
import { action, ActionType, createReducer } from 'typesafe-actions';
import uuid from "uuid";
import { format } from 'date-fns';

export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

export const addCard = (url: string, title: string = '', description: string = '') => {
    const id: string = uuid.v4();
    const updatedAt: string = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    return action(ADD_CARD, { id, url, title, description, updatedAt });
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
    title: string;
    description: string;
    updatedAt: string;
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
            draft.cards = [...state.cards, {
                url: action.payload.url, 
                id: action.payload.id, 
                title: action.payload.title,
                description: action.payload.description,
                updatedAt: action.payload.updatedAt
            }];
        }),
    [REMOVE_CARD]: (state, action) =>
        produce(state, draft => {
            draft.cards = state.cards.filter(card => card.id !== action.payload.id)
        })
});
