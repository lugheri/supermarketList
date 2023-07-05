import { NavigationContainer } from '@react-navigation/native';
import TabsRouter from './tabRouter';

const Router = () => {
  return(
    <NavigationContainer>
      <TabsRouter/>
    </NavigationContainer>
  )
}
export default Router;