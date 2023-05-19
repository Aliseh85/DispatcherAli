

import React, { useLayoutEffect ,useEffect} from 'react';
import {
  Text,
  View,Image,StyleSheet,StatusBar,FlatList,ListRenderItemInfo,

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import {getPosts} from '../../store/newsSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';

type News={urlToImage:any,publishedAt:any,title:any,description:any}
const HomeScreen=()=> {
    const articles=useSelector((state:{news:any})=>state.news.articles);
    const dispatch=useDispatch<ThunkDispatch<any,any,any>>();
    useEffect(()=>{
      dispatch(getPosts());
    },[])
    // const art=[{"source":{"id":null,"name":"CNBC"},"author":"Holly Ellyatt","title":"Putin's 'one-tank' military parade was an embarrassment for Russia, analysts say - CNBC","description":"Russia's scaled-down Victory Day military parade highlighted the country's depleted resources.","url":"https://www.cnbc.com/2023/05/10/putins-one-tank-military-parade-was-an-embarrassment-for-russia.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/107238685-1683702861735-gettyimages-1253266131-RUS_Vicotry_Day_Parade_Takes_Place_In_Red_Square.jpeg?v=1683709838&w=1920&h=1080","publishedAt":"2023-05-10T09:10:38Z","content":"A Soviet T-34 tank, the only tank on display in Russia's Victory Day parade on May 9, 2023, rolls through Red Square.\r\nRussia's scaled-down Victory Day military parade showed not only Moscow's insecu… [+5841 chars]"}]
   
    const renderItem = ({ item }:ListRenderItemInfo<News>) => 
    {
      return (
        <View style={{left:8,width:320}}>
        <Image style={styles.tinyLogo}
        source={{
          uri: item.urlToImage,
        }}
      />
      <Text style={{display:'flex',fontSize:14,color:'#5A5A89'}}>{item.publishedAt}</Text>
      <Text style={{display:'flex',fontSize:24,color:'#14142B'}}>{item.title}</Text>
      <Text style={{display:'flex',fontSize:14,color:'#5A5A89'}}>{item.description}</Text>
      </View>
        )}
    

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{width:'100%',height:55,backgroundColor:'#262146' }}>
        <Image source={require('../../images/logo1.png')} style={{width:32,height:32,top:10,left:20,}}/>
        </View>
        <FlatList<News>
           data={articles}
           renderItem={renderItem}
           keyExtractor={(item, index) => index.toString()}
       />
      </View>
    );
  }
  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    tinyLogo: {
      width: 320,
      height: 150,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });