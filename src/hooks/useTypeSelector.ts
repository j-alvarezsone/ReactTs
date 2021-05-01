import { useSelector, TypedUseSelectorHook, createSelectorHook } from 'react-redux';
import { RootState } from '../state/reducers/index';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedSelector2 = createSelectorHook<RootState>();
