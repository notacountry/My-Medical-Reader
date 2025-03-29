import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './Card.styles' // Assuming you have card styles
import ChevronRight from 'nhsapp-frontend/dist/assets/icons/chevron-right.svg'

// Replicating the nhsappBadgeLarge component (you'll need to implement this)
const NhsappBadgeLarge = ({ count, label, classes, ariaHidden }) => (
  <View style={null/* Implement badge styles here based on nhsuk-frontend */}>
    <Text>{count}</Text>
    <Text>{label}</Text>
  </View>
)

const Card = ({
  classes,
  prefixIcon,
  aboveContent,
  readOnly,
  linkAriaLabel,
  title,
  description,
  badgeLarge,
  footer,
  onPress // Add an onPress prop for handling clicks
}) => {
  const hasBadgeLarge = badgeLarge && badgeLarge.count > 0

  const cardContainerStyle = [styles.card, classes]

  return (
    <View style={cardContainerStyle}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={onPress}
        disabled={readOnly}
        accessibilityRole={readOnly ? 'text' : 'button'}
        accessibilityLabel={readOnly ? title : linkAriaLabel || title}
      >
        {prefixIcon && <Image source={prefixIcon} style={styles.cardIcon} />}
        <View style={styles.cardContent}>
          {aboveContent && aboveContent.html && (
            <View style={styles.cardAbove}>
              <Text>{aboveContent.html}</Text>
            </View>
          )}
          {readOnly
            ? (<Text style={styles.cardTitle}>{title}</Text>)
            : (<Text style={styles.cardLink}>{title}</Text>)}
          {description
            ? (
              <View style={styles.cardBelow}>
                <Text style={styles.nhsukUMarginTop1}>{description}</Text>
              </View>)
            : null}
        </View>
        {hasBadgeLarge && (
          <NhsappBadgeLarge
            count={badgeLarge.count}
            label={badgeLarge.label}
            classes={badgeLarge.classes}
            ariaHidden={badgeLarge.ariaHidden}
          />
        )}
        {!readOnly && <Image source={ChevronRight} style={styles.cardIcon} />}
      </TouchableOpacity>
      {footer && footer.html && (
        <View style={styles.cardFooter}>
          <Text>{footer.html}</Text>
        </View>
      )}
    </View>
  )
}

export default Card
