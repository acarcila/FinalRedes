import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import Home from './Home';

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;