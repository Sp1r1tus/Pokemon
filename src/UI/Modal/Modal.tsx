import React from 'react';
import Aux from '../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

const Modal = (props: any) => (
    <Aux>
        <Backdrop hide={props.hide}/>
        <div
        className='modal'
        style={{
            transform: props.hide ? 'translateY(-100vh)' : 'translateY(0)',
            opacity: props.hide ? '0' : '1'
        }}>
        {props.children}</div>
    </Aux>
);

export default Modal;