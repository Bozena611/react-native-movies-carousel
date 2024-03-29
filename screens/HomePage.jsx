import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, ScrollView, View, SafeAreaView, Image, FlatList, Text, TouchableOpacity } from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";



const HomePage = () => {
	const navigation = useNavigation();
	const [carousels, setCarousels] = useState([]);
  const [isLoading, setLoading] = useState(true);

/* Fetch data from source and store it in state*/

  useEffect(()=> {
    fetch(`https://bozena611.github.io/data/movie_data.json`)
      .then((res) => res.json())
      .then(
        (data) => {
          setCarousels(data);
        }
      )
      .catch((error) => console.error(error))
      .finally(()=> setLoading(false));
  }, []);

  const renderItem = ({item}) => {
    let movies = [];

    if (item.movies) {
      movies = item.movies.map((row, i) => {
      	let title = row.title;
      	let year = row.year;
      	let duration = row.runtime;
      	let poster = row.posterUrl;
      	let director = row.director;
      	let actors = row.actors;
      	let plot = row.plot;

        return (
        	<TouchableOpacity key={i} style={{ flex: 1 }} onPress={() => navigation.navigate("MovieDetails", { title, year, duration, poster, director, actors, plot })}>
          	<View styles={{ width: '70%', height: 'auto' }}>
          		<View>
	          		<Image
	          			source={{uri: row.posterUrl}}
	          			style={{
				            resizeMode: "contain",
				            height: 120,
				            width: 150,
				            alignSelf: 'center',
				          }}
	          		/>
          		</View>
	         		<View>
          			<Text style={styles.movieTitle}>{row.title}</Text>
          		</View>
          	</View>
        	</TouchableOpacity>
        )
      })
    }

    return (
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
      	<View>
          <Text style={{ color: '#58A6FF', fontWeight: 'bold', padding: 20, fontSize: 20}}>
            {item.name}
          </Text>
          <View style={{ flex: 1 }}>
	          <ScrollView
	         		style={{ flex: 1 }}
	          	horizontal={true}
	  					showsHorizontalScrollIndicator={false}
	          >
	         		{movies}
	         	</ScrollView>
	        </View>
	      </View>
      </View>
    )
  }

	return (
		<SafeAreaView style={{ flex: 1 }}>
	    <FocusedStatusBar />
	    {isLoading ? <Text style={{color: '#E4E6EB'}}>Loading...</Text> : (
		    <FlatList
		    	style={styles.flatlist}
		    	data={carousels}
		    	keyExtractor={(item, index) => index}
		    	renderItem={renderItem}
		    />
	    )}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
  flatlist: {
  	flex: 1,
  	paddingTop: 10,
  },
  movieTitle: {
  	textAlign: 'center',
  	color: '#E4E6EB',
  	margin: 5,
  	padding: 5,
  }
});

export default HomePage;