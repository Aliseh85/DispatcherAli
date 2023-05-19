
import React, { useLayoutEffect ,useEffect} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
const FavoriteScreen=()=> {
    return (
      <View style={{ flex: 1, }}>
          <View style={{width:'100%',height:55,backgroundColor:'#262146' }}>
        <Image source={require('../../images/logo1.png')} style={{width:32,height:32,top:10,left:20,}}/>
        </View>
        <Text style={{width:343,height:32,fontSize:24,color:'#262146',marginLeft:16,}}>Saved articles</Text>
      </View>
    );
  }

  export default FavoriteScreen;
  