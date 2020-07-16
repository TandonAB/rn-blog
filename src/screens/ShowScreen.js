import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import moment from 'moment';

const ShowScreen = ({ route }) => {
  const { state } = useContext(BlogContext);

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
    fontSize: 12,
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
