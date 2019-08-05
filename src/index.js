import Page1 from './Page1';
import Page2 from './Page2';
import Home from './components/Home';
import Resultados from './components/Resultados';
import Details from './components/Details';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    About: Page2,
    Resultados: Resultados,
    Details: Details
  })
);

export default Routes;