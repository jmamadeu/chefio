import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { theme } from '~/theme';

type RecipeCardProps = {
  authorShown?: boolean;
};

export const RecipeCard: React.FC<RecipeCardProps> = ({ authorShown = true }) => {
  return (
    <View>
      {authorShown && (
        <View style={styles.authorContainer}>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/59426856?v=4' }}
            style={styles.image}
          />
          <Text style={styles.authorName}>João Amadeu</Text>
        </View>
      )}

      <View style={styles.imageContainer}>
        <Image
          style={styles.recipeImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          }}
        />
        <TouchableOpacity style={styles.favoriteButton} activeOpacity={0.8}>
          <Feather name="heart" size={22} color="white" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={[theme.typography.h2, styles.recipeName]}>Angolan Salad</Text>
        <Text style={theme.typography.p2}>Food &gt; 60 min</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: { width: 32, height: 32, borderRadius: 10 },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  authorName: {
    ...theme.typography.s,
    color: theme.colors.mainText,
    marginLeft: 8
  },
  imageContainer: {
    marginBottom: 16,
    position: 'relative'
  },
  recipeImage: { width: 150, height: 150, borderRadius: 16 },
  recipeName: {
    marginBottom: 8
  },
  favoriteButton: {
    position: 'absolute',
    left: 110,
    top: 10,

    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,

    height: 32,
    width: 32,

    alignItems: 'center',
    justifyContent: 'center'
  }
});
