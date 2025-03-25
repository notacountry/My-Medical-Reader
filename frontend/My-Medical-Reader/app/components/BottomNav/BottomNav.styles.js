import { StyleSheet } from 'react-native'
import { colors, spacingPoints } from '../../globals'

const styles = StyleSheet.create({
  appBottomNavNative: {
    backgroundColor: colors.nhsukLinkColor,
    bottom: 0,
    paddingBottom: 8,
    position: 'absolute',
    left: 0,
    width: '100%'
  },
  appBottomNavNativeList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: spacingPoints[1],
    margin: 0,
    paddingHorizontal: 10,
    width: '100%'
  },
  appBottomNavNativeItem: {
    lineHeight: 1,
    margin: 0,
    padding: 0,
    width: '25%'
  },
  appBottomNavNativeLink: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: spacingPoints[2],
    paddingVertical: 12,
    paddingBottom: 20,
    textDecorationLine: 'none'
  },
  appIcon: {
    fill: colors.nhsukWhite,
    height: 28,
    width: 28
  },
  nhsappIcon: {
    fill: colors.nhsukWhite,
    height: 28,
    width: 28
  },
  appBottomNavNativeLabel: {
    color: colors.nhsukWhite,
    fontSize: 12
  },
  appBottomNavNativeLabelActive: {
    fontWeight: 'bold'
  },
  nhsukWidthContainer: {
    width: '100%',
    paddingHorizontal: 10
  },
  nhsukGridRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default styles
