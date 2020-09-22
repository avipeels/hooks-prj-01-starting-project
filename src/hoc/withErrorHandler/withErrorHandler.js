import React, { useEffect, useState } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import aux from '../_Aux/_Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);
        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null);
            return req;
        });
        const resInterceptor = axios.interceptors.response.use(res => res, err => {
            setError(err);
        });

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            }
        }, [reqInterceptor, resInterceptor])

        const errorConfirmedHandler = () => {
            setError(null);
        }

        return (
            <aux>
                <Modal
                    show={error}
                    modalClosed={this.errorConfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </aux>
        );
    }
}

export default withErrorHandler;