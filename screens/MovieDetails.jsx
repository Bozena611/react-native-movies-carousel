import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

/* Display details for the chosen movie */

const MovieDetails = ({ title, year, duration, poster, director, actors, plot, navigation, route }) => {
	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity>
			  <Text style={styles.backLink}
			    onPress={() => navigation.goBack()}>
			    Back to List
			  </Text>
			</TouchableOpacity>
			<View style={styles.container}>
				<Text style={{ color: '#E4E6EB', margin: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
					{route.params.title}
				</Text>
				<View style={{ flexDirection: "row", alignSelf: 'flex-start'}}>
					<Text style={styles.yearMins}>
						{route.params.year}
					</Text>
					<Text style={styles.yearMins}>
						{route.params.duration} min
					</Text>
				</View>
				<Image
	  			source={{uri: route.params.poster}}
	  			style={{
	          resizeMode: "center",
	          height: '50%',
	          width: '50%'
	        }}
	  		/>
		  	<View>
					<Text style={[styles.textWhite, styles.textMargin]}>
						Directed by: <Text style={{ color: '#58A6FF' }}>{route.params.director}</Text>
					</Text>
					<Text style={[styles.textWhite, styles.textMargin]}>
						Actors: <Text style={{ color: '#58A6FF' }}>{route.params.actors}</Text>
					</Text>
					<Text style={[styles.textWhite, styles.textMargin]}>
						{route.params.plot}
					</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	backLink: {
		color: '#58A6FF',
		fontSize: 15,
		paddingTop: 30,
		paddingBottom: 10,
		paddingLeft: 30,
		fontSize: 17,
	},
	textBorder: {
		borderStyle: 'solid',
		borderColor: '#E4E6EB',
		borderWidth: 1,
	},
	textWhite: {
		color: '#E4E6EB',
	},
	textMargin: {
		margin: 4,
	},
	yearMins: {
		color: '#E4E6EB',
		fontSize: 11,
		marginTop: 10,
		marginBottom: 0,
		marginLeft: 6,
		marginRight: 10,
		padding: 8,
		borderStyle: 'solid',
		borderColor: 'white',
		borderWidth: 0.6,
		borderRadius: 10
	},
 	container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#242526',
    borderRadius: 15,
    backgroundColor: '#242526',
    margin: 20,
    padding: 15,
  },
});

export default MovieDetails;