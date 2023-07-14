import { SafeAreaView, StyleSheet,View,Text,FlatList } from 'react-native';
import { Card } from '../components/Card';

const shopingCart = require('../../assets/img/cart.png') 
const checklist = require('../../assets/img/checkList.png')
const cardsData = [
  {id:'1',title:'Listas',description:'Listas de compras cadastradas',image:shopingCart,bg:'#3498db'},
  {id:'2',title:'Compras',description:'',image:checklist,bg:'#1abc9c'}
]

export const Home = () => {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Home</Text>
      </View>
      <FlatList 
        style={styles.flatList}
        data={cardsData}
        renderItem={({item}) => <Card title={item.title} image={item.image} color={item.bg}/>}
        keyExtractor={ item => item.id } 
      />     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#5d5d5d', flex: 1, alignItems: 'center', justifyContent: 'center',overflow:'scroll'
  },
  header:{
    width:'100%',
    backgroundColor:'#333',
    padding:15,
    height:80,
    justifyContent:'flex-end',
    alignItems:'flex-start'
  },
  text:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold'
  },
  flatList:{
    width:'100%',
    marginTop:50
  }
})