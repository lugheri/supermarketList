import { View,Text } from 'react-native';
export const Home = () => {
  return(
    <View style={styles.container}>
      <Text>Home </Text>
      
    </View>
  )
}

const styles = {
  container:{
    backgroundColor:'#5d5d5d', flex: 1, alignItems: 'center', justifyContent: 'center'
  }
}