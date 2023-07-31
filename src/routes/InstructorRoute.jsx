import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import { BounceLoader } from "react-spinners";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const {isInstructor, isInstructorLoading} = useInstructor()
    const location = useLocation()

    if (loading || isInstructorLoading) {
        return <BounceLoader color="#36d7b7" />
    }
    if (user && isInstructor) {
        return children
    }
    return <Navigate to='/' state={{from: location}}></Navigate>
};

export default InstructorRoute;