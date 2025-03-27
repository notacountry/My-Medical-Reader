import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import componentStyles from './SectionHeading.styles'
import typography from '../../styles/typography'

const SectionHeading = ({
  headingText,
  headingLevel = 2,
  subheadingText,
  linkText,
  linkUrl,
  classes
}) => {
  const getHeadingStyle = () => {
    switch (headingLevel) {
      case 1:
        return typography.nhsukHeadingXl
      case 2:
        return typography.nhsukHeadingL
      case 3:
        return typography.nhsukHeadingM
      case 4:
        return typography.nhsukHeadingS
      case 5:
        return typography.nhsukHeadingXs
      case 6:
        return typography.nhsukHeadingXxs
      default:
        return typography.nhsukHeadingL // Default
    }
  }

  const headingStyle = [
    getHeadingStyle(),
    subheadingText && typography.marginBottom3
  ]

  const sectionHeadingStyles = [componentStyles.sectionHeading]
  if (classes) {
    // Applying classes from props is less direct in React Native.
    // Consider mapping class names to specific styles or using inline styles.
    // Example: if (classes.includes('your-custom-class')) sectionHeadingStyles.push(styles.yourCustomClass);
    // For simplicity, we'll just log a warning here.
    console.warn('Applying CSS classes directly is not recommended in React Native. Consider using StyleSheet or inline styles.')
  }

  return (
    <View style={sectionHeadingStyles}>
      <Text style={headingStyle}>
        {headingText}
      </Text>
      {linkText && linkUrl && (
        <TouchableOpacity onPress={() => console.log(`Link "${linkText}" pressed. URL: ${linkUrl}`)}>
          <Text style={componentStyles.link}>
            {linkText}
          </Text>
        </TouchableOpacity>
      )}
      {subheadingText && (
        <Text style={typography.marginBottom5}>
          {subheadingText}
        </Text>
      )}
    </View>
  )
}

export default SectionHeading
