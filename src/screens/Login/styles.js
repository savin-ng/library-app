import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    width: 350,
    height: 30,
    backgroundColor: "#FFF",
    borderColor: '#DA8242',
    borderWidth: 0.5,
    borderRadius: 15
  },
  
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,

  welcometext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#9A4100',
    marginTop: 5,
    marginRight: 5,
    marginLeft: 20,
  },

  texttitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
    marginTop: 20,
    marginRight: 5,
    marginLeft: 20,
  },

  searchContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#EDEDED", 
    borderRadius: 10, 
    width: 250,
    justifyContent: "space-around"
  },
  
  searchInput: {
    width: 200,
    backgroundColor: "#DEDEDE",
    color: "black",
    width: 350,
    height: 50,
    marginLeft: 20,
    borderColor: "black",
    paddingLeft: 10

  }
});

export default styles;
