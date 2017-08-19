import React, {Component} from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Header, CardSection, Div, Button } from './common';

class Categorias extends Component{
	
	onButtonPress(){
		
	}

	render(){
		return (
			<ScrollView style={{flex: 1}}>
				<Div>	
					<Button onPress={this.onButtonPress.bind(this)}>
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