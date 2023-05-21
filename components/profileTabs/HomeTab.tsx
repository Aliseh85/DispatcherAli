import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar, FlatList, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, addToFavorites } from '../../store/newsSlice';

const HomeScreen = () => {
  const articles = useSelector((state) => state.news.articles);
  const favorites = useSelector((state) => state.news.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const isArticleSaved = (article) => {
    return favorites.some((favArticle) => favArticle.title === article.title);
  };

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
});

export default HomeScreen;