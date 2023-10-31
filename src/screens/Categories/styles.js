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
    height: 260,
    backgroundColor: "#FFF",
    borderColor: '#DA8242',
    borderWidth: 0.5,
    borderRadius: 15
  },
  
  
  
  
  
  
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,

  texttitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#9A4100',
    marginTop: 5,
    marginRight: 5,
    marginLeft: 20,
  }
});

export default styles;
