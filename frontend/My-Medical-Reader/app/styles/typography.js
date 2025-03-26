import { StyleSheet } from 'react-native'
import globals from './globals'

const nhsukFontBold = 'bold' // Example value, adjust as needed
const nhsukSecondaryTextColor = 'gray' // Example value, adjust as needed

const typography = StyleSheet.create({
  nhsukHeadingXl: {
    fontSize: 48,
    display: 'block',
    fontWeight: nhsukFontBold,
    marginTop: 0,
    marginBottom: globals.spacingPoints[7]
  },
  nhsukHeadingL: {
    fontSize: 36,
    display: 'block',
    fontWeight: nhsukFontBold,
    marginTop: 0,
    marginBottom: globals.spacingPoints[4]
  },
  nhsukHeadingM: {
    fontSize: 26,
    display: 'block',
    fontWeight: nhsukFontBold,
    marginTop: 0,
    marginBottom: globals.spacingPoints[4]
  },
  nhsukHeadingS: {
    fontSize: 22,
    display: 'block',
    fontWeight: nhsukFontBold,
    marginTop: 0,
    marginBottom: globals.spacingPoints[4]
  },
  nhsukHeadingXs: {
    fontSize: 19,
    display: 'block',
    fontWeight: nhsukFontBold,
    marginTop: 0,
    marginBottom: globals.spacingPoints[4]
  },
  nhsukHeadingXxs: {
    fontSize: 19,
    display: 'block',
    fontWeight: nhsukFontBold,
    marginTop: 0,
    marginBottom: globals.spacingPoints[4]
  },
  nhsukCaptionXl: {
    fontSize: 26,
    color: nhsukSecondaryTextColor,
    display: 'block',
    marginBottom: globals.spacingPoints[1]
  },
  nhsukCaptionL: {
    fontSize: 22,
    color: nhsukSecondaryTextColor,
    display: 'block',
    marginBottom: globals.spacingPoints[1]
  },
  nhsukCaptionM: {
    fontSize: 19,
    color: nhsukSecondaryTextColor,
    display: 'block'
  },
  nhsukCaptionBottom: {
    marginBottom: 0,
    marginTop: globals.spacingPoints[1]
  },
  nhsukBodyL: {
    fontSize: 24,
    display: 'block',
    marginTop: 0,
    marginBottom: globals.spacingPoints[5]
  },
  nhsukBodyM: {
    fontSize: 19,
    display: 'block',
    marginTop: 0,
    marginBottom: globals.spacingPoints[4]
  },
  nhsukBodyS: {
    fontSize: 16,
    display: 'block',
    marginTop: 0,
    marginBottom: globals.spacingPoints[4]
  },
  nhsukLedeText: {
    fontSize: 24,
    marginBottom: globals.spacingPoints[7]
  },
  nhsukLedeTextSmall: {
    fontSize: 19,
    marginBottom: globals.spacingPoints[5]
  }
})

export default typography
