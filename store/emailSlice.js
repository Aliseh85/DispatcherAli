import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({

name: 'email',
initialState: {
email: '',
isLogin: false,
name:'',

},

reducers: {

    update: (state, action) => {

        state.email = action.payload
        },
            
        login: (state) => {
    
            state.isLogin = true;
                },
            logout: (state) => {
        
            state.isLogin = false;
                    },
                editName:(state, action)=>{
                    state.name = action.payload

                }
}

})

// Action creators are generated for each case reducer function

export const { update,login,logout,editName}=counterSlice.actions;
export default counterSlice.reducer;