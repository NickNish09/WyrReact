import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import {Card, CardSection, Div, Button} from '../common';

class TelaPergunta extends Component {
	
	onButtonPress(){

	}

	render(){
	const { textStyle, btnStyle } = styles;
		return(
			<Card>
				<CardSection>
					<Text style={textStyle}>Descrição da Pergunta</Text>
				</CardSection>
				<CardSection>
					<Button>
						Opção 1
					</Button>
				</CardSection>
				<CardSection>
					<Button>
						Opção 2
					</Button>
				</CardSection>
				
				<CardSection>
					<Button> To de Boa </Button>
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
		height: 114,
		width: 114
	}
};

export default TelaPergunta;