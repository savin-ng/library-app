import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, SafeAreaView, TouchableHighlight, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { popularBooks, latestBooks } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
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
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.texttitle}>Latest Books</Text>
        </View>
        <View>
          <FlatList vertical showsVerticalScrollIndicator={true} 
            horizontal={true}
            data={latestBooks} renderItem={renderBooks} 
            keyExtractor={(item) => `${item.recipeId}`} />
        </View>
        <View>
          <Text style={styles.texttitle}>Popular Books</Text>
        </View>
        <View>
          <FlatList vertical showsVerticalScrollIndicator={true} 
            numColumns={2} data={popularBooks} renderItem={renderBooks} 
            keyExtractor={(item) => `${item.recipeId}`} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
