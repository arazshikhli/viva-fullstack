import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../axios'
export const fetchGallery=createAsyncThunk('gallery/fetchGallery',async()=>{
    try {
        const {data}=await axios.get('/gallery')
        console.log('data from redux: ',data)
        return data
    } catch (error) {
        
    }
})
const initialState={
    images:{
        items:[],
        status:'loading'
    }
}

const GallerySlice=createSlice({
    name:'images',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchGallery.pending]:(state,action)=>{
            state.images.status='loading'
        },
        [fetchGallery.fulfilled]:(state,action)=>{
            state.images.status='loaded'
            state.images.items=action.payload
            console.log(action.payload)
        },
        [fetchGallery.rejected]:(state,action)=>{
            state.images.status='error'
            state.images.items=[]
        },
    }
})

export const GalleryReducer=GallerySlice.reducer