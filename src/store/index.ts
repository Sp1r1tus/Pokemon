import { rootReducer, DispatchAction, Ireducers } from './root-reducer';
import { createStore, applyMiddleware, compose} from 'redux';
import { logger } from './logger';
import thunk from 'redux-thunk'
// import { InitialState } from './root-reducer';
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore<Ireducers, DispatchAction, any, null>(
    rootReducer, 
    composeEnhancers(applyMiddleware(logger, thunk)));