import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux';

export const logger: Middleware = (store: MiddlewareAPI) => {
    return (next: Dispatch) => {
        return (action: Action) => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState())
            return result;    
        }
    }
}