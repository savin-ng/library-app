import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { popularBooks, latestBooks } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { ScrollView } from "react-native-gesture-handler";

export default function ProfileScreen(props) {
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

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
        <Text style={styles.texttitle}>Hello Savin</Text>
        </View>
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.category}>My Books</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.category}>My Wishlist</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.category}>My Borrowing History</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.category}>My Reviews</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.category}>Settings</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
