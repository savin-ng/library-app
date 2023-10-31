import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { popularBooks } from "../../data/dataArrays";
import { getCategoryName, getRecipesByRecipeName, getRecipesByCategoryName, getRecipesByIngredientName } from "../../data/MockDataAPI";
import { TextInput } from "react-native-gesture-handler";

export default function SearchScreen(props) {
  const { navigation } = props;

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
          <TextInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            value={value}
            placeholder="Seatch for books"
          />
          <Pressable onPress={() => handleSearch("")}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/close.png")} />
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  useEffect(() => {}, [value]);

  const handleSearch = (text) => {
    setValue(text);
    var recipeArray1 = getRecipesByRecipeName(text);
    var recipeArray2 = getRecipesByCategoryName(text);
    var recipeArray3 = getRecipesByIngredientName(text);
    var aux = recipeArray1.concat(recipeArray2);
    var recipeArray = [...new Set(aux)];

    if (text == "") {
      setData([]);
    } else {
      setData(recipeArray);
    }
  };

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderBooks = ({ item }) => (
    <TouchableOpacity underlayColor="#ff" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} resizeMode='contain' source={{ uri: item.photo_url }} />
        <Text style={styles.title} numberOfLines={2} >{item.title}</Text>
        <Text style={styles.category} numberOfLines={1}>{item.author}, {item.year}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    // <View>
    //   <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={data} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
    // </View>
    <View>
        <FlatList vertical showsVerticalScrollIndicator={true} 
          numColumns={2} data={popularBooks} renderItem={renderBooks} 
          keyExtractor={(item) => `${item.recipeId}`} />
    </View>
    
  );
}
