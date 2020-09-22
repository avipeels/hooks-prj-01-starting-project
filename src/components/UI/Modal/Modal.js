import React from 'react';

import classes from './Modal.css';
import aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = () => {

    return (
        <aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
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