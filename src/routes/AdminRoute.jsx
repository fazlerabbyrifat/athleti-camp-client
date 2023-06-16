import React from 'react';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';
import { BounceLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [ isAdmin, isAdminLoading] = useUserRole();
    const location = useLocation();

    if (loading || isAdminLoading){
        return <BounceLoader color="#36d7b7" />;
    }

    if (user && isAdmin) {
        return children;
    }

    return (<Navigate to="/" state={{from: location}} replace />);
};

export default AdminRoute;