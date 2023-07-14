import React, { useEffect } from 'react'
import { StyleSheet, ActivityIndicator, View,Text,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export const Preload = () => {
  const navigation = useNavigation();

  
  useEffect(()=>{
   setTimeout(()=>{
    navigation.reset({
      index: 0,
      routes: [{ name: "Inicio" }as any]
    });
  },1000)
  },[])


  


  return(
    <View style={style.container}>
      <Image source={require('../../assets/img/checkList.png')} style={style.img}/>
      <Text style={style.title}>Supermarket List</Text>
      <ActivityIndicator />  
    </View>
  )
}

const style = StyleSheet.create({
  container:{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#5d5d5d' },
  title:{
    color:'#fff',
    fontWeight:'bold',
    paddingTop:10,
    fontSize:18,
    marginBottom:10
  },
  img:{
    width:100,
    height:100
  },
  icon:{
    fontSize:26,
    color:'gray'
  }
})

