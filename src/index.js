import Home from './components/Home';
import Resultados from './components/Resultados';
import Details from './components/Details';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    Resultados: Resultados,
    Details: Details
  })
);

export default Routes;