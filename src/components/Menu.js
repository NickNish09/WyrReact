import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Button, Div } from './common';
import { Actions } from 'react-native-router-flux';

class Menu extends Component {
	onButtonPress(){
		Actions.categorias();
	}

	render(){
		return(
			<View>
				<Div>	
					<Button onPress={this.onButtonPress.bind(this)}>
						Categorias
					</Button>
				</Div>
			</View>
		);
	}
};

export default Menu;