import React from 'react';

import classes from './Modal.css';
import aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {

    return (
        <aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </aux>
    )

}

export default React.memo(
    Modal,
    (prevProps, nextProps) =>
        nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children
);