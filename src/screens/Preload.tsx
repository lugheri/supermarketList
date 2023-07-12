import React, {useEffect } from 'react'
import { View,Text,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
export const Preload = () => {
  const navigation = useNavigation();

  
  useEffect(()=>{
   setTimeout(()=>{
    navigation.reset({
      index: 0,
      routes: [{ name: 'Inicio' }]
    });
  },300000)
  },[])

  return(
    <View style={style.container}>
      <Image source={require('../../assets/img/checkList.png')} style={style.img}/>
      <Text style={style.title}><FontAwesomeIcon icon="square-check" />Supermarket List</Text>
    </View>
  )
}

const style = {
  container:{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#5d5d5d' },
  title:{
    color:'#fff',
    fontWeight:'bold',
    paddingTop:10,
    fontSize:18,
  },
  img:{
    width:100,
    height:100
  }
}

