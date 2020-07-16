import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ route }) => {
  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  return (
    <View>
      <Text>
        Show Screen : {route.params?.id ?? '4O4 : NO SUCH PAGE FOUND'}
      </Text>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
