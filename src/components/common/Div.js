import React from 'react';
import { View } from 'react-native';


const Div = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};
const styles = {
	containerStyle: {
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	}
};

export {Div};