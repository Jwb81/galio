import React from 'react';
import scopedStyles from './TabBar.styles';
import { withStyles } from '../../theme';
import { BottomTabBar } from 'react-navigation-tabs';

const TabBar = props => {
  const { theme, style, styles, navigation, ...rest } = props;
  return <BottomTabBar {...props} style={[styles.background]} {...rest} />;
};

export default withStyles(TabBar, scopedStyles);
