import { ActionType } from '../enums'
import { Dispatch } from 'redux'
import { DispatchAction } from '../root-reducer'

export const saveAuthAction = (auth: boolean) => {
    return {
        type: ActionType.UpdateAuth, 
        payload: { auth }
    }
}

export const updateAuthAction = (auth: boolean) => {
    return (dispatch: Dispatch<DispatchAction>) => {
        setTimeout(() => {
            dispatch(saveAuthAction(auth));
        }, 3000 );
    } 
};

export const updatePwAction = (pw: string) => {
    return {
        type: ActionType.UpdatePassword, 
        payload: { pw }
    } 
}