import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Menu from './components/Menu';
import Categorias from './components/Category';
import Favoritas from './components/Favoritas';
import Mortes from './components/Categorias/Mortes';
import Comidas from './components/Categorias/Comidas';
import Vida from './components/Categorias/Vida';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{  }}>
			<Scene key="root">
				<Scene key="menu" component={Menu} title="Menu" initial/>
				<Scene key="categorias" component={Categorias} title="Categorias" />
				<Scene key="favoritas" component={Favoritas} title="Perguntas Favoritas" />
				<Scene key="mortes" component={Mortes} title="Categoria Mortes" />
				<Scene key="comidas" component={Comidas} title="Categoria Comidas" />
				<Scene key="vida" component={Vida} title="Categoria Vida" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;