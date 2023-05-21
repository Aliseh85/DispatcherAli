import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../store/newsSlice';

const FavoriteTab = () => {
  const favorites = useSelector((state) => state.news.favorites);
  const dispatch = useDispatch();

  const renderArticle = ({ item }) => (
    <View style={styles.articleContainer}>
      <Image style={styles.image} source={{ uri: item.urlToImage }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity
        style={styles.unsaveButton}
        onPress={() => dispatch(removeFromFavorites(item))}
      >
        <Text style={styles.unsaveButtonText}>Unsave</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderArticle}
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
  unsaveButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  unsaveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FavoriteTab;