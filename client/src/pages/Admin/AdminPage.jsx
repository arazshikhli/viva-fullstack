import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchMessages} from '../../redux/slices/messageSlice'
import {AddImage} from "./AddImage/AddImage";

import './Admin.css'
export const AdminPage=()=>{

const dispatch=useDispatch();
const {messages}=useSelector(state=>state.messages)
const isMessagesLoading=messages.status==='loading'
console.log(isMessagesLoading)
useEffect(()=>{
    dispatch(fetchMessages())
},[])
console.log(messages)


return (
<div className="msg-container">
<AddImage/>
</div>
)
}