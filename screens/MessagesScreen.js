import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'Mosh Hamedani',
    description: 'Hey! Is this item still available?',
    image: require('../assets/images/mosh.jpg')
  },
  {
    id: 2,
    title: 'Mosh Hamedani',
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require('../assets/images/mosh.jpg')
  }
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log('message selected', item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          </GestureHandlerRootView>
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/images/mosh.jpg')
            }
          ]);
        }}
      ></FlatList>
    </SafeAreaView>
  );
}

export default MessagesScreen;
