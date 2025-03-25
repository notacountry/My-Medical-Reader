import React from 'react'
import Card from '../components/Card/Card'
import { FlatList, StyleSheet } from 'react-native'

const cardData = [
  { id: '1', title: 'Message 1', description: 'Description 1' },
  { id: '2', title: 'Message 2', description: 'Description 2' },
  { id: '3', title: 'Message 3', description: 'Description 3' },
  { id: '4', title: 'Message 4', description: 'Description 4' },
  { id: '5', title: 'Message 5', description: 'Description 5' }
]

const Messages = () => {
  return (
    <FlatList
      data={cardData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          description={item.description}
          onPress={() => console.log(`Card ${item.id} clicked`)}
        />
      )}
      contentContainerStyle={styles.listContainer}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10
  }
})

export default Messages
