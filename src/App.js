import React, {Component} from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Header, CardSection, Div, Button } from './components/common';
import RouterComponent from './Router';
import Categorias from './components/Category';
import Menu from './components/Menu';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import ReduxThunk from 'redux-thunk';
import { Actions } from 'react-native-router-flux';

class App extends Component{
	onButtonPress(){
		Actions.categorias();
	}
	render(){
		//const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		
		return(
			<RouterComponent />
		);
	}	
};

export default App;