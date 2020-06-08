import React from 'react';
import { useDispatch } from 'react-redux';
import { RootDispatcher } from '../../store/root-reducer';
import Config from '../../config.json';
import { useSelector, shallowEqual } from 'react-redux';
import { InitialState } from '../../store/root-reducer';
import { IAuth } from '../../../models/models';
import * as CaptionType from '../AuthButton/AuthButtonCaption';

interface IButtonProps {
    buttonCaption: string;
}

const AuthButton: React.FC <IButtonProps> = ({ buttonCaption }) => {

    const { pw } = useSelector<InitialState, IAuth>((state: InitialState) => {
        return {
            auth: state.auth,
            pw: state.pw
        }
      },shallowEqual);

    const dispatch = useDispatch();
    const rootDispatcher = new RootDispatcher(dispatch);
  
    const clickHandler = () => {

        if (buttonCaption === CaptionType.LOGIN) {
          if (Config.PASSWORD === pw) {
            rootDispatcher.updateAuth(true)
          }
          else {
            rootDispatcher.updateAuth(false)
          }
        } else if (buttonCaption === CaptionType.LOGOUT) {
            rootDispatcher.updateAuth(false)
          }
        }
    
    return (
        <button onClick={clickHandler}>{buttonCaption}</button>
    )
}

export default AuthButton;