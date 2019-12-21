import produce from 'immer';
import { action, ActionType, createReducer } from 'typesafe-actions';

export const START_SPLASH = "START_SPLASH";

export const startSplash = () => action(START_SPLASH);

const actions = {
    startSplash
};

export { actions };

export interface SplashState {
    isSplash: boolean;
}

export type SplashActions = ActionType<typeof actions>;

const initialState: SplashState = {
    isSplash: true
};

export default createReducer<SplashState, SplashActions>(initialState, {
    [START_SPLASH]: state =>
        produce(state, draft => {
            draft.isSplash = false;
        })
});
