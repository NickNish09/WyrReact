import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
	const { buttonStyles, textStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyles}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#7ca2b2',
		fontSize: 20,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyles: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 3,
		borderColor: '#0c1d38',
		marginLeft: 4,
		marginRight: 0
	}
};

export { Button };