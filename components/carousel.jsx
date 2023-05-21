import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomePage from '../components/HomePage';

const Carousel = () => {
  const carouselItems = [
    {
      title: 'Dispatcher',
      description: 'Dispatcher.',
    },
    {
      title: 'Dispatcher',
      description: 'ali.',
    },
    {
      title: 'Dispatcher',
      description: 'seh.',
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();

  const handlePageChange = (event) => {
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    const currentPage = Math.round(contentOffset.x / Dimensions.get('window').width);
    setCurrentPage(currentPage);
  };

  const handleSkip = () => {
    navigation.navigate('HomePage'); // Navigate to the homepage file
  };

  const handleNext = () => {
    if (currentPage < carouselItems.length - 1) {
      scrollViewRef.current.scrollTo({
        x: (currentPage + 1) * Dimensions.get('window').width,
        animated: true,
      });
    } else {
      navigation.navigate('HomePage'); // Navigate to the homepage file
    }
  };

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handlePageChange}
        scrollEventThrottle={16}
      >
        {carouselItems.map((item, index) => (
          <View key={index} style={styles.carouselItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
      <Image source={require('../images/Rectangle1.png')} style={styles.image} />
      <Image source={require('../images/Rectangle2.png')} style={styles.image} />
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={[styles.buttonText,{color:'black'}]}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>{currentPage === carouselItems.length - 1 ? 'Finish' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDots}>
          {carouselItems.map((_, index) => (
            <View
              key={index}
              style={[styles.paginationDot, index === currentPage && styles.paginationDotActive]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    backgroundColor: '#262146', // Update to desired background color
  },
  carouselItem: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingHorizontal: 20,
    top:80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
    textAlign: 'center',
    

  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  skipButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Update to desired button background color
    borderRadius: 20,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white', // Update to desired button text color
    fontWeight: 'bold',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#555',
  },
  image: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    width: 250,
    height: 250,
  },
});

export default Carousel;
