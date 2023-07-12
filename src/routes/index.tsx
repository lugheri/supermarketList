import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsRouter from './tabRouter';
import { Preload } from '../screens/Preload';

const Stack = createNativeStackNavigator();


const Router = () => {
  return(
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Preload" component={Preload} options={{headerShown:false}}/>
        <Stack.Screen name="Inicio" component={TabsRouter} options={{headerShown:false}} />
        
       </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Router;