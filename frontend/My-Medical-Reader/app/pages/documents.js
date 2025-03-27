import React from 'react'
import Card from '../components/Card/Card'
import { FlatList, StyleSheet, View } from 'react-native'
import SectionHeading from '../components/SectionHeading/SectionHeading'

const cardData = [
  { id: '1', title: 'Document 1', description: 'Description 1' },
  { id: '2', title: 'Document 2', description: 'Description 2' },
  { id: '3', title: 'Document 3', description: 'Description 3' },
  { id: '4', title: 'Document 4', description: 'Description 4' },
  { id: '5', title: 'Document 5', description: 'Description 5' }
]

const Documents = () => {
  return (
    <FlatList
      data={cardData}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <View style={styles.headerContainer}>
          <SectionHeading
            headingText='Documents'
            subheadingText={`You have ${cardData.length} documents`}
          />
        </View>
      )}
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
  headerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 10 // Add some space between the header and the list
  },
  listContainer: {
    paddingHorizontal: 10
  }
})

export default Documents
