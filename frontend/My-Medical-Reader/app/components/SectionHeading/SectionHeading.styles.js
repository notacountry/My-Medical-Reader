import { StyleSheet } from 'react-native'
import globals from '../../styles/globals'

const styles = StyleSheet.create({
  sectionHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  link: {
    color: globals.colors.nhsukLinkColor,
    textDecorationLine: 'none',
    whiteSpace: 'nowrap'
  }
})

export default styles
