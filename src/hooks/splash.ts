import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { SplashState } from 'store/reducers/splash';

const useSplash = (): [SplashState, Dispatch] => {
    const state = useSelector((state: RootState):SplashState => state.splash);
    const dispatch = useDispatch();
    return [state, dispatch];
}

export default useSplash;