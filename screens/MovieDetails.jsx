import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const MovieDetails = ({row, navigation, route}) => {
	console.log("row", row)
	const id = route.params.id;
	return (
		<View>
			<TouchableOpacity>
		    <Text
		    style={{ color: 'blue' }}
		    onPress={() => navigation.goBack()}>Back to List</Text>
				</TouchableOpacity>
			<Text>
				MovieDetails for {id}
			</Text>
		</View>
		)
}

export default MovieDetails;