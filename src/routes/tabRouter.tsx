import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Lists } from '../screens/Lists';

const Tab = createBottomTabNavigator();

const TabsRouter = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home}/>
      <Tab.Screen name="lists" component={Lists}/>
    </Tab.Navigator>
  )
}
export default TabsRouter;