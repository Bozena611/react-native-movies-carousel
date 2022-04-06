import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";



const HomePage = () => {
const [carousels, setCarousels] = useState([]);
  const [isLoading, setLoading] = useState(true);
  /*const [error, setError] = useState(null);*/
    console.log("carousels-test", carousels);


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

	return (
		 <SafeAreaView style={{ flex: 1 }}>
	    <FocusedStatusBar />
	    <FlatList
	    	data={carousels}
	    	keyExtractor={item => item.key}
	    	renderItem={({ item }) => <Text>{item.title}</Text>}
	    		/>
		</SafeAreaView>
		);
}

export default HomePage;