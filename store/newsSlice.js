import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { newapi } from '../api/NewAPI';

export const getPosts = createAsyncThunk(
  'news/fetchTopHeadlines',
  async (_, { getState, rejectWithValue }) => {
    const { page } = getState().news;
    try {
      const response = await newapi.getTopHeadlines(page);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'news/addToFavorites',
  async (article, { getState }) => {
    const { favorites } = getState().news;
    const articleExists = favorites.some((favArticle) => favArticle.title === article.title);
    if (!articleExists) {
      const updatedFavorites = [...favorites, article];
      return updatedFavorites;
    }
    return favorites;
  }
);

export const removeFromFavorites = createAsyncThunk(
  'news/removeFromFavorites',
  async (article, { getState }) => {
    const { favorites } = getState().news;
    const updatedFavorites = favorites.filter((favArticle) => favArticle.title !== article.title);
    return updatedFavorites;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    favorites: [],
    loading: false,
    page: 1,
    hasMore: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.articles.push(...action.payload);
        state.page += 1;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export default newsSlice.reducer;
