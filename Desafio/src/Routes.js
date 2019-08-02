import Home from './screen/Home';
import Categorias from './screen/Categorias';

import {createAppContainer, createStackNavigator} from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Pag1: Home,
    Pag2: Categorias,
  })
);

export default Routes;