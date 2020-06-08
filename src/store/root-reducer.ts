import { Action, Reducer, Dispatch } from 'redux';

export interface InitialState {
    auth: boolean;
    pw: string;
}

export const initialState: InitialState = {
    auth: false,
    pw: ''
};    

export interface DispatchAction extends Action<ActionType> {
    payload: Partial<InitialState>;
}

export enum ActionType {
    UpdateAuth,
    UpdatePassword
}
    
export const rootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => {
    if (action.type === ActionType.UpdateAuth) {
        return {...state, auth: action.payload.auth || false};
    } else if (action.type === ActionType.UpdatePassword) {
        return {...state, pw: action.payload.pw || ''};
    } else return state;
};


export class RootDispatcher {
    private readonly dispatch: Dispatch<DispatchAction>;
    constructor(dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch; 
    }

    updateAuth = (auth: boolean) => this.dispatch({type: ActionType.UpdateAuth, payload: { auth }});
    updatePassword = (pw: string) => this.dispatch({type: ActionType.UpdatePassword, payload: { pw }});
}