import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useEnrolled = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: enrolledClasses = [], refetch } = useQuery({
        queryKey: ['enrolledClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolledClasses?email=${user?.email}`)
            return res.data;
        }
    })
    return {  enrolledClasses, refetch }
}
export default useEnrolled