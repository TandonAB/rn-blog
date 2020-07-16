import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import moment from 'moment';
import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { addBlogPost } = useContext(BlogContext);

  const date = new Date();
  // const date = moment(today, 'DD-MM-YYYY');
  // const date = today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
  // const date = moment().format('MMMM Do YYYY, h:mm:ss a'); // July 16th 2020, 1:25:33 pm
  // const date = moment(today).calendar();

  return (
    <View style={styles.postView}>
      <View style={styles.formRowView}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          title="title"
          style={styles.inputBox}
          placeholder="Post Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>

      <View style={styles.formRowView}>
        <Text style={styles.label}>Content</Text>
        <TextInput
          title="content"
          style={[styles.inputBox, styles.textArea]}
          multiline={true}
          numberOfLines={10}
          placeholder="Enter post content here..."
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      </View>

      <View style={[styles.formRowView, { marginTop: 8 }]}>
        <Button
          title="Add New Post"
          onPress={() => addBlogPost(title, content, date)}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  postView: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 30,
  },
  inputBox: {
    borderWidth: 0.3,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  textArea: {
    textAlignVertical: 'top',
    height: 210,
  },
  formRowView: {
    marginBottom: 16,
  },
});
