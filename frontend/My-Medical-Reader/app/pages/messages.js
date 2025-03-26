import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const messagesJson = await AsyncStorage.getItem('messages');
      if (messagesJson) {
        const loadedMessages = JSON.parse(messagesJson);
        setMessages(loadedMessages);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFavorite = async (messageId) => {
    try {
      const updatedMessages = messages.map(msg => {
        if (msg.id === messageId) {
          return { ...msg, isFavorite: !msg.isFavorite };
        }
        return msg;
      });
      
      // Sort messages: favorites first, then by timestamp
      const sortedMessages = updatedMessages.sort((a, b) => {
        if (a.isFavorite && !b.isFavorite) return -1;
        if (!a.isFavorite && b.isFavorite) return 1;
        return new Date(b.timestamp) - new Date(a.timestamp);
      });

      await AsyncStorage.setItem('messages', JSON.stringify(sortedMessages));
      setMessages(sortedMessages);
    } catch (error) {
      console.error('Error toggling favorite:', error);
      Alert.alert('Error', 'Failed to update favorite status');
    }
  };

  const deleteMessage = async (messageId) => {
    Alert.alert(
      'Delete Document',
      'Are you sure you want to delete this document?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const updatedMessages = messages.filter(msg => msg.id !== messageId);
              await AsyncStorage.setItem('messages', JSON.stringify(updatedMessages));
              setMessages(updatedMessages);
            } catch (error) {
              console.error('Error deleting message:', error);
              Alert.alert('Error', 'Failed to delete document');
            }
          }
        }
      ]
    );
  };

  const renderMessage = ({ item }) => {
    if (item.type === 'image') {
      return (
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image 
              source={{ uri: item.processedImage ? `data:image/png;base64,${item.processedImage}` : item.content }} 
              style={styles.documentImage}
              resizeMode="cover"
            />
            <View style={styles.cardDetails}>
              <View style={styles.cardInfo}>
                <Text style={styles.timestamp}>
                  {new Date(item.timestamp).toLocaleString()}
                </Text>
                <Text style={styles.documentType}>Medical Document</Text>
                {item.extractedText && (
                  <Text style={styles.previewText} numberOfLines={2}>
                    {item.extractedText}
                  </Text>
                )}
              </View>
              <View style={styles.cardActions}>
                <TouchableOpacity 
                  onPress={() => toggleFavorite(item.id)}
                  style={styles.actionButton}
                >
                  <Ionicons 
                    name={item.isFavorite ? "star" : "star-outline"} 
                    size={24} 
                    color={item.isFavorite ? "#FFD700" : "#666"} 
                  />
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => deleteMessage(item.id)}
                  style={styles.actionButton}
                >
                  <Ionicons name="trash-outline" size={24} color="#FF3B30" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    }
    return null;
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medical Documents</Text>
      {messages.length === 0 ? (
        <Text style={styles.emptyText}>No documents uploaded yet</Text>
      ) : (
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    height: 120,
  },
  documentImage: {
    width: 120,
    height: '100%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  cardDetails: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  cardInfo: {
    flex: 1,
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  actionButton: {
    padding: 8,
    marginLeft: 8,
  },
  timestamp: {
    fontSize: 14,
    color: '#666',
  },
  documentType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginTop: 4,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
  previewText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    fontStyle: 'italic',
  },
});
