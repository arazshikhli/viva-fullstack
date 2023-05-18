import { useLocation,
useNavigate,Navigate } from "react-router-dom";
import{selectIsAuth} from '../redux/slices/authSlice'
import { useSelector } from "react-redux";

export const RequireAuth=({children})=>{
    const navigate=useNavigate()
const location=useLocation();
const auth=useSelector(selectIsAuth)
console.log(auth)
if (!auth){
   return <Navigate to='/login'/>
}
return children
}
