import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Lists } from '../screens/Lists';
import { Shopping } from '../screens/Shopping';
import Icon  from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

const TabsRouter = () => {
  return(
    <Tab.Navigator screenOptions={{tabBarInactiveTintColor:'#555',
                                   tabBarActiveTintColor:'#fff',
                                   tabBarStyle:{backgroundColor:'gray'}}}>
      <Tab.Screen
        name="Home"
        component={Home}  
        options={{tabBarIcon: ({ color, size }) => (<Icon name="home" color={color} size={size} />),
                  headerShown:false}}/>
      <Tab.Screen 
        name="Listas" 
        component={Lists}  
        options={{tabBarIcon: ({ color, size }) => (<Icon name="tasks" color={color} size={size} />),
                  headerShown:false}}/>
      <Tab.Screen 
        name="Compras" 
        component={Shopping}  
        options={{tabBarIcon: ({ color, size }) => (<Icon name="shopping-cart" color={color} size={size} />),
                  headerShown:false}}/>
    </Tab.Navigator>
  )
}
export default TabsRouter;