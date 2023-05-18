import React from "react";
import { Link,Outlet } from "react-router-dom";
import { AppBar,IconButton,CloseIcon,Box, Toolbar, Typography, Container} from "@mui/material";
import SvgIcon from '@mui/material/SvgIcon';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from "react-i18next";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch, useSelector } from "react-redux";
import {logout,selectIsAuth} from '../../redux/slices/authSlice'
import './Layout.css'
export const Header=()=>{
    const isAuth=useSelector(selectIsAuth)
    console.log(isAuth)
    const {t,i18n}=useTranslation()
    const dispatch=useDispatch()

    const onclickLogout=()=>{
       if(window.confirm('Are you sure want to log out?')){
        dispatch(logout())
       }
    }
    const changeLanguage=(language)=>{
        i18n.changeLanguage(language)
    }
 return (
   <>
    <div className="header">
        <div>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={()=>changeLanguage('en')}>ENG</Button>
                <Button onClick={()=>changeLanguage('az')}>AZE</Button>
                <Button onClick={()=>changeLanguage('ru')}>RUS</Button>
                </ButtonGroup>
         
        </div>
        <div className="nav_links">
        <Link className="nav_link" to='/configurator'>{t('header.configurator')}</Link>
        <Link className="nav_link" to='/gallery'> {t('header.gallery')}</Link>
        <Link className="nav_link" to="/contacts">{t('header.message')}</Link> 
          {isAuth && (
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
             <Button onClick={onclickLogout} color="error">
                  Logout
               </Button>
            </ButtonGroup>

         )}
        </div>
    </div>
    <Outlet/>
    <footer>
      20021
    </footer>
    </>

 )
 
}
