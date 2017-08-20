import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import {Card, CardSection, Div} from '../common';
import Button from 'apsl-react-native-button'

class TelaPergunta extends Component {
	
	onButtonPress(){

	}

	render(){
	const { textStyle, btnStyle, btnRed, btnBlue, btnDeBoa } = styles;
		return(
			<Card>
				<CardSection>
					<Text style={textStyle}>Descrição da Pergunta</Text>
				</CardSection>
				<CardSection>
					<Button style={btnRed}>
						Opção 1
					</Button>
				</CardSection>
				<CardSection>
					<Button style={btnBlue}>
						Opção 2
					</Button>
				</CardSection>
				
				<CardSection>
					<Button style={btnDeBoa}> To de Boa </Button>
				</CardSection>
				<Div>
					<Button >
						<Image style={btnStyle}
						source={require('../../img/idea.png')}
						/>
					</Button>
				</Div>
			</Card>
		);
	}
}

const styles = {
	textStyle : {
		textAlign: 'center',
		textAlignVertical: 'center',
		fontSize: 22,
		flex: 1
	},
	btnStyle : {
		height: 54,
		width: 54
	},
	btnRed : {
		backgroundColor: 'red',
		flex: 1
	},
	btnBlue :{
		backgroundColor: 'blue',
		flex: 1
	},
	btnDeBoa :{
		backgroundColor: 'green',
		flex: 1
	}
};

export default TelaPergunta;