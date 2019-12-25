import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { CardState } from 'store/reducers/card';
import { SplashState } from 'store/reducers/splash';
import { FormState } from 'store/reducers/form';

export const useCard = (): [CardState, Dispatch] => {
    const state = useSelector((state: RootState): CardState => state.card);
    const dispatch = useDispatch();
    return [state, dispatch];
}

export const useSplash = (): [SplashState, Dispatch] => {
    const state = useSelector((state: RootState): SplashState => state.splash);
    const dispatch = useDispatch();
    return [state, dispatch];
}

export const useCardForm = (): [FormState, Dispatch] => {
    const state = useSelector((state: RootState): FormState => state.form);
    const dispatch = useDispatch();
    return [state, dispatch];
}
