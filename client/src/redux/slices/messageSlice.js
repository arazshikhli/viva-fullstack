
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../axios'
export const fetchMessages=createAsyncThunk('messages/fetchMessages',async()=>{
    try {
        const {data}=await axios.get('/messages')
        return data
    } catch (error) {
        
    }
})
const initialState={
    messages:{
        items:[],
        status:'loading'
    }
}

const messagesSlice=createSlice({
    name:'messages',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchMessages.pending]:(state,action)=>{
            state.messages.status='loading'
        },
        [fetchMessages.fulfilled]:(state,action)=>{
            state.messages.status='loaded'
            state.messages.items=action.payload
            console.log(action.payload)
        },
        [fetchMessages.rejected]:(state,action)=>{
            state.messages.status='error'
            state.messages.items=[]
        },
    }
})

export const messagesReducer=messagesSlice.reducer