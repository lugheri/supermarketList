import { View,Text } from 'react-native';
export const Lists = () => {
  return(
    <View style={styles.container}>
      <Text>Lists</Text>
    </View>
  )
}


const styles = {
  container:{
    backgroundColor:'#5d5d5d', flex: 1, alignItems: 'center', justifyContent: 'center'
  }
}