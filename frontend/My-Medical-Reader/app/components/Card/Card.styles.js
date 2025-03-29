import { StyleSheet } from 'react-native'
import { spacingPoints, colors } from '../../globals'

const cardBorderWidth = 1
const cardBorderColor = colors.nhsukGrey4
const cardBorderHoverColor = colors.nhsukGrey3
const nhsukLinkHoverColor = colors.nhsukLinkHover

export const styles = StyleSheet.create({
  card: {
    marginBottom: spacingPoints[5],
    backgroundColor: colors.nhsukWhite,
    borderWidth: cardBorderWidth,
    borderColor: cardBorderColor,
    position: 'relative',
    padding: 0
  },
  cardTitle: {
    color: colors.nhsukLinkColor,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 0
  },
  cardIcon: {
    height: 24,
    width: 24,
    flexShrink: 0,
    // React Native doesn't have direct fill, might need to use tintColor
    fill: colors.nhsukLinkColor
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingPoints[3],
    marginHorizontal: spacingPoints[3],
    paddingVertical: 20
  },
  cardContent: {
    flexGrow: 1
  },
  cardLink: {
    color: colors.nhsukLinkColor,
    fontSize: 22,
    fontWeight: 'bold',
    textDecorationLine: 'none'
    // The clickable area is handled by TouchableOpacity wrapping the card
  },
  cardLinkHover: {
    textDecorationLine: 'underline'
  },
  cardBelow: {
    // Styles for content below the main container
  },
  cardFooter: {
    borderTopWidth: cardBorderWidth,
    borderTopColor: cardBorderColor,
    marginHorizontal: spacingPoints[3],
    paddingVertical: 20
  },
  cards: {
    marginBottom: spacingPoints[5],
    listStyleType: 'none',
    padding: 0
  },
  cardsStacked: {
    marginBottom: spacingPoints[5]
  },
  cardsStackedItem: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginBottom: 0
  },
  cardsStackedItemContainer: {
    borderBottomWidth: cardBorderWidth,
    borderBottomColor: cardBorderColor
  },
  cardsStackedItemFirst: {
    borderTopWidth: cardBorderWidth
  },
  cardsStackedItemLast: {
    borderBottomWidth: cardBorderWidth
  },
  cardsStackedItemLastContainer: {
    borderBottomWidth: 0
  },
  cardsHeadingTopMargin: {
    paddingTop: spacingPoints[4]
  },
  cardsHeadingSmallTopMargin: {
    paddingTop: spacingPoints[1]
  },
  cardsHeadingMediumTopMarginTablet: {
    paddingTop: spacingPoints[2]
  },
  nhsukUMarginTop1: {
    marginTop: spacingPoints[1]
  }
})
