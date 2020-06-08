import React, { ChangeEvent } from 'react';
import Aux from '../../hoc/Aux';
import { useDispatch } from 'react-redux';
import { RootDispatcher } from '../../store/root-reducer';
import AuthButton from '../AuthButton/AuthButton';
import './Authentification.css';
import { LOGIN } from '../AuthButton/AuthButtonCaption';

const Authentification: React.FC = () => {
    const dispatch = useDispatch();
    const rootDispatcher = new RootDispatcher(dispatch);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        rootDispatcher.updatePassword(e.target.value);
    };

    return (
        <Aux>
            <label>Enter Password (PW = asdf)</label>
            <input type='password' onChange={(e) => changeHandler(e)}/>
            <AuthButton buttonCaption={LOGIN} />
        </Aux>
    )
}

export default Authentification;