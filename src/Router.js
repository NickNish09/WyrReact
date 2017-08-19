import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Menu from './components/Menu';
import Categorias from './components/Categorias';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{  }}>
			<Scene key="root">
				<Scene key="menu" component={Menu} title="Menu" />
				<Scene key="categorias" component={Categorias} title="Categorias" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;