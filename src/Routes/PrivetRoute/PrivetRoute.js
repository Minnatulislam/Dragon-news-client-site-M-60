import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <Spinner animation='border' variant='primary'></Spinner>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace ></Navigate>
    }
    return children;
};

export default PrivetRoute;
