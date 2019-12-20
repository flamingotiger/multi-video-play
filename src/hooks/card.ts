import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';
import { Dispatch } from 'redux';
import { CardState } from 'store/reducers/card';

const useCard = (): [CardState, Dispatch] => {
    const state = useSelector((state: RootState):CardState => state.card);
    const dispatch = useDispatch();
    return [state, dispatch];
}

export default useCard;