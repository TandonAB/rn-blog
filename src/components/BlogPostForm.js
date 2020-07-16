import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues, btnName }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
        <Button title={btnName} onPress={() => onSubmit(title, content)} />
      </View>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
  btnName: 'Save',
};

export default BlogPostForm;

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
