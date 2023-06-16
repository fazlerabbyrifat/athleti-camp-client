import React from 'react';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';
import { BounceLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';

const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [  isInstructor, isInstructorLoading] = useUserRole();
    const location = useLocation();

    if (loading || isInstructorLoading){
        return <BounceLoader color="#36d7b7" />;
    }

    if (user && isInstructor) {
        return children;
    }

    return (<Navigate to="/" state={{from: location}} replace />);
};

export default InstructorRoute;