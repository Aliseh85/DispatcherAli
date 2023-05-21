import React, { useEffect, useCallback } from 'react';
import { View, Image, StyleSheet, StatusBar, FlatList, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, addToFavorites } from '../../store/newsSlice';

const HomeScreen = () => {
  const articles = useSelector((state) => state.news.articles);
  const favorites = useSelector((state) => state.news.favorites);
  const loading = useSelector((state) => state.news.loading);
  const page = useSelector((state) => state.news.page);
  const hasMore = useSelector((state) => state.news.hasMore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const isArticleSaved = (article) => {
    return favorites.some((favArticle) => favArticle.title === article.title);
  };

  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore) {
      dispatch(getPosts());
    }
  }, [loading, hasMore, dispatch]);

  const renderItem = ({ item }) => (
    <View style={styles.articleContainer}>
      <Image style={styles.image} source={{ uri: item.urlToImage }} />
      <Text style={styles.publishedAt}>{item.publishedAt}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      {!isArticleSaved(item) && (
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => dispatch(addToFavorites(item))}
        >
          <Text style={styles.favoriteButtonText}>Add to Favorites</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const renderFooter = () => {
    if (!hasMore) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.noMoreText}>No more articles to load.</Text>
        </View>
      );
    } else if (loading) {
      return (
        <View style={styles.footerContainer}>
          <ActivityIndicator size="small" color="#888" />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../images/logo1.png')} style={styles.logo} />
      </View>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#262146',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  logo: {
    width: 32,
    height: 32,
  },
  contentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  articleContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  publishedAt: {
    fontSize: 14,
    color: '#5A5A89',
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    color: '#14142B',
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: '#5A5A89',
    marginTop: 5,
  },
  favoriteButton: {
    backgroundColor: '#FFC107',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  favoriteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  noMoreText: {
    fontSize: 16,
    color: '#888',
  },
});

export default HomeScreen;