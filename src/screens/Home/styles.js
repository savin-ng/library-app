import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
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
