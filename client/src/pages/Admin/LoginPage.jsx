import React, {  useEffect } from 'react'
import styles from "./Login.module.css";
import {useForm} from 'react-hook-form'
import { Typography,TextField,Paper,Button} from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import{loginAdmin,selectIsAuth} from '../../redux/slices/authSlice'
import {useNavigate} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const LoginPage=()=>{
    
  const {t}=useTranslation()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {status}=useSelector((state)=>state.auth)
    const isAuth=useSelector(selectIsAuth)
  const {register,
    handleSubmit,
    formState:{
    errors}
}=useForm({
    defaultValues:{
        login:'',
        password:''
    },
    mode:'all'
  })

  const onSubmit=(values)=>{
    console.log(values)
    dispatch(loginAdmin(values))
    console.log('isAuth',isAuth)

  }
  useEffect(()=>{
    if(status){
        toast.success(status, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
      navigate('/admin')
      }
  },[status,isAuth])
    return (
        <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
         {t('login.page_title')}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField

          className={styles.field}
          label={t('login.login_label')}
          error={Boolean(errors.login?.message)}
          helperText={errors.login?.message}
          {...register('login',{required:`${t('login.enter_login')}`})}
          fullWidth
        />
        <TextField className={styles.field} 
        type='password'
        error={Boolean(errors.login?.message)}
        helperText={errors.password?.message}
        {...register('password',{required:`${t('login.enter_password')}`})}
        label={t('login.pass_label')}
         fullWidth
         />
        <Button
        type='submit'
        size="large" variant="contained" fullWidth>
          {t('login.login_btn')}
        </Button>
        </form>
      </Paper>

    )

}