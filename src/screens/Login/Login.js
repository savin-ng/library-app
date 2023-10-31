import React, { useLayoutEffect } from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function LogInScreen(props) {
  const { navigation } = props;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
        <Text style={styles.welcometext}>Welcome to the Library App!</Text>
        </View>
        <View>
            <Text style={styles.texttitle}>Username</Text>
            <TextInput style={styles.searchInput} placeholder="Enter email address"/>
        </View>
        <View>
            <Text style={styles.texttitle}>Password</Text>
            <TextInput style={styles.searchInput} placeholder="Enter password"/>
        </View>
        <View>
            <TouchableOpacity underlayColor='#9A4100' 
                onPress={() => {
                navigation.navigate("Home");
                navigation.closeDrawer();
                }}>
                <View style={styles.container}>
                     <Text style={styles.text}>Log In</Text>
                </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
