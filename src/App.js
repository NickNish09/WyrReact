import React, {Component} from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Header, CardSection, Div, Button } from './components/common';

class App extends Component{
	
	render(){
		return (
			<ScrollView style={{flex: 1}}>
				<Header headerText="Categorias" />
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
		width: 250,
		height: 250
	}
};

export default App;