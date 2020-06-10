import { Reducer, Action } from 'redux';
import { ActionType } from '../enums';

interface DispatchAuthAction extends Action<ActionType> {
    payload: Partial<IinitialAuthState>;
};

export interface IinitialAuthState {
    auth: boolean;
};

const initialAuthState: IinitialAuthState = {
    auth: false
};

export const authReducer: Reducer<IinitialAuthState, DispatchAuthAction> = (state = initialAuthState, action) => {
    if (action.type === ActionType.UpdateAuth) {
        return {...state, auth: action.payload.auth || false};
    } else return state;
};