import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Menu from './components/Menu';
import Categorias from './components/Categorias';
import Mortes from './components/Mortes';
import Comidas from './components/Comidas';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{  }}>
			<Scene key="root">
				<Scene key="menu" component={Menu} title="Menu" initial/>
				<Scene key="categorias" component={Categorias} title="Categorias" />
				<Scene key="mortes" component={Mortes} title="Categoria Mortes" />
				<Scene key="comidas" component={Comidas} title="Categoria Comidas" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;