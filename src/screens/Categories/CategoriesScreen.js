import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { categories, savedBooks } from "../../data/dataArrays";
// import { getNumberOfRecipes } from "../../data/MockDataAPI";
import MenuImage from "../../components/MenuImage/MenuImage";

export default function CategoriesScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Book Details", { item });
  };

  // const onPressCategory = (item) => {
  //   const title = item.name;
  //   const category = item;
  //   navigation.navigate("RecipesList", { category, title });
  // };

  // const renderCategory = ({ item }) => (
  //   <TouchableOpacity underlayColor="#ff" onPress={() => onPressCategory(item)}>
  //     <View style={styles.categoriesItemContainer}>
  //       <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
  //       <Text style={styles.categoriesName}>{item.name}</Text>
  //       {/* <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text> */}
  //     </View>
  //   </TouchableOpacity>
  // );

  const renderRecipes = ({ item }) => (
    <TouchableOpacity underlayColor="#ff" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} resizeMode='contain' source={{ uri: item.photo_url }} />
        <Text style={styles.title} numberOfLines={2} >{item.title}</Text>
        <Text style={styles.category} numberOfLines={1}>{item.author}, {item.year}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList data={savedBooks} renderItem={renderRecipes} keyExtractor={(item) => `${item.id}`} />
    </View>
  );
}
