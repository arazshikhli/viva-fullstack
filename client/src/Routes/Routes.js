import { Routes,Route } from "react-router-dom";
import {AboutPage} from '../pages/About/AboutPage'
import {GalleryPage} from '../pages/Gallery/GalleryPage'
import {ContactsPage} from '../pages/Contacts/ContactsPage'
import { AdminPage } from "../pages/Admin/AdminPage";
import { LoginPage } from "../pages/Admin/LoginPage";
import { RequireAuth } from "./RequireAuth";
import { Header } from "../components/Layout/Layout";
import { MainPage } from "../pages/Main/MainPage";
import {AddImage} from "../pages/Admin/AddImage/AddImage";

const MyRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Header/>}>
            <Route path="/" index element={<MainPage/>}/>
            <Route path="contacts" element={<ContactsPage/>}/>
        <Route path="gallery" element={<GalleryPage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="admin" element={
            <RequireAuth>
                <AdminPage/>

            </RequireAuth>
        }/>
        <Route path="/login" element={<LoginPage/>}/>
            </Route>
         <Route path='/*' element={<MainPage/>}/>
            </Routes>
    )
}

export {MyRoutes}