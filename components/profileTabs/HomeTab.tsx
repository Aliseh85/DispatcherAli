

import React, { useLayoutEffect ,useEffect} from 'react';
import {
  Text,
  View,Image,StyleSheet,SafeAreaView,ScrollView,StatusBar,

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import {getPosts} from '../../store/newsSlice';


const HomeScreen=()=> {
    const email = useSelector(state => state.email.value);
    const articles=useSelector(state=>state.news.articles);
    const loading=useSelector(state=>state.news.loading);
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getPosts());
        
    },[])
    // const art=[{"source":{"id":null,"name":"CNBC"},"author":"Holly Ellyatt","title":"Putin's 'one-tank' military parade was an embarrassment for Russia, analysts say - CNBC","description":"Russia's scaled-down Victory Day military parade highlighted the country's depleted resources.","url":"https://www.cnbc.com/2023/05/10/putins-one-tank-military-parade-was-an-embarrassment-for-russia.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/107238685-1683702861735-gettyimages-1253266131-RUS_Vicotry_Day_Parade_Takes_Place_In_Red_Square.jpeg?v=1683709838&w=1920&h=1080","publishedAt":"2023-05-10T09:10:38Z","content":"A Soviet T-34 tank, the only tank on display in Russia's Victory Day parade on May 9, 2023, rolls through Red Square.\r\nRussia's scaled-down Victory Day military parade showed not only Moscow's insecu… [+5841 chars]"}]
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView>
          {articles.map((item)=>{return (
          <View style={{left:8,width:320}}>
          <Image style={styles.tinyLogo}
          source={{
            uri: item.urlToImage,
          }}
        />
        <Text style={{display:'flex',fontSize:14,color:'#5A5A89',fontWeight:400}}>{item.publishedAt}</Text>
        <Text style={{display:'flex',fontSize:24,color:'#14142B',fontWeight:500}}>{item.title}</Text>
        <Text style={{display:'flex',fontSize:14,color:'#5A5A89',fontWeight:400}}>{item.description}</Text>
        </View>
          )})}
        </ScrollView>
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