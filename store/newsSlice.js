import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {newapi} from '../api/NewAPI';


export const getPosts = createAsyncThunk(
    'news/fetchTopHeadlines',
    async () => {
        // return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=56aae10f756e4ceba5849a56afb279a0')
        // .then((res)=>res.json()
        // ); 
      try {
        const response = await newapi.getTopHeadlines();
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

const newsSlice = createSlice({
  name: 'news',
  initialState:{
    articles:[],
    loading:false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
      });
  },
  
  
});

export default newsSlice.reducer;