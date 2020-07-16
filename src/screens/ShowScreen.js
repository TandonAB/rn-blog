import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import moment from 'moment';
import { FontAwesome5 } from '@expo/vector-icons';

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(BlogContext);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('EditPost', { id: route.params.id })}
      >
        <FontAwesome5
          name="edit"
          color="white"
          style={{ fontSize: 24, marginRight: 16 }}
        />
      </TouchableOpacity>
    ),
  });

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
  return (
    <ScrollView>
      <View style={styles.showPostView}>
        <Text>
          Show Screen : {route.params?.id ?? '4O4 : NO SUCH PAGE FOUND'}
        </Text>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.date}>{moment(blogPost.date).format('LLLL')}</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </ScrollView>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  showPostView: {
    margin: 16,
    marginBottom: 48,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  date: {
    fontSize: 10,
    fontStyle: 'italic',
    color: 'gray',
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    marginTop: 16,
    fontWeight: '100',
    textAlign: 'justify',
  },
});
