import React from 'react';
import { withStyles } from '../../theme';
import { j } from '../../styles';
import Icon from '../Icon';
import scopedStyles from './TabBarIcon.styles';

const TabBarIcon = ({ theme, styles, style, name, family, focused }) => {
  return (
    <Icon
      name={name}
      family={family}
      style={[j.mt5, style]}
      color={focused ? theme.COLORS.INFO : theme.COLORS.TEXT_BASIC}
      size={focused ? 24 : 20}
      //
    />
  );
};

export default withStyles(TabBarIcon, scopedStyles);
