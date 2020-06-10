import React from 'react';
import { useDispatch } from 'react-redux';
// import { RootDispatcher } from '../../store/root-reducer';
import Config from '../../config.json';
import { useSelector, shallowEqual } from 'react-redux';
import { Ireducers } from '../../store/root-reducer'
// import { InitialState } from '../../store/root-reducer'
import * as CaptionType from '../AuthButton/AuthButtonCaption';
import {updateAuthAction} from '../../store/actions/actions';

interface IButtonProps {
    buttonCaption: string;
}

const AuthButton: React.FC <IButtonProps> = ({ buttonCaption }) => {

/*   const pw = useSelector<InitialState>((state: InitialState) => {
    return state.pw
  },shallowEqual); */

  const pw = useSelector<Ireducers>((state: Ireducers) => {
    return state.pwReducer.pw
  },shallowEqual);

  const dispatch = useDispatch();
  //const rootDispatcher = new RootDispatcher(dispatch);

  const clickHandler = () => {

      if (buttonCaption === CaptionType.LOGIN) {
        if (Config.PASSWORD === pw) {
          //rootDispatcher.updateAuth(true)
          dispatch(updateAuthAction(true))
        }
        else {
          //rootDispatcher.updateAuth(false)
          dispatch(updateAuthAction(false))
        }
      } else if (buttonCaption === CaptionType.LOGOUT) {
          // rootDispatcher.updateAuth(false)
          dispatch(updateAuthAction(false))
        }
      }
  
  return (
      <button onClick={clickHandler}>{buttonCaption}</button>
  )
}

export default AuthButton;