import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Div } from './common';
import Button from 'apsl-react-native-button'
import { Actions } from 'react-native-router-flux';

class Menu extends Component {
	onButtonPress(){
		Actions.categorias();
	}
	
	render(){
		const {buttonStyle,textStyle} = styles
		return(
			<View>
				<Div>
					<Button 
					onPress={this.onButtonPress.bind(this)} 
					style={buttonStyle} 
					textStyle={textStyle}
					>
						Categorias
					</Button>
				</Div>
			</View>
		);
	}
};

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: 'rgba(70,33,188,0.75)'
	},
	textStyle: {
		fontSize: 20,
		color: '#191a1c'
	}
}

export default Menu;