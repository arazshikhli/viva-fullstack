import React from "react";
import {MyRoutes}from './Routes/Routes'
import {Header} from './components/Layout/Layout'

import { useDispatch,useSelector } from "react-redux";
import {fetchGallery} from './redux/slices/gallery'
import {ToastContainer} from "react-toastify";
function App() {
  console.log(process.env.REACT_APP_SERVER_URL)
  const dispatch=useDispatch()
  const {images}=useSelector(state=>state.images)
  const isImagesLoading=images.status==='loading'
React.useEffect(()=>{
  dispatch(fetchGallery())
},[])

  return (
    <div className="container">
      <MyRoutes/>
    <ToastContainer/>
    </div>
  );
}


export default App;
