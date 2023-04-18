import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}