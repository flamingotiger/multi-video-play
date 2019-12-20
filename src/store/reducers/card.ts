import produce from 'immer';
import { action, ActionType, createReducer } from 'typesafe-actions';
import uuid from "uuid";

const CONSTANTS = {
    ADD_CARD: "ADD_CARD"
};

export const addCard = (url: string) => {
    const id: string = uuid.v4();
    return action(CONSTANTS.ADD_CARD, { id, url });
}
const actions = {
    addCard
};

export { actions };

interface CardType {
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
    [CONSTANTS.ADD_CARD]: (state, action) =>
        produce(state, draft => {
            draft.cards = [...draft.cards, { url: action.payload.url, id: uuid.v4() }];
        })
});
