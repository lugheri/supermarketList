import { Image, StyleSheet,View,Text } from 'react-native';

export const Card = (props:any) => {
  return(
    <View style={[styles.card,{backgroundColor:props.color}]}>
      <View style={styles.contentCard}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <Image source={props.image} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#5d5d5d', flex: 1, alignItems: 'center', justifyContent: 'center',overflow:'scroll'
  },
  card:{    
    width:'90%',
    padding:15,
    borderRadius:5,
    flexDirection:'row',
    margin:10,
  },  
  contentCard:{
    flex:1,
  },
  title:{
    color:"#ffffff",
    fontWeight:'800',
    fontSize:24
  },
  image:{
    width:100,
    height:100
  },
  cardList:{
    backgroundColor:'#3498db',
  },
  cardShopping:{
    backgroundColor:'#1abc9c',
  }
})