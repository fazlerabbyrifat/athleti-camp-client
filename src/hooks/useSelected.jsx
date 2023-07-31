import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useSelected = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClasses?email=${user?.email}`)
            return res.data;
        }
    })
    return {  selectedClasses, refetch }
}
export default useSelected