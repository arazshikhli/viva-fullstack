import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import axios from '../../axios'

const initialState={
    user: null,
    token: null,
    isLoading: false,
    status: null,
}



export const loginAdmin = createAsyncThunk(
    'auth/loginAdmin',
    async ({ login, password }) => {
        try {
            const { data } = await axios.post('/auth/login', {
                login,
                password,
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const getMe = createAsyncThunk(
    'auth/getMe',
    async ({ login, password }) => {
        try {
            const { data } = await axios.post('/auth/me', {
                login,
                password,
            })
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state)=>{
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    },
    extraReducers:{
        [loginAdmin.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginAdmin.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [loginAdmin.rejectWithValue]: (state, action) => {
            state.status = action.payload.message
            state.isLoading = false
        },

    }
})
export const selectIsAuth=state=>Boolean(state.auth.token)


export const {logout} =authSlice.actions
export const authReducer=authSlice.reducer