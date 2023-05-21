import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FlatList, View, Text, ActivityIndicator, Button, Image } from 'react-native';
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

const NewsScreen = () => {
const dispatch = useDispatch();
const { articles, loading, page, hasMore } = useSelector(
(state) => state.news
);

useEffect(() => {
dispatch(getPosts());
}, [dispatch]);

const handleLoadMore = () => {
if (!loading && hasMore) {
dispatch(getPosts());
}
};

const handleAddToFavorites = (article) => {
dispatch(addToFavorites(article));
};

const renderArticle = ({ item }) => {
return (
<View>
<Image source={{ uri: item.urlToImage }} style={{ width: 100, height: 100 }} />
<Text>{item.title}</Text>
<Text>{item.description}</Text>
<Button
title="Add to Favorites"
onPress={() => handleAddToFavorites(item)}
/>
</View>
);
};

const renderFooter = () => {
if (!hasMore) {
return (
<View>
<Text>No more articles to load.</Text>
</View>
);
}if (loading) {
  return (
    <View>
      <ActivityIndicator size="small" color="gray" />
    </View>
  );
}

return null;};

return (
<View style={{ flex: 1 }}>
<FlatList
data={articles}
renderItem={renderArticle}
keyExtractor={(item) => item.id.toString()}
onEndReached={handleLoadMore}
onEndReachedThreshold={0.5}
ListFooterComponent={renderFooter}
/>
</View>
);
};

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
});
},
});

export default newsSlice.reducer;
export { NewsScreen };