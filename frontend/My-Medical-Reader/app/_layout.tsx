import React from 'react'
import { Slot, usePathname } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import BottomNav from './components/BottomNav/BottomNav'

const AppLayout = () => {
  const pathname = usePathname()

  const activeHub = (path: string): string => {
    switch (path) {
      case '/pages/home':
      case '/':
        return 'Home'
      case '/pages/upload':
        return 'Upload'
      case '/pages/messages':
        return 'Messages'
      default:
        return 'Home' // Default hub
    }
  };

  const currentHub = activeHub(pathname);

  return (
    <View style={{ flex: 1 }}>
      {/* Renders the content of the current route (page) */}
      <View style={{flex: 1, paddingBottom: 60 }}>
        <Slot />
      </View>

      <BottomNav hub={currentHub} />
    </View>
  )
}

export default AppLayout
