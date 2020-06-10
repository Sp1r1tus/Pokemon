import { Action, Reducer, Dispatch, combineReducers } from 'redux';
import { authReducer, IinitialAuthState } from './reducers/authReducer';
import { pwReducer, IinitialPwState } from './reducers/pwReducer'
import { ActionType } from './enums'

export interface Ireducers {
    authReducer: IinitialAuthState;
    pwReducer: IinitialPwState;
}

export const rootReducer: Reducer<Ireducers,DispatchAction> = combineReducers<Ireducers>({
    authReducer: authReducer,
    pwReducer: pwReducer
});

/* 

https://dzone.com/articles/react-redux-hooks-with-typescript-in-2020


export const initialState: InitialState = {
    auth: false,
    pw: ''
};   

export const rootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => {
    if (action.type === ActionType.UpdateAuth) {
        return {...state, auth: action.payload.auth || false};
    } else if (action.type === ActionType.UpdatePassword) {
        return {...state, pw: action.payload.pw || ''};
    } else return state;
};  */

export interface InitialState {
    auth: boolean;
    pw: string;
}

export interface DispatchAction extends Action<ActionType> {
    payload: Partial<InitialState>;
}

export class RootDispatcher {
    private readonly dispatch: Dispatch<DispatchAction>;
    constructor(dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch; 
    }

    updateAuth = (auth: boolean) => this.dispatch({ type: ActionType.UpdateAuth, payload: { auth } });
    updatePassword = (pw: string) => this.dispatch({ type: ActionType.UpdatePassword, payload: { pw }});
}