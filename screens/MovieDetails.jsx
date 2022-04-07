import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

const MovieDetails = ({ name, year, duration, poster, director, actors, plot, navigation, route }) => {
	return (
		<View>
			<TouchableOpacity>
		    <Text
		    style={{ color: '#58A6FF', fontSize: 15 }}
		    onPress={() => navigation.goBack()}>Back to List</Text>
				</TouchableOpacity>
			<Text style={{ color: '#E4E6EB' }}>
				MovieDetails for {route.params.name}
			</Text>
			<Text style={{ color: '#E4E6EB' }}>
				{route.params.year}
			</Text>
			<Text style={{ color: '#E4E6EB' }}>
				{route.params.duration} min
			</Text>
			<Image
  			source={{uri: route.params.poster}}
  			style={{
          resizeMode: "center",
          height: 100,
          width: 150
        }}
  		/>
			<Text style={{ color: '#E4E6EB' }}>
				Directed by: {route.params.director}
			</Text>
			<Text style={{ color: '#E4E6EB' }}>
				Actors: {route.params.actors}
			</Text>
			<Text style={{ color: '#E4E6EB' }}>
				{route.params.plot}
			</Text>
		</View>
		)
}

export default MovieDetails;