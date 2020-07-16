import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import IndexScreen from './screens/IndexScreen';
import ShowScreen from './screens/ShowScreen';
import CreateScreen from './screens/CreateScreen';
import EditPostScreen from './screens/EditPostScreen';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        gestureEnabled: true,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 16,
        },
        headerStyle: { backgroundColor: 'steelblue' },
        cardStyle: { backgroundColor: 'aliceblue' },
      }}
    >
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{
          title: 'Dashboard',
        }}
      />
      <Stack.Screen
        name="ShowBlog"
        component={ShowScreen}
        options={{
          title: 'Blog Post',
        }}
      />
      <Stack.Screen
        name="CreateBlog"
        component={CreateScreen}
        options={{
          title: 'Create Post',
        }}
      />
      <Stack.Screen
        name="EditPost"
        component={EditPostScreen}
        options={{
          title: 'Edit Post',
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My App',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
          cardStyle: { backgroundColor: 'antiquewhite' },
        }}
      />
    </Stack.Navigator>
  );
}
