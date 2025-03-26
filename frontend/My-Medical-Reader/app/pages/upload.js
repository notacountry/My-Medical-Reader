import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Upload() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickImage = async () => {
    try {
      setIsLoading(true);
      console.log('Checking media library permissions...');
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log('Media library permission status:', status);

      if (status !== 'granted') {
        console.log('Media library permission denied');
        Alert.alert('Permission Required', 'Please grant permission to access your photos.');
        return;
      }

      console.log('Launching image picker...');
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
        base64: true,
      });
      console.log('Image picker result:', result);

      if (!result.canceled) {
        console.log('Image selected:', result.assets[0].uri);
        setImage(result.assets[0].uri);
        await saveImageToMessages(result.assets[0]);
      } else {
        console.log('Image selection cancelled');
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', `Failed to pick image: ${error.message || 'An unknown error occurred'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const saveImageToMessages = async (imageAsset) => {
    try {
      // Get existing messages
      const existingMessagesJson = await AsyncStorage.getItem('messages');
      const existingMessages = existingMessagesJson ? JSON.parse(existingMessagesJson) : [];
      
      // Create new message object
      const newMessage = {
        id: Date.now().toString(),
        type: 'image',
        content: imageAsset.uri,
        timestamp: new Date().toISOString(),
        base64: imageAsset.base64,
      };

      // Add new message to the beginning of the array
      const updatedMessages = [newMessage, ...existingMessages];
      
      // Save back to AsyncStorage
      await AsyncStorage.setItem('messages', JSON.stringify(updatedMessages));
      
      Alert.alert('Success', 'Image saved to messages!');
    } catch (error) {
      console.error('Error saving image to messages:', error);
      Alert.alert('Error', 'Failed to save image to messages');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Upload Medical Document</Text>
        <Text style={styles.subtitle}>Select an image from your camera roll</Text>
        
        {image ? (
          <View style={styles.previewContainer}>
            <Image source={{ uri: image }} style={styles.preview} />
            <TouchableOpacity 
              style={[styles.button, styles.retryButton]} 
              onPress={() => setImage(null)}
            >
              <Text style={styles.buttonText}>Choose Different Image</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity 
            style={[styles.button, isLoading && styles.buttonDisabled]} 
            onPress={pickImage}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Select Image</Text>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  previewContainer: {
    width: '100%',
    alignItems: 'center',
  },
  preview: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#FF3B30',
  },
});
