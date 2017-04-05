import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';

export default StackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
