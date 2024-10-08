import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './Text';
import colors from '../../config/colors';

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions
}) {
  return (
    <View>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={colors.medium}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  subTitle: {
    color: colors.medium
  },
  title: {
    fontWeight: '700',
    fontSize: 18
  }
});

export default ListItem;
