import { StyleSheet } from 'react-native'
import globals from '../../styles/globals'

const cardBorderWidth = 1
const cardBorderColor = globals.colors.nhsukGrey4
const cardBorderHoverColor = globals.colors.nhsukGrey3
const nhsukLinkHoverColor = globals.colors.nhsukLinkHover

const styles = StyleSheet.create({
  card: {
    marginBottom: globals.spacingPoints[5],
    backgroundColor: globals.colors.nhsukWhite,
    borderWidth: cardBorderWidth,
    borderColor: cardBorderColor,
    position: 'relative',
    padding: 0
  },
  cardTitle: {
    color: globals.colors.nhsukLinkColor,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 0
  },
  cardIcon: {
    height: 24,
    width: 24,
    flexShrink: 0,
    // React Native doesn't have direct fill, might need to use tintColor
    fill: globals.colors.nhsukLinkColor
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: globals.spacingPoints[3],
    marginHorizontal: globals.spacingPoints[3],
    paddingVertical: 20
  },
  cardContent: {
    flexGrow: 1
  },
  cardLink: {
    color: globals.colors.nhsukLinkColor,
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
    marginHorizontal: globals.spacingPoints[3],
    paddingVertical: 20
  },
  cards: {
    marginBottom: globals.spacingPoints[5],
    listStyleType: 'none',
    padding: 0
  },
  cardsStacked: {
    marginBottom: globals.spacingPoints[5]
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
    paddingTop: globals.spacingPoints[4]
  },
  cardsHeadingSmallTopMargin: {
    paddingTop: globals.spacingPoints[1]
  },
  cardsHeadingMediumTopMarginTablet: {
    paddingTop: globals.spacingPoints[2]
  },
  nhsukUMarginTop1: {
    marginTop: globals.spacingPoints[1]
  }
})

export default styles
