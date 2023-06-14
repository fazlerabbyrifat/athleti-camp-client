import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <BounceLoader color="#36d7b7" />
    }

    if(user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;