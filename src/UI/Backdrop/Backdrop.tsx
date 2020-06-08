import React from 'react'
import './Backdrop.css';

const Backdrop = (props: any) => (
    props.hide ? null : <div className='backdrop'></div>
)

export default Backdrop;