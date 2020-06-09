import { DispatchAction, InitialState, rootReducer } from './root-reducer';
import { createStore, applyMiddleware, compose} from 'redux';
import { logger } from './logger';

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore<InitialState, DispatchAction, any, null>(
    rootReducer, 
    composeEnhancers(applyMiddleware(logger)));