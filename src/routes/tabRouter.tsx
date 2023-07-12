import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Lists } from '../screens/Lists';
import { Settings } from '../screens/Settings';
const Tab = createBottomTabNavigator();

const TabsRouter = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}  options={{headerShown:false}}/>
      <Tab.Screen name="Listas" component={Lists}  options={{headerShown:false}}/>
      <Tab.Screen name="Compras" component={Settings}  options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}
export default TabsRouter;