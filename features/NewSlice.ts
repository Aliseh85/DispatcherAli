import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {newapi} from '../api/NewAPI';
interface NewsState {
  articles: any[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

export const fetchTopHeadlines = createAsyncThunk(
    'news/fetchTopHeadlines',
    async (_, { dispatch, rejectWithValue }) => {
      try {
        const response = await newapi.getTopHeadlines();
        return response.data.articles;
      } catch (error:any) {
        return rejectWithValue(error.message);
      }
    }
  );

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTopHeadlines.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTopHeadlines.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
        state.error = null;
      })
      .addCase(fetchTopHeadlines.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch news';
      });
  },
  
  
});

export default newsSlice.reducer;
