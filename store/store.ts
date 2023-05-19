import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import emailReducer from './emailSlice'
import newsSliceReducer from './newsSlice';

const store = configureStore({

reducer: {
email:emailReducer,
news:newsSliceReducer,
},
middleware: [thunk],
});

export default store;