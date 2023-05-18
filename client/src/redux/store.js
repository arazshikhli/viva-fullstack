import {configureStore} from '@reduxjs/toolkit'
import {GalleryReducer} from './slices/gallery'
import {authReducer} from './slices/authSlice'
import {messagesReducer} from './slices/messageSlice'

 const store=configureStore({
    
    reducer:{
       images:GalleryReducer,
       auth:authReducer,
       messages:messagesReducer
    },
})

export default store;