import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './BottomNav.styles'

import home from 'nhsapp-frontend/dist/assets/icons/home.svg'
import homeFilled from 'nhsapp-frontend/dist/assets/icons/home-filled.svg'
import upload from 'nhsapp-frontend/dist/assets/icons/cross.svg'
import uploadFilled from 'nhsapp-frontend/dist/assets/icons/cross-filled.svg'
import messages from 'nhsapp-frontend/dist/assets/icons/messages.svg'
import messagesFilled from 'nhsapp-frontend/dist/assets/icons/messages-filled.svg'

function BottomNav ({ hub }) {
  const router = useRouter()

  const navItems = [
    {
      name: 'Home',
      icon: hub === 'Home' ? homeFilled : home,
      route: 'pages/home'
    },
    {
      name: 'Upload',
      icon: hub === 'Upload' ? uploadFilled : upload,
      route: 'pages/upload'
    },
    {
      name: 'Messages',
      icon: hub === 'Messages' ? messagesFilled : messages,
      route: 'pages/messages'
    }
  ]

  return (
    <View style={styles.appBottomNavNative}>
      <View style={styles.nhsukWidthContainer}>
        <View style={styles.nhsukGridRow}>
          <View style={styles.appBottomNavNativeList}>
            {navItems.map((item) => (
              <TouchableOpacity
                key={item.name}
                style={styles.appBottomNavNativeItem}
                onPress={() => { router.push(item.route) }}
              >
                <View style={styles.appBottomNavNativeLink}>
                  {React.createElement(item.icon, { width: 28, height: 28, style: styles.nhsappIcon })}
                  <Text
                    style={[
                      styles.appBottomNavNativeLabel,
                      hub === item.name && styles.appBottomNavNativeLabelActive
                    ]}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  )
}

export default BottomNav
