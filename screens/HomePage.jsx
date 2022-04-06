import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, SafeAreaView, Image, FlatList, Text, TouchableOpacity } from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";



const HomePage = () => {
	const navigation = useNavigation();
	const [carousels, setCarousels] = useState([]);
  const [isLoading, setLoading] = useState(true);
  /*const [error, setError] = useState(null);*/
   /* console.log("carousel array", carousels);*/


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
      if(item.items) {
        movies = item.items.map((row, i) => {
          return (
          	<TouchableOpacity key={i} onPress={() => navigation.navigate("MovieDetails", { row })}>
          	<View>
          		<Image
          			source={{uri: row.posterUrl}}
          			style={{
			            resizeMode: "center",
			            height: 100,
			            width: 200
			          }}
          		/>
          		<Text>{row.title}</Text>
          	</View>
          	</TouchableOpacity>
          )
        })
      }

      return (
        <View>
          <Text style={{ color: 'red', fontWeight: 'bold'}}>
            {item.title}
          </Text>
          <View style={styles.container}>
         		{movies}
         	</View>
        </View>
      )
    }


	return (
		 <SafeAreaView style={{ flex: 1 }}>
	    <FocusedStatusBar />
	    <FlatList
	    	data={carousels}
	    	keyExtractor={(item, index) => index}
	    	renderItem={renderItem}
	    		/>
		</SafeAreaView>
		);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;