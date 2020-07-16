import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CreateBlog');
        }}
      >
        <Feather
          name="plus"
          color="white"
          style={{ fontSize: 30, marginRight: 16 }}
        />
      </TouchableOpacity>
    ),
  });

  return (
    <View style={{ flex: 1 }}>
      <Text>Index Screen </Text>
      <View style={styles.blogButtons}>
        <Button title="Add Blog" onPress={addBlogPost} color="#090" />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={state}
        keyExtractor={(blogPosts) => blogPosts.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.postTitle}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => navigation.navigate('ShowBlog', { id: item.id })}
              >
                <Text style={styles.title}>
                  {item.title} - {item.id} |{' '}
                  <Text style={{ fontWeight: '100' }}>
                    Demo Text is Here Demo Text is Here Demo Text is Here Demo
                    Text is Here Demo Text is Here
                  </Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash-2" style={styles.icon} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blogButtons: {
    marginVertical: 10,
    width: 120,
    alignSelf: 'center',
  },
  postTitle: {
    borderTopWidth: 0.3,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    lineHeight: 24,
  },
  icon: {
    alignSelf: 'flex-start',
    fontSize: 24,
    color: 'tomato',
    paddingLeft: 8,
  },
});

export default IndexScreen;
