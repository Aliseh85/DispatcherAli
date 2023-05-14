import { configureStore } from '@reduxjs/toolkit';

// import exampleSlice from 'redux-toolkit/slices;
import emailReducer from './emailSlice'
import newsSliceReducer from './newsSlice';

const store = configureStore({

reducer: {
email:emailReducer,
news:newsSliceReducer,
},

});

export default store;