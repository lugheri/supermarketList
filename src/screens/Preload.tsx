import React, { useRef,useEffect } from 'react'
import { Animated, View,Text,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
export const Preload = () => {
  const navigation = useNavigation();

  
  useEffect(()=>{
   setTimeout(()=>{
    navigation.reset({
      index: 0,
      routes: [{ name: 'Inicio' }]
    });
  },1000)
  },[])

  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '350deg'],
  });

  return(
    <View style={style.container}>
      <Image source={require('../../assets/img/checkList.png')} style={style.img}/>
      <Text style={style.title}>Supermarket List</Text>
      <Animated.View style={style.animated}>
        <Animated.View style={{transform: [{ rotate: spin }]}}>
          <FontAwesome name="circle-o-notch" spin style={style.icon} />
        </Animated.View>
      </Animated.View>
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
  },
  icon:{
    fontSize:26,
    color:'gray'
  },
  animated:{
    paddingTop:10,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

