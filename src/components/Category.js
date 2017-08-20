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
					<Button onPress={(category) => this.onButtonPress('vida')}>
						<Image
							style={styles.imageStyle}
							source={{uri: 'https://snes1990.files.wordpress.com/2011/09/1up.jpg?w=227&h=227'}}
						/>
					</Button>
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'https://cdn.pixabay.com/photo/2017/04/07/15/40/understand-2211225_960_720.jpg'}}
						/>
					</Button>
				</Div>
				<Div>	
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'http://www.publicdomainpictures.net/pictures/80000/nahled/film-strip-2.jpg'}}
						/>
					</Button>
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'https://image.freepik.com/free-icon/microscope_318-56723.jpg'}}
						/>
					</Button>
				</Div>
				<Div>	
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/49/turd-146305_960_720.png'}}
						/>
					</Button>
					<Button>
						<Image
							style={styles.imageStyle}
							source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Observable_universe_pbudassi.png/768px-Observable_universe_pbudassi.png'}}
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