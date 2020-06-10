import { Reducer, Action } from 'redux';
import { ActionType } from '../enums';

interface DispatchPwAction extends Action<ActionType> {
    payload: Partial<IinitialPwState>;
};

export interface IinitialPwState {
    pw: string;
};

const initialpwState: IinitialPwState = {
    pw: ''
};

export const pwReducer: Reducer<IinitialPwState, DispatchPwAction> = (state = initialpwState, action) => {
    if (action.type === ActionType.UpdatePassword) {
        return {...state, pw: action.payload.pw || ''};
    } else return state;
};