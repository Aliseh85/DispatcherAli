import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect ,useEffect} from 'react';
import {
  Text,
  Pressable,
  Image,StyleSheet,ScrollView,
} from 'react-native';

function Terms() {
    const navigation=useNavigation<any>();
    useLayoutEffect(
      ()=>{
        navigation.setOptions(
          {
            headerTitle:'Sign In',
            headerShown:false,
          })
      }
    )
    return (  
      <ScrollView style={{ flex: 1,backgroundColor:'white', }}>
         <Pressable style={{flexDirection:'row',width:'100%',height:55,backgroundColor:'#262146' }} onPress={()=>
            {
                navigation.navigate('MainProfile');
            }}>
        <Image source={require('../images/ForwardIcon.png')} style={{marginTop:15,}}/>
        <Text style={{color:'white',marginTop:15,fontSize:16}}> Back</Text>

        </Pressable>
        <Text style={{width:343,height:32,fontSize:24,color:'#262146',marginLeft:16,}}>Terms & Privacy</Text>
        <Text style={{width:343,fontSize:14,color:'#5A5A89',marginLeft:16,lineHeight:16,}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nam quis tincidunt nunc lobortis id imperdiet volutpat aliquam. Purus felis lacus, in at elit quis adipiscing urna, at. Libero risus, at ultrices metus eu quisque nibh dictum. Nunc enim feugiat mattis convallis vehicula. Mattis ullamcorper tempus, sem egestas varius dapibus tincidunt. Ullamcorper nisi eget fringilla in pellentesque urna, integer platea in. Auctor blandit tellus enim vel blandit dignissim magna dolor.
Nec lorem amet risus elementum. Cursus eget sit id vitae elit non. Eleifend purus aliquam interdum leo nunc ultrices. Mattis dui nunc sed euismod quis mauris. Accumsan at nulla cras cursus sed.
Pretium nunc vitae risus pulvinar augue leo nisl. Tristique ipsum imperdiet magna sit. Mattis enim tempor in varius elementum sagittis. Sit proin mi, ut id id ac nam. Dui tellus est ut purus leo id sed lectus et et.
            </Text>
            <Text></Text>
            <Text style={{width:343,fontSize:14,color:'#5A5A89',marginLeft:16,lineHeight:16,}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nam quis tincidunt nunc lobortis id imperdiet volutpat aliquam. Purus felis lacus, in at elit quis adipiscing urna, at. Libero risus, at ultrices metus eu quisque nibh dictum. Nunc enim feugiat mattis convallis vehicula. Mattis ullamcorper tempus, sem egestas varius dapibus tincidunt. Ullamcorper nisi eget fringilla in pellentesque urna, integer platea in. Auctor blandit tellus enim vel blandit dignissim magna dolor.
Nec lorem amet risus elementum. Cursus eget sit id vitae elit non. Eleifend purus aliquam interdum leo nunc ultrices. Mattis dui nunc sed euismod quis mauris. Accumsan at nulla cras cursus sed.
Pretium nunc vitae risus pulvinar augue leo nisl. Tristique ipsum imperdiet magna sit. Mattis enim tempor in varius elementum sagittis. Sit proin mi, ut id id ac nam. Dui tellus est ut purus leo id sed lectus et et.
            </Text>
      </ScrollView>
  
  
    );
  }
  const styles = StyleSheet.create({editProfile:{
  }});
  export default Terms