# My Medical Reader

A React Native application for uploading and managing medical documents.

## Features

- Upload medical documents from camera roll
- View uploaded documents in a card-based interface
- Favorite documents for quick access
- Delete documents with confirmation
- Persistent storage of documents

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your mobile device (for testing)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend/My-Medical-Reader
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Scan the QR code with your mobile device:
- iOS: Use the Camera app
- Android: Use the Expo Go app

## Usage

### Uploading Documents
1. Navigate to the Upload tab
2. Tap "Select Image" to choose a medical document from your camera roll
3. The document will be automatically saved and appear in the Messages tab

### Managing Documents
1. View all uploaded documents in the Messages tab
2. Tap the star icon to favorite a document (moves to top of list)
3. Tap the trash icon to delete a document (with confirmation)
4. Documents are displayed with their upload timestamp

## Dependencies

Key dependencies include:
- `expo-image-picker`: For selecting images from camera roll
- `@react-native-async-storage/async-storage`: For persistent storage
- `@expo/vector-icons`: For UI icons
- `expo`: Core Expo framework
- `react-native`: React Native framework

## Development

- The app uses Expo Router for navigation
- Documents are stored locally using AsyncStorage
- Images are stored with base64 encoding for future backend processing

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
