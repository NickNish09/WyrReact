import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import { Div } from './common';
import Button from 'apsl-react-native-button'
import { Actions } from 'react-native-router-flux';

class Menu extends Component {
	onButtonPress(option){
		Actions[option]();
	}
	
	render(){
		const {buttonStyle,textStyle,containerStyle} = styles
		return(
			<ScrollView style={containerStyle}>
				<Div>
					<Button 
					onPress={(option) => this.onButtonPress('categorias')} 
					style={buttonStyle} 
					textStyle={textStyle}
					>
						Categorias
					</Button>
				</Div>
				<Div>
					<Button 
					onPress={(option) => this.onButtonPress('favoritas')} 
					style={buttonStyle} 
					textStyle={textStyle}
					>
						Favoritas
					</Button>
				</Div>
				<Div>
					<Button 
					onPress={(option) => this.onButtonPress('achievements')} 
					style={buttonStyle} 
					textStyle={textStyle}
					>
						Achievements
					</Button>
				</Div>
			</ScrollView>
		);
	}
};

const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: 'rgba(70,33,188,0.75)',
		borderRadius: 40,
		height: 70
	},
	textStyle: {
		fontSize: 20,
		color: '#191a1c'
	},
	containerStyle: {
		paddingTop: 5
	}
}

export default Menu;