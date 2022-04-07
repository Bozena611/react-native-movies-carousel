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
    fetch(`https://raw.githubusercontent.com/24i/smartapps-test/main/data.json`)
      .then((res) => res.json())
      .then(
        (data) => {
          setCarousels(data.carousels);
        }
      )
      .catch((error) => console.error(error))
      .finally(()=> setLoading(false));
  }, []);

  const renderItem = ({item}) => {
    let movies = [];

    if (item.items) {
      movies = item.items.map((row, i) => {
      	let name=row.title;
      	let year=row.year;
      	let duration=row.duration;
      	let poster=row.posterUrl;
      	let director=row.director;
      	let actors=row.actors;
      	let plot=row.plot;

        return (
        	<TouchableOpacity key={i} onPress={() => navigation.navigate("MovieDetails", { name, year, duration, poster, director, actors, plot })}>
          	<View styles={{ width: '70%', height: 'auto' }}>
          		<View>
	          		<Image
	          			source={{uri: row.posterUrl}}
	          			style={{
				            resizeMode: "center",
				            height: 120,
				            width: 150
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
      <View>
      {isLoading ? <Text style={{color: '#E4E6EB'}}>Loading...</Text> :
	      (<View>
          <Text style={{ color: '#58A6FF', fontWeight: 'bold', padding: 20, fontSize: 20}}>
            {item.title}
          </Text>
          <View>
	          <ScrollView
	         		style={{ flex: 1 }}
	          	horizontal={true}
	  					showsHorizontalScrollIndicator={false}
	          >
	         		{movies}
	         	</ScrollView>
	        </View>
	      </View>
	      )}
      </View>
    )
  }


	return (
		<SafeAreaView style={{ flex: 1 }}>
	    <FocusedStatusBar />
	    <FlatList
	    	style={styles.flatlist}
	    	data={carousels}
	    	keyExtractor={(item, index) => index}
	    	renderItem={renderItem}
	    />
		</SafeAreaView>
	);
}


const styles = StyleSheet.create({
 /* container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  */
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