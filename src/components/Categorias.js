import React, {Component} from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Header, CardSection, Div, Button } from './common';
import {Actions} from 'react-native-router-flux';

class Categorias extends Component{
	
	onButtonPress(category){
		Actions[category]();
	}

	render(){
		return (
			<ScrollView style={{flex: 1}}>
				<Div>	
					<Button onPress={(category) => this.onButtonPress('mortes')}>
						<Image
							style={styles.imageStyle}
							source={{uri: 'http://charivari.pt/wp-content/uploads/2014/12/A-morte-do-Clip-Art-pela-Microsoft.jpg'}}
						/>
					</Button>
					<Button onPress={(category) => this.onButtonPress('comidas')}>
						<Image
							style={styles.imageStyle}
							source={{uri: 'http://www.clker.com/cliparts/O/r/C/H/P/j/hamburguer-hi.png'}}
						/>
					</Button>
					
				</Div>

				<Div>	
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'http://charivari.pt/wp-content/uploads/2014/12/A-morte-do-Clip-Art-pela-Microsoft.jpg'}}
						/>
					</Button>
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'http://www.clker.com/cliparts/O/r/C/H/P/j/hamburguer-hi.png'}}
						/>
					</Button>
				</Div>
				<Div>	
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'http://charivari.pt/wp-content/uploads/2014/12/A-morte-do-Clip-Art-pela-Microsoft.jpg'}}
						/>
					</Button>
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'http://www.clker.com/cliparts/O/r/C/H/P/j/hamburguer-hi.png'}}
						/>
					</Button>
				</Div>
				<Div>	
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'http://charivari.pt/wp-content/uploads/2014/12/A-morte-do-Clip-Art-pela-Microsoft.jpg'}}
						/>
					</Button>
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'http://www.clker.com/cliparts/O/r/C/H/P/j/hamburguer-hi.png'}}
						/>
					</Button>
				</Div>
				<Div>	
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'http://charivari.pt/wp-content/uploads/2014/12/A-morte-do-Clip-Art-pela-Microsoft.jpg'}}
						/>
					</Button>
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'http://www.clker.com/cliparts/O/r/C/H/P/j/hamburguer-hi.png'}}
						/>
					</Button>
				</Div>
			</ScrollView>
		);
	}
}

const styles = {
	imageStyle: {
		width: 300,
		height: 300
	}
};

export default Categorias;