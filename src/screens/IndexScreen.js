import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import moment from 'moment';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(BlogContext);

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

  return state && state.length > 0 ? (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={state}
        keyExtractor={(blogPosts) => blogPosts.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.postsList}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => navigation.navigate('ShowBlog', { id: item.id })}
              >
                <Text style={styles.title}>{item.title}</Text>
                <Text numberOfLines={1} style={styles.date}>
                  {moment(item.date).format('LLLL')}
                </Text>
                <Text numberOfLines={3} style={styles.content}>
                  {item.content}
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
  ) : (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
        NO POST FOUND.{' '}
      </Text>
      <Text style={{ textAlign: 'center' }}> Please add a new Post.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postsList: {
    borderBottomWidth: 0.3,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    lineHeight: 24,
  },
  date: {
    fontSize: 9,
    fontStyle: 'italic',
    color: 'gray',
  },
  content: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '100',
    textAlign: 'justify',
  },
  icon: {
    alignSelf: 'flex-start',
    fontSize: 24,
    color: 'tomato',
    paddingLeft: 8,
    marginTop: 6,
  },
});

export default IndexScreen;
